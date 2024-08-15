"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./styles.module.css";

const InfiniteLooper = function InfiniteLooper({ speed, direction, children }) {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  const resetAnimation = () => {
    if (innerRef.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  };

  const setupInstances = useCallback(() => {
    if (!innerRef.current || !outerRef.current) return;

    const { width, height } = innerRef.current.getBoundingClientRect();
    const { width: parentWidth, height: parentHeight } =
      outerRef.current.getBoundingClientRect();

    const widthDeficit = parentWidth - width;
    const heightDeficit = parentHeight - height;

    const instanceSize =
      direction === "left" || direction === "right"
        ? width / innerRef.current.children.length
        : height / innerRef.current.children.length;

    if (
      (direction === "left" || direction === "right") &&
      widthDeficit > 0
    ) {
      setLooperInstances((prevInstances) =>
        prevInstances + Math.ceil(widthDeficit / instanceSize) + 1
      );
    }

    if (
      (direction === "top" || direction === "bottom") &&
      heightDeficit > 0
    ) {
      setLooperInstances((prevInstances) =>
        prevInstances + Math.ceil(heightDeficit / instanceSize) + 1
      );
    }

    resetAnimation();
  }, [direction]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [setupInstances]);

  const getAnimationStyles = () => {
    if (direction === "left" || direction === "right") {
      return {
        animationName: styles.slideAnimHorizontal,
        animationDirection: direction === "right" ? "reverse" : "normal",
      };
    } else if (direction === "top" || direction === "bottom") {
      return {
        animationName: styles.slideAnimVertical,
        animationDirection: direction === "bottom" ? "reverse" : "normal",
      };
    }
    return {};
  };

  return (
    <div
      className={styles.container}
      ref={outerRef}
      style={{ flexDirection: direction === "top" || direction === "bottom" ? "column" : "row" }}
    >
      <div
        className={styles.looper__innerList}
        ref={innerRef}
        data-animate="true"
        style={{ flexDirection: direction === "top" || direction === "bottom" ? "column" : "row" }}
      >
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className={styles.looper__listInstance}
            style={{
              ...getAnimationStyles(),
              animationDuration: `${speed}s`,
            }}
          >
            {children}
          </div>
        ))}
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={`${ind}-duplicate`}
            className={styles.looper__listInstance}
            style={{
              ...getAnimationStyles(),
              animationDuration: `${speed}s`,
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLooper;
