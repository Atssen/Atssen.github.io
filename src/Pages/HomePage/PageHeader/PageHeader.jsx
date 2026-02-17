import styles from './PageHeader.module.css';
import React from "react";

export function PageHeader() {
    const [isAtTop, setIsAtTop] = React.useState(true);

    window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
            setIsAtTop(true);
        }
        else
        {
            setIsAtTop(false);
        }
    });

    return (
        <div className={ isAtTop ? styles.pageHeaderTop : styles.pageHeaderBelow }>
            <div className={styles.pageHeaderLeft}>
                {/*<h2>Aloha Rides HI</h2>*/}
                <img className={styles.headerImg} src={"/hawaii-jeep-rent-logo-optimized-PYEE1Vub.webp"}/>
            </div>
            <div className={styles.pageHeaderRight}>
                <div className={styles.pageHeaderText}>Features</div>
                <div className={styles.pageHeaderText}>Gallery</div>
                <div className={styles.pageHeaderText}>Details</div>
                <div className={styles.pageHeaderText}>Contact</div>
                <div className={styles.gapBetween}></div>
                <button className={styles.pageHeaderBookButton}>Book Now</button>
            </div>
        </div>
    )
}