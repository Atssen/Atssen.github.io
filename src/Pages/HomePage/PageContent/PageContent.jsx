import styles from "./PageContent.module.css"
import jeepImg from "../../../../public/jeep-photo-3-C5sOEFWW.avif"
import {useNavigate} from "react-router-dom";
import {PAGES} from "../../../../routes.js";

export function PageContent() {

    const navigate = useNavigate();

    return (
        <>
            <div className={styles.mainImgContainer}>
                <img src={jeepImg}/>
                <div className={styles.overlay}></div>
                <div className={styles.featGroup}>
                    <div className={styles.feat}>
                        <img className={styles.featIcon} src={"https://cdn-icons-png.flaticon.com/128/2893/2893811.png"}/>
                        5.0 Rating
                    </div>
                    <div className={styles.feat}>
                        <img className={styles.featIcon} src={"https://cdn-icons-png.flaticon.com/128/446/446075.png"}/>
                        183 Trips
                    </div>
                    <div className={styles.feat}>
                        <img className={styles.featIcon} src={"https://cdn-icons-png.flaticon.com/128/9918/9918743.png"}/>
                        All-Star Host
                    </div>
                </div>
                <div className={styles.mainText}>
                    <div className={styles.mainTextHeader}>Explore Island in Style </div>
                    <div className={styles.mainSubText}> White Soft Top Jeep Wrangler • Unlimited Mileage • Free Beach Chair Rentals </div>
                </div>
                <div className={styles.buttonsContainer}>
                    <button className={styles.bookDirectButton} onClick={() => navigate(PAGES.BOOKING)}> Book Direct With Us </button>
                    <button className={styles.bookOnTuroButton}> Book On Turo <div className={styles.redirectIcon}/> </button>
                </div>

            </div>
            <div className={styles.detailsSection}>
                <div className={styles.circularHeader}> Our Vehicle </div>
                <div className={styles.header}> The Perfect Ride </div>
                <div className={styles.subText}> Our Jeep Wranglers are equipped with everything you need for an unforgettable Hawaiian adventure </div>
                <div className={styles.detailsContainer}>
                    <div className={styles.detailBox}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/15738/15738775.png"} />
                        <div className={styles.title}> 5 Passengers </div>
                        <div className={styles.description}> Comfortable seating for you and your crew </div>
                    </div>
                    <div className={styles.detailBox}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/2011/2011448.png"} />
                        <div className={styles.title}> Soft Top & Hard Top </div>
                        <div className={styles.description}> Drop the top and feel the Hawaiian breeze, or keep it covered </div>
                    </div>
                    <div className={styles.detailBox}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/565/565789.png"} />
                        <div className={styles.title}> White & Red </div>
                        <div className={styles.description}> Choose your style - pristine white or bold red </div>
                    </div>
                    <div className={styles.detailBox}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/1687/1687804.png"} />
                        <div className={styles.title}> Automatic </div>
                        <div className={styles.description}> Easy to drive with automatic transmission </div>
                    </div>
                </div>
            </div>
            <div className={styles.gallerySection}>
                <div className={styles.circularHeader}> Gallery </div>
                <div className={styles.header} style={{color:"rgba(0, 0, 0, 0.76)"}}> Your Adventure Awaits </div>
                <div className={styles.subText} style={{color:"rgba(0, 0, 0, 0.76)"}}> From coastal drives to beach parking, this Jeep is ready for anything Oahu has to offer </div>

                <div className={styles.imagesContainer}>
                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.galleryImg}
                            src="/hero-background-2-optimized-FTVjk1Nw.webp"
                            alt=""
                        />
                        <div className={styles.overlayText}>Your custom text</div>
                    </div>
                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.galleryImg}
                            src="/jeep-photo-1-8zjNycQC.avif"
                            alt=""
                        />
                        <div className={styles.overlayText}>Your custom text</div>
                    </div>

                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.galleryImg}
                            src="/jeep-photo-2-I9tszGyE.avif"
                            alt=""
                        />
                        <div className={styles.overlayText}>Your custom text</div>
                    </div>

                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.galleryImg}
                            src="/jeep-photo-3-C5sOEFWW.avif"
                            alt=""
                        />
                        <div className={styles.overlayText}>Your custom text</div>
                    </div>

                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.galleryImg}
                            src="jeep-photo-7-ktfXQLH6.avif"
                            alt=""
                        />
                        <div className={styles.overlayText}>Your custom text</div>
                    </div>

                    <div className={styles.imgWrapper}>
                        <img
                            className={styles.galleryImg}
                            src="jeep-sunset-view-optimized-k8tBFkha.webp"
                            alt=""
                        />
                        <div className={styles.overlayText}>Your custom text</div>
                    </div>
                </div>

            </div>
            <div className={styles.ourPromiseSection}>
                <div className={styles.circularHeader}> Our Promise </div>
                <div className={styles.header} style={{textShadow:"rgb(0, 0, 0) 0 0 10px"}}> Why Rent With Us? </div>
                <div className={styles.subText} style={{textShadow:"rgb(0, 0, 0) 0 0 10px"}}> Experience hassle-free rental with great service and a well-maintained vehicle </div>

                <div className={styles.advantagesContainer}>

                    <div className={styles.advantageBox}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/447/447031.png"}/>

                        <div className={styles.textSection}>
                            <p className={styles.title}> Prime Waikiki Location </p>
                            <p className={styles.label}> Easy pickup and drop-off at Centennial Park Waikiki </p>
                        </div>
                    </div>

                    <div className={styles.advantageBox}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/3981/3981909.png"}/>

                        <div className={styles.textSection}>
                            <p className={styles.title}> Unlimited Mileage </p>
                            <p className={styles.label}> Drive as much as you want - explore the entire island without limits </p>
                        </div>
                    </div>

                    <div className={styles.advantageBox}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/16988/16988584.png"}/>

                        <div className={styles.textSection}>
                            <p className={styles.title}> Beach Gear Available </p>
                            <p className={styles.label}> Coolers, chairs, snorkel gear and more available to rent </p>
                        </div>
                    </div>

                    <div className={styles.advantageBox}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/95/95454.png"}/>

                        <div className={styles.textSection}>
                            <p className={styles.title}> Insurance Options </p>
                            <p className={styles.label}> Multiple coverage options available - liability or full coverage </p>
                        </div>
                    </div>

                    <div className={styles.advantageBox}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/2893/2893811.png"}/>

                        <div className={styles.textSection}>
                            <p className={styles.title}> Top-Rated Host </p>
                            <p className={styles.label}> 5-star reviews from happy customers who loved their experience </p>
                        </div>
                    </div>

                    <div className={styles.advantageBox}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/9300/9300019.png"}/>

                        <div className={styles.textSection}>
                            <p className={styles.title}> Flexible Booking </p>
                            <p className={styles.label}> Choose from daily or weekly rentals that fit your schedule </p>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.footerSection}>
                <div className={styles.footerItemsContainer}>
                    <div className={styles.footerItem}>
                        <p className={styles.title}> Service Areas </p>
                        <a className={styles.link} href={""}> Waikiki </a>
                        <a className={styles.link} href={""}> Honolulu </a>
                        <a className={styles.link} href={""}> North Shore </a>
                        <a className={styles.link} href={""}> Kailua </a>
                        <a className={styles.link} href={""}> Kaneohe </a>
                        <a className={styles.link} href={""}> Airport Delivery </a>
                    </div>

                    <div className={styles.footerItem}>
                        <p className={styles.title}> Service Areas </p>
                        <a className={styles.link} href={""}> Waikiki </a>
                        <a className={styles.link} href={""}> Honolulu </a>
                        <a className={styles.link} href={""}> North Shore </a>
                        <a className={styles.link} href={""}> Kailua </a>
                        <a className={styles.link} href={""}> Kaneohe </a>
                        <a className={styles.link} href={""}> Airport Delivery </a>
                    </div>

                    <div className={styles.footerItem}>
                        <p className={styles.title}> Service Areas </p>
                        <a className={styles.link} href={""}> Waikiki </a>
                        <a className={styles.link} href={""}> Honolulu </a>
                        <a className={styles.link} href={""}> North Shore </a>
                        <a className={styles.link} href={""}> Kailua </a>
                        <a className={styles.link} href={""}> Kaneohe </a>
                        <a className={styles.link} href={""}> Airport Delivery </a>
                    </div>

                    <div className={styles.footerItem}>
                        <p className={styles.title}> Service Areas </p>
                        <a className={styles.link} href={""}> Waikiki </a>
                        <a className={styles.link} href={""}> Honolulu </a>
                        <a className={styles.link} href={""}> North Shore </a>
                        <a className={styles.link} href={""}> Kailua </a>
                        <a className={styles.link} href={""}> Kaneohe </a>
                        <a className={styles.link} href={""}> Airport Delivery </a>
                    </div>
                </div>

                <div className={styles.separator}/>

                <div className={styles.footerCopyright}>
                    <p>© 2026 Hawaii Jeep Rent. All rights reserved.</p>
                    <p>Hawaii's Premier Jeep Wrangler Rental Service | Serving Oahu, Waikiki, Honolulu & North Shore</p>
                </div>
            </div>

        </>
    )
}