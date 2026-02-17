import styles from "./Review.module.css"
import {useEffect, useState} from "react";

export function Review({mainPriceLog, location, pickUp, dropOff, mandatoryFeesLog, insuranceFeesLog, hawaiiGET, hawaiiGETAdded, fullPrice, isMandatoriesGiven, setIsMandatoriesGiven, validateTrigger, setValidateTrigger}) {

    const [hotelAdress, setHotelAdress] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const [phoneErrorMsg, setPhoneErrorMsg] = useState("");
    const [emailErrorMsg, setEmailErrorMsg] = useState("");

    useEffect(() => {
        setIsMandatoriesGiven(fullName!=="" && phone!=="");
    }, [fullName, phone]);

    useEffect(() => {
        setPhoneErrorMsg("");
    }, [phone]);

    useEffect(() => {
        setEmailErrorMsg("");
    }, [email]);

    useEffect(() => {
        if (!validateTrigger) return;

        validatePhone();
        validateEmail()

        setValidateTrigger(false);

    }, [validateTrigger]);

    const validatePhone = () =>
        setPhoneErrorMsg( !((/^\d+$/.test(phone)) && phone.length===10) ?
        "Incorrect phone number format"
        : "");

    const validateEmail = () =>
        setEmailErrorMsg(
            !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) ?
                "Incorrect email format" :
                ""
        );



    return (
        <>
            <div className={styles.summaryBox} style={{height:"350px"}}>
                <div style={{marginTop:"12px"}}></div>
                <p className={styles.header}> Booking Summary </p>
                <div className={styles.reviewGroup}>
                    <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/3729/3729070.png"} />
                    <div className={styles.textSection} style={{float:"right"}} >
                        <p> Jeep Wrangler 4x4 </p>
                        <div> <p style={{userSelect:"none", float:"left"}}> ∞&nbsp; </p> Unlimited Miles Included</div>
                    </div>
                </div>

                <div className={styles.seperator}></div>

                <div className={styles.itemGrid}>

                    <div className={styles.reviewGroup}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/2886/2886665.png"} />
                        <div className={styles.textSection} style={{float:"right"}} >
                            <p> Pickup Date</p>
                            <p>
                                {
                                    pickUp.toLocaleString("en-US", {
                                        month: "long",
                                        day: "2-digit",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })
                                }
                            </p>
                        </div>
                    </div>

                    <div className={styles.reviewGroup}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/2886/2886665.png"} />
                        <div className={styles.textSection} style={{float:"right"}} >
                            <p> Return </p>
                            <p>
                                {
                                    dropOff.toLocaleString("en-US", {
                                            month: "long",
                                            day: "2-digit",
                                            year: "numeric",
                                            hour: "2-digit",
                                            minute: "2-digit",
                                    })
                                }
                            </p>
                        </div>
                    </div>

                    <div className={styles.reviewGroup}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/447/447031.png"} />
                        <div className={styles.textSection} >
                            <p> Location </p>
                            <p> {location} </p>
                        </div>
                    </div>
                    <div className={styles.hotelInfo}>
                        <img className={styles.icon} src={"https://cdn-icons-png.flaticon.com/128/5429/5429579.png"} />
                        <div className={styles.textSection} >
                            <p className={styles.title}> Hotel Name / Address (optional) </p>

                            <input className={styles.input}
                                   type="text"
                                   value={hotelAdress}
                                   onChange={(e) => setHotelAdress(e.target.value)}
                                   placeholder="e.g. Hilton Hawaiian Village, 2005 Kalia Rd"
                            />

                            <p className={styles.footer}> We'll confirm delivery details before pickup </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.summaryBox} style={{height:"auto"}}>
                <div style={{marginTop:"12px"}}></div>
                <p className={styles.header}> Price Details </p>

                <div style={{marginTop:"12px"}}></div>

                {mainPriceLog.map( item => (
                        <div className={styles.priceLine}>
                            <p className={styles.label}> {item.title} </p>
                            <p className={styles.price}> ${item.price.toFixed(2)} </p>
                        </div>
                    )
                )}

                <div className={styles.seperator}></div>

                <p className={styles.smallHeader}> MANDATORY FEES </p>
                {mandatoryFeesLog.map( item => (
                        <div className={styles.priceLine}>
                            <p className={styles.label}> {item.title} </p>
                            <p className={styles.price}> ${item.price.toFixed(2)} </p>
                        </div>
                    )
                )}

                <div style={{marginTop:"12px"}}></div>

                {insuranceFeesLog.length > 0 && (
                    <>
                        <p className={styles.smallHeader}>INSURANCE FEES </p>

                        {insuranceFeesLog.map(item => (
                            <div key={item.title} className={styles.priceLine}>
                                <p className={styles.label}>{item.title}</p>
                                <p className={styles.price}>${item.price.toFixed(2)}</p>
                            </div>
                        ))}
                    </>
                )}

                <div className={styles.seperator}></div>

                <div className={styles.priceLine}>
                    <p className={styles.label}> Hawaii GET ({hawaiiGET}%) </p>
                    <p className={styles.price}> ${hawaiiGETAdded.toFixed(2)} </p>
                </div>

                <div className={styles.seperator}></div>

                <div className={styles.priceLine}>
                    <p style={{fontSize: "18px", fontWeight: "600"}}> Total </p>
                    <p style={{fontSize: "18px", fontWeight: "500"}}> ${fullPrice.toFixed(2)} </p>
                </div>

                <div style={{marginTop:"12px"}}></div>

            </div>

            <div className={styles.contactInfoGroup}>

                <p className={styles.header}> Contact Information </p>

                <div className={styles.headerSection}>
                    <img className={styles.img} src={"https://cdn-icons-png.flaticon.com/128/1077/1077114.png"}/>
                    <p> Full Name * </p>
                </div>
                <input className={styles.input}
                       type="text"
                       value={fullName}
                       onChange={(e) => setFullName(e.target.value)}
                       placeholder="Your full name"
                />

                <div className={styles.headerSection}>
                    <img className={styles.img} src={"https://cdn-icons-png.flaticon.com/128/597/597177.png"}/>
                    <p> Phone * </p>
                </div>


                <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                    <input className={styles.input}
                           type="text"
                           value={phone}
                           onChange={(e) => setPhone(e.target.value)}
                           placeholder="+1 (555) 000-0000"
                    />
                    <p className={`${styles.errorMsg} ${phoneErrorMsg!=="" ? styles.showErrorMsg : ""}`}> {phoneErrorMsg} </p>
                </div>




                <div className={styles.headerSection}>
                    <img className={styles.img} src={"https://cdn-icons-png.flaticon.com/128/542/542689.png"}/>
                    <p> Email (optional) </p>
                </div>


                <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                    <input className={styles.input}
                           type="text"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="your.email@example.com"
                    />
                    <p className={`${styles.errorMsg} ${emailErrorMsg!=="" ? styles.showErrorMsg : ""}`}> {emailErrorMsg} </p>
                </div>


                <p className={styles.footer}> For booking confirmation </p>

            </div>

        </>
    )
}