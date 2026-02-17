import styles from "./Extras.module.css"
import {useEffect, useState} from "react";

export function Extras({dayCount, extrasPrice, setExtrasPrice, extras, selectedIds, setSelectedIds, isOneTimeSelected}) {

    const totalPrice = extras
        .filter(item => selectedIds.includes(item.id) && item.id!==5)
        .reduce((sum, item) => sum + item.price, 0);

    const toggleSelection = (id) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
        );
    };

    useEffect(() => {
        setExtrasPrice(
            totalPrice*dayCount +
            (isOneTimeSelected ? extras[5].price : 0)
        );
    }, [totalPrice, isOneTimeSelected]);

    return (
        <>
            <div style={{marginTop:"11px"}} ></div>

            <p className={styles.header}> Enhance Your Trip </p>
            <p className={styles.mainSubText}> Optional add-ons to make your adventure even better </p>

            <div className={styles.verticalCardContainer}>
                {
                    extras.map(item => (
                        <div key={item.id} className={selectedIds.includes(item.id) ? styles.selectableCardSelected : styles.selectableCard} onClick={() => toggleSelection(item.id)}>
                            <img style={{filter:"invert(1)"}} className={styles.icon} src={ selectedIds.includes(item.id) ? "https://cdn-icons-png.flaticon.com/128/711/711239.png" : "https://cdn-icons-png.flaticon.com/128/1828/1828919.png"}/>
                            <div className={styles.textSection}>
                                <p className={styles.title}> {item.title} </p>
                                <p className={styles.subText}> {item.desc} </p>
                            </div>
                            <div className={styles.priceSection}>
                                <p className={styles.price}> ${ item.id!==5 ? (item.price * dayCount).toFixed(2) : item.price} </p>
                                {
                                    item.id !== 5 ?
                                        <p className={styles.priceSubText}> ${item.price}/day × {dayCount} days </p>
                                        : <p className={styles.priceSubText}> one-time </p>

                                }

                            </div>
                        </div>
                    ))
                }
            </div>

            <div className={styles.summaryBox}>

                <div style={{marginTop:"12px"}}></div>

                <div className={styles.priceLine}>
                    <p className={styles.label}> {selectedIds.length} extras selected </p>
                    <p className={styles.price}> +${extrasPrice}</p>
                </div>

                <div style={{marginTop:"12px"}}></div>
            </div>

        </>
    )
}