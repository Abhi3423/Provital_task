import React from 'react'
import styles from '../styles/HomeStyles.module.css'
import Header from '../components/navbar/Navbar'
import SearchBar from '../components/searchbar/SearchBar'
import Carousel from '../components/carousel/carousel'
import VerticalCarousel from '../components/VerticalCarousel/VerticalCarousel'

function Home() {
  return (
    <div>
      <Header />
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

      <Carousel/>

      
    </div>
  )
}

export default Home
