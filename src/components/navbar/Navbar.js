import React, { useEffect, useState, useRef } from "react";
import styles from "./styles.module.css";
import headerLogo from "../../assets/headerIcons/company_logo.png";
import hamburger from "../../assets/headerIcons/hamburger.png";
import cross from "../../assets/headerIcons/cross.png";
import about from '../../assets/headerIcons/about.png';
import contact from '../../assets/headerIcons/contact.png';
import downarrow from '../../assets/headerIcons/down_arrow.png'
import rightarrow from '../../assets/headerIcons/right_arrow.png'



function Header() {

    const [showText, setShowText] = useState(false);
    const [mobNav, setmobNav] = useState(false);
    const [showAbout, setShowAbout] = useState(false);

    const handlemobNav = () => {
        setmobNav(!mobNav)
    }


    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowText(false);
                setShowAbout(false)
            }

        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleAboutUs = () => {
        setShowAbout(!showAbout)
    };


    return (
        <>
            <header className={styles.mainCon} ref={dropdownRef}>
                <nav className={styles.mainNav}>
                    <div className={styles.logo}>
                        <a href="/">
                            <img className={styles.company_logo} src={headerLogo} alt="header logo" />
                        </a>
                    </div>

                    {/* Mobile Sidebar */}
                    <div className={styles.moboptions}>
                        <div>
                            <div onClick={() => handlemobNav()} className={`${mobNav ? styles.hamburgerclose : styles.hamburger}`}>
                                <img src={hamburger} alt="hamburger logo" />
                            </div>
                            <div onClick={() => handlemobNav()} className={`${mobNav ? styles.cross : styles.crossclose}`}>
                                <img src={cross} alt="cross logo" />
                            </div>
                        </div>
                    </div>

                    {/* Navbar , Dropdown and User Profile */}
                    <div className={styles.menuContainer}>
                        <label>
                            List your practice
                        </label>

                        <div className={styles.vl}></div>

                        <label>
                            For Employers
                        </label>

                        <div className={styles.vl}></div>

                        <label>
                            Courses
                        </label>

                        <div className={styles.vl}></div>

                        <label>
                            Books
                        </label>

                        <div className={styles.vl}></div>

                        <label>
                            Speakers
                        </label>

                        <div className={styles.vl}></div>

                        <label>
                            Doctors
                        </label>


                        <div className={styles.vl}></div>

                        <div>
                            <label
                                onClick={() => { handleAboutUs() }}
                            >
                                <span>Login/Signup</span>
                                <div><img className={showAbout ? styles.animatearrow : ''} width={15} height={15} src={downarrow} alt="down arrow" /></div>
                            </label>
                            {showAbout && (
                                <div className={`${styles["ddhover"]} ${styles["ddhoverabout"]}`}>
                                    <ui>
                                        <li>
                                            <div>
                                                <a>
                                                    <div className={styles.cardcontent}>
                                                        <div className={styles.maincontent}>
                                                            <label>
                                                                <strong>Doctor</strong>
                                                            </label>
                                                            <u>Login</u>
                                                            <u>SignUp</u>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                        <li>
                                            <div>
                                                <a>
                                                    <div className={styles.cardcontent}>
                                                        <div className={styles.maincontent}>
                                                            <label>
                                                                <strong>Patients</strong>
                                                            </label>
                                                            <u>Login</u>
                                                            <u>SignUp</u>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </li>
                                    </ui>
                                </div>
                            )}
                        </div>

                    </div>
                </nav>


                {/* Mobile Navbar */}

                {
                    mobNav &&
                    <nav className={styles.mobmainNav}>
                        <div className={styles.mobmenuContainer}>

                            <div className={styles.mobmenuTopOptions}>
                                <div className={styles.mobmenuTopOptionsDiv}>
                                    <div className={styles.mobmenuoptions}>
                                        <label>
                                            <strong>Doctor</strong>
                                        </label>
                                        <u>Login</u>
                                        <u>SignUp</u>
                                    </div>

                                    <div className={styles.mobmenuoptions}>
                                        <label>
                                            <strong>Patients</strong>
                                        </label>
                                        <u>Login</u>
                                        <u>SignUp</u>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.mobmenuoptions}>
                                <label>
                                    List your practice
                                </label>
                                <img width={30} height={30} src={rightarrow} />
                            </div>


                            <div className={styles.mobmenuoptions}>
                                <label
                                >
                                    For Employers
                                </label>
                                <img width={30} height={30} src={rightarrow} />
                            </div>


                            <div className={styles.mobmenuoptions}>
                                <label>
                                    Courses
                                </label>
                                <img width={30} height={30} src={rightarrow} />
                            </div>


                            <div className={styles.mobmenuoptions}>
                                <label>
                                    Books
                                </label>
                                <img width={30} height={30} src={rightarrow} />
                            </div>


                            <div className={styles.mobmenuoptions}>
                                <label>
                                    Speakers
                                </label>
                                <img width={30} height={30} src={rightarrow} />
                            </div>


                            <div className={styles.mobmenuoptions}>
                                <label>
                                    Doctors
                                </label>
                                <img width={30} height={30} src={rightarrow} />
                            </div>

                        </div>
                    </nav>
                }
            </header>
        </>
    );
}

export default Header
