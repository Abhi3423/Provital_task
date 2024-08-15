import React from 'react'
import styles from './styles.module.css'
import SVGSearch from '../../shared/UI/searchIcon'
import SVGLocation from '../../shared/UI/locationIcon'
import SVGNote from '../../shared/UI/noteIcon'

function SearchBar() {
    return (
        <div className={styles.container}>
            <form className={styles.formcontainer}>
                <div className={styles.formitem}>
                    <div className={styles.inputBox}>
                        <span className={styles.icon}><SVGSearch width={"20px"} height={"20px"} clr={"#8F90A1"} id="search-icon-1" /></span>
                        <input type="text" placeholder="Condition, procedure, speciality..." />
                    </div>

                </div>
                <div className={styles.formitem}>
                    <div className={styles.inputBox}>
                        <span className={styles.icon}><SVGLocation/></span>
                        <input type="text" placeholder="City, state, or zipcode" />
                    </div>
                </div>
                <div className={styles.formitem}>
                    <div className={styles.inputBox}>
                        <span className={styles.icon}><SVGNote/></span>
                        <input type="text" placeholder="Insurance carrier" />
                    </div>
                </div>
                <div className={styles.formitem}>
                    <button type="submit" className={styles.submitbutton}>
                        <SVGSearch width={"16px"} height={"16px"} clr={"#FFFFFF"} id="search-icon-2" />
                        Find Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar
