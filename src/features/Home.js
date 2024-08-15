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
        <VerticalCarousel />

        <div className={styles.innerContainer}>
          <div className={styles.innerContainerHeader}>Book an appointment with
            <span className={styles.innerContainerColored}>lifestyle medicine</span> experts
          </div>
          <div className={styles.innerContainerFooter}>Optimize your lifestyle and reverse chronic diseases</div>
        </div>

        <SearchBar  className={styles.item3}/>
      </div>
    </div>
  )
}

export default Home
