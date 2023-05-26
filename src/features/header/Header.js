import React from 'react'
import plates from "./plates.jpg"
import styles from '../../App.module.css'

const Header = () => {
    return (
        <header className={styles.appHeader}>
            <img src={plates} className={styles.appLogo} alt="plates" />
            <h1>What to Eat</h1>
        </header>
    )
}

export default Header
