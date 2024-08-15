import React from 'react'
import styles from '../styles/HomeStyles.module.css'
import Header from '../components/navbar/Navbar'
import SearchBar from '../components/searchbar/SearchBar'
import Carousel from '../components/carousel/carousel'
import VerticalCarousel from '../components/VerticalCarousel/VerticalCarousel'
import InfiniteLooper from '../shared/utils/InfiniteLoop'
import cardsData from '../shared/utils/CardsData'
import Card from '../components/cards/card'

function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div>
        <div className={styles.topContainer}>

          <div className={styles.item1}><VerticalCarousel /></div>

          <div className={styles.item2}>
            <div className={styles.innerContainer}>
              <div className={styles.innerContainerHeader}>
                <span>Book an appointment with</span>
                <span>
                  <span className={styles.innerContainerColored}>lifestyle medicine</span> experts
                </span>
              </div>
              <div className={styles.innerContainerFooter}>Optimize your lifestyle and reverse chronic diseases</div>
            </div>
          </div>

          <div className={styles.item3}><SearchBar /></div>
        </div>
        <div className={styles.item4}></div>
      </div>




      {/* HOW IT WORKS CONTAINER */}
      <div className={styles.bottomContainer}>
        <div className={styles.LargeBottomContainerContent}>
          <Carousel />
        </div>
        <div className={styles.MobileBottomContainerContent}>
          <div className={styles.main}>HOW IT WORKS</div>
          <div className={styles.content}>
            <span className={styles.coloredCon}>Lifestyle as medicine:</span>
            <span> The six pillars</span>
          </div>
          <InfiniteLooper speed={30} direction='left'>
            <div className={styles.MobileBottomInnerContainer}>
              {cardsData.map((card) => (
                <Card
                  imageSrc={card.imageSrc}
                  overlayIcon={card.overlayIcon}
                  overlayContent={card.overlayContent}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </InfiniteLooper>
        </div>
      </div>


    </div>
  )
}

export default Home
