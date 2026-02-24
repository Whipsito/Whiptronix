import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div>
        <header>
            <nav className={styles.nav}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header