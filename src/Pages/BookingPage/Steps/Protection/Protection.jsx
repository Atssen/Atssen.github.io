import styles from "./Protection.module.css"

export function Protection({dayCount, totalProtectionPrice, insurancePrice, rentalVehicleSurchargeTax, autoLiabilityPrice, isUnderAge, fullCoveragePrice, mandatoryInsurancePrice, selectedInsurance, underAgeFee, licensingFee, setIsUnderAge, setSelectedInsurance, extraUnderAgePrice}) {

    const COVERAGE_OPTIONS = [
        {
            id: "personal",
            title: "Personal Auto Insurance",
            description: "Use your personal car insurance (US/Canada). Must provide proof (ID card) at pickup.",
            priceText: "Free",
            icon: "https://cdn-icons-png.flaticon.com/128/709/709701.png",
            selectable: false,
        },
        {
            id: "credit",
            title: "Credit Card Auto Insurance",
            description: "Many credit cards offer rental coverage. Does not include liability. Proof required at pickup.",
            priceText: "Free",
            icon: "https://cdn-icons-png.flaticon.com/128/423/423468.png",
            selectable: false,
        },
        {
            id: "third-party",
            title: "Third Party Insurance",
            description: "Purchase through Rentalcover.com. Must have CDW and SLI policies at pickup.",
            priceText: "FREE (purchase separately)",
            icon: "https://cdn-icons-png.flaticon.com/128/2991/2991112.png",
            selectable: false,
        },
    ];

    const PURCHASED_INSURANCE = [
        {
            id: 1,
            title: "Auto Liability Insurance",
            description: "State minimum liability - covers damage to others if at fault",
            iconSelected: "https://cdn-icons-png.flaticon.com/128/711/711239.png",
            iconUnselected: "https://cdn-icons-png.flaticon.com/128/1828/1828919.png",
            priceKey: "autoLiabilityPrice",
            isToggle: false,
        },
        {
            id: 2,
            title: "Full Coverage Insurance",
            description: "No deductible, includes liability. Police report required for incidents",
            iconSelected: "https://cdn-icons-png.flaticon.com/128/711/711239.png",
            iconUnselected: "https://cdn-icons-png.flaticon.com/128/1828/1828919.png",
            priceKey: "fullCoveragePrice",
            isToggle: false,
        },
        {
            id: "underAge",
            title: "Under Age Fee (Under 21)",
            description: "Required for drivers under 21 years old",
            iconSelected: "https://cdn-icons-png.flaticon.com/128/711/711239.png",
            iconUnselected: "https://cdn-icons-png.flaticon.com/128/1828/1828919.png",
            priceKey: "underAgeFee",
            isToggle: true,
        },
    ];

    const MANDATORY_FEES = [
        {
            id: "surcharge",
            title: "Rental Vehicle Surcharge Tax",
            description: "State-mandated rental surcharge",
            priceKey: "rentalVehicleSurchargeTax",
        },
        {
            id: "licensing",
            title: "Licensing Fee",
            description: "Vehicle license recovery fee",
            priceKey: "licensingFee",
        },
    ];



    return (
        <>
            <div style={{marginTop:"11px"}}></div>
            <p className={styles.header}> Protections & Coverages </p>
            <p className={styles.mainSubText}> Choose your insurance coverage option </p>

            <div style={{marginTop:"11px"}}></div>

            <p className={styles.smallHeader}> Coverage Options (Choose One or Provide Proof) </p>
            <div style={{marginTop:"9px"}}></div>
            <div className={styles.verticalCardContainer}>
                <div className={styles.verticalCardContainer}>
                    {COVERAGE_OPTIONS.map(option => (
                        <div key={option.id} className={styles.card}>
                            <img style={{ filter: "invert(1)" }} className={styles.icon} src={option.icon} />
                            <div className={styles.textSection}>
                                <p className={styles.title}>{option.title}</p>
                                <p className={styles.subText}>{option.description}</p>
                                <p className={styles.price}>{option.priceText}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div style={{marginTop:"35px"}}></div>

            <p className={styles.smallHeader}> Purchase Insurance From Us </p>
            <div style={{marginTop:"9px"}}></div>
            <div className={styles.verticalCardContainer}>
                <div className={styles.verticalCardContainer}>
                    {PURCHASED_INSURANCE.map(item => {
                        const isSelected =
                            item.isToggle ? isUnderAge : selectedInsurance === item.id;

                        const price =
                            item.priceKey === "underAgeFee"
                                ? underAgeFee
                                : item.priceKey === "autoLiabilityPrice"
                                    ? autoLiabilityPrice
                                    : fullCoveragePrice;

                        const onClick = () => {
                            if (item.isToggle) {
                                setIsUnderAge(!isUnderAge);
                            } else {
                                setSelectedInsurance(selectedInsurance === item.id ? 0 : item.id);
                            }
                        };

                        return (
                            <div
                                key={item.id}
                                className={isSelected ? styles.selectableCardSelected : styles.selectableCard}
                                onClick={onClick}
                            >
                                <img
                                    style={{ filter: "invert(1)" }}
                                    className={styles.icon}
                                    src={isSelected ? item.iconSelected : item.iconUnselected}
                                />
                                <div className={styles.textSection}>
                                    <p className={styles.title}>{item.title}</p>
                                    <p className={styles.subText}>{item.description}</p>
                                </div>
                                <div className={styles.priceSection}>
                                    <p className={styles.price}>${(price * dayCount).toFixed(2)}</p>
                                    <p className={styles.priceSubText}>
                                        ${price}/day × {dayCount} days
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

            <div style={{marginTop:"35px"}}></div>

            <p className={styles.smallHeader}> Mandatory Fees & Taxes </p>
            <div style={{marginTop:"9px"}}></div>
            <div className={styles.verticalCardContainer}>
                <div className={styles.verticalCardContainer}>
                    {MANDATORY_FEES.map(fee => {
                        const price =
                            fee.priceKey === "rentalVehicleSurchargeTax"
                                ? rentalVehicleSurchargeTax
                                : licensingFee;

                        return (
                            <div key={fee.id} className={styles.mandatoryCard}>
                                <img
                                    style={{ filter: "invert(1)" }}
                                    className={styles.icon}
                                    src="https://cdn-icons-png.flaticon.com/128/545/545684.png"
                                />
                                <div className={styles.textSection}>
                                    <div className={styles.title}>
                                        {fee.title} <div className={styles.required}>Required</div>
                                    </div>
                                    <p className={styles.subText}>{fee.description}</p>
                                </div>
                                <div className={styles.priceSection}>
                                    <p className={styles.price}>${(price * dayCount).toFixed(2)}</p>
                                    <p className={styles.priceSubText}>
                                        ${price}/day × {dayCount} days
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>

            <div style={{marginTop:"35px"}}></div>

            <div className={styles.summaryBox}>

                <div style={{marginTop:"12px"}}></div>

                <div className={styles.priceLine}>
                    <p className={styles.label}> Optional Insurance </p>
                    <p className={styles.price}> ${(insurancePrice+extraUnderAgePrice).toFixed(2)} </p>
                </div>
                <div className={styles.priceLine}>
                    <p className={styles.label}> Mandatory Fees </p>
                    <p className={styles.price}> ${mandatoryInsurancePrice.toFixed(2)} </p>
                </div>

                <div className={styles.seperator}></div>


                <div className={styles.priceLine}>
                    <p style={{fontWeight:"500"}}> Protection Total </p>
                    <p style={{fontWeight:"500"}}> ${totalProtectionPrice.toFixed(2)} </p>
                </div>

                <div style={{marginTop:"12px"}}></div>
            </div>

            <div style={{marginTop:"35px"}}></div>

        </>
    )
}