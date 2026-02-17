import styles from "./BookingPage.module.css"
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {PAGES} from "../../../routes.js";
import Dates from "./Steps/Dates/Dates.jsx";
import {Vehicle} from "./Steps/Vehicle/Vehicle.jsx";
import {Protection} from "./Steps/Protection/Protection.jsx";
import {Extras} from "./Steps/Extras/Extras.jsx";
import {Review} from "./Steps/Review/Review.jsx";

export default function BookingPage() {

    const navigate = useNavigate();
    const [fullPrice, setFullPrice] = useState(0);
    const [currentStep, setCurrentStep] = useState(1);
    const bookingPanelRef = useRef(null);
    const mainScrollRef = useRef(null);
    const [activePanelId, setActivePanelId] = useState(0);
    const [dayPrice, setDayPrice] = useState(0);
    const [pickDropPrice, setPickDropPrice] = useState(45);
    const [vehiclePrice, setVehiclePrice] = useState(150);
    const [dayCount, setDayCount] = useState(0);
    const [totalProtectionPrice, setTotalProtectionPrice] = useState(0);
    const [pickUpTime, setPickUpTime] = useState("9:00 AM");
    const [dropOffTime, setDropOffTime] = useState("7:00 PM");
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const pickDropOpts = ["Waikiki Garage Pickup", "Waikiki Hotel Delivery", "Honolulu Airport (HNL)"]
    const [selectedPickDropOpt, setSelectedPickDropOpt] = useState(1);
    const [extrasPrice, setExtrasPrice] = useState(0);
    const extras = [
        { id: 0, title: 'Child Safety Seat', desc: 'Infant/Toddler/Booster seat', price: 15 },
        { id: 1, title: 'Beach Cooler', desc: 'Large insulated cooler', price: 10 },
        { id: 2, title: 'Beach Chairs (2)', desc: 'Folding beach chairs', price: 10 },
        { id: 3, title: 'Snorkel Gear', desc: 'Mask, snorkel, and fins', price: 10 },
        { id: 4, title: 'GPS Navigation', desc: 'Portable GPS device', price: 15 },
        { id: 5, title: 'Surfboard Rack', desc: 'Roof-mounted board carrier', price: 20 },
    ];
    const [selectedIds, setSelectedIds] = useState([]);
    const isOneTimeSelected = selectedIds.includes(5);
    const autoLiabilityPrice = 19.99;
    const fullCoveragePrice = 49.99;
    const underAgeFee = 39.99;
    const rentalVehicleSurchargeTax = 7.99;
    const licensingFee = 2.99;

    const [selectedInsurance, setSelectedInsurance] = useState(0);
    const [isUnderAge, setIsUnderAge] = useState(false);

    const insurancePrice =
        selectedInsurance === 1 ? autoLiabilityPrice * dayCount
            : selectedInsurance === 2 ? fullCoveragePrice * dayCount
                : 0;

    const mandatoryInsurancePrice = (rentalVehicleSurchargeTax+licensingFee)*dayCount;

    const [extraUnderAgePrice, setExtraUnderAgePrice] = useState(0);

    const [hawaiiGETAdded, setHawaiiGETAdded] = useState(0);
    const hawaiiGET = 4.712;


    const [canContinue, setCanContinue] = useState(true);
    const [isMandatoriesGiven, setIsMandatoriesGiven] = useState(false);
    const [validateTrigger, setValidateTrigger] = useState(false);


    useEffect(() => {
        setExtraUnderAgePrice(isUnderAge ? (underAgeFee * dayCount) : 0);
    }, [isUnderAge])

    useEffect(() => {
        setCanContinue(
            dayCount===null ? false :
                isMandatoriesGiven===false && currentStep=== 5 ? false :
                    true
        );
    }, [dayCount, isMandatoriesGiven, currentStep])


    useEffect(() => {
        setTotalProtectionPrice(insurancePrice+extraUnderAgePrice+mandatoryInsurancePrice);
    }, [insurancePrice, extraUnderAgePrice, mandatoryInsurancePrice]);


    const mainPriceLog = [
        { title: ("Vehicle Rental (" + (dayCount+ ` day${dayCount>1? "s" : ""} * $` + vehiclePrice+")")), price: dayCount*vehiclePrice},
        ...extras.filter(item => selectedIds.includes(item.id) && item.id!==5).map( item =>
            ({ title: item.title, price: item.price * dayCount})
        ),
        ...(isOneTimeSelected
            ? [{ title: extras[5].title, price: extras[5].price }]
            : []),
        { title: pickDropOpts[selectedPickDropOpt], price: pickDropPrice},
    ];

    const insuranceFeesLog = [
        selectedInsurance === 1 && { title: "Auto Liability Insurance", price: autoLiabilityPrice*dayCount },
        selectedInsurance === 2 && { title: "Full Coverage Insurance", price: fullCoveragePrice*dayCount },
        isUnderAge && { title: "Under Age Fee (Under 21)", price: underAgeFee*dayCount }
    ].filter(Boolean);


    const mandatoryFeesLog = [
        {title: "Rental Vehicle Surcharge Tax", price: rentalVehicleSurchargeTax*dayCount},
        {title: "Licensing Fee", price: licensingFee*dayCount},
    ];


    function nextStep()
    {
        if (currentStep < 5) setCurrentStep(currentStep + 1);
        if (currentStep === 5 && isMandatoriesGiven) {
            setValidateTrigger(true);
            return;
        }
    }

    function goBack()
    {
        if (currentStep > 1) setCurrentStep(currentStep - 1);
        else navigate(PAGES.HOMEPAGE);
    }

    function setDateTimeFromString(date, timeString) {
        if (!date || !timeString) return null;

        const [time, modifier] = timeString.split(" ");
        let [hours, minutes] = time.split(":").map(Number);

        if (modifier === "PM" && hours !== 12) hours += 12;
        if (modifier === "AM" && hours === 12) hours = 0;

        const newDate = new Date(date);
        newDate.setHours(hours, minutes, 0, 0);
        return newDate;
    }

    useEffect(() => {
        setDayPrice(dayCount*vehiclePrice);
    }, [dayCount, vehiclePrice])


    useEffect(() => {
        setHawaiiGETAdded((dayPrice+pickDropPrice+totalProtectionPrice+extrasPrice)*(hawaiiGET/100))
        setFullPrice((dayPrice+pickDropPrice+totalProtectionPrice+extrasPrice)*(1 + (hawaiiGET/100)));
    }, [dayPrice, pickDropPrice, totalProtectionPrice, extrasPrice])



    const stepNames = [
        { id: 1, label: "Dates" },
        { id: 2, label: "Vehicle" },
        { id: 3, label: "Protection" },
        { id: 4, label: "Extras" },
        { id: 5, label: "Review" },
    ];

    const getStepClass = (id) => {
        if (id === currentStep) return styles.currentStep;
        if (id < currentStep) return styles.pastStep;
        return styles.step;
    };

    const steps = {
        1: (
            <Dates
                setPickDropPrice={setPickDropPrice}
                activePanelId={activePanelId}
                setActivePanelId={setActivePanelId}
                setDayCount={setDayCount}
                pickUpTime={pickUpTime}
                setPickUpTime={setPickUpTime}
                dropOffTime={dropOffTime}
                setDropOffTime={setDropOffTime}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                pickDropOpts={pickDropOpts}
                selectedPickDropOpt={selectedPickDropOpt}
                setSelectedPickDropOpt={setSelectedPickDropOpt}
                vehiclePrice={vehiclePrice}
            />
        ),

        2: (<Vehicle
                setVehiclePrice={setVehiclePrice}
                vehiclePrice={vehiclePrice}
            />
        ),

        3:(
            <Protection
                dayCount={dayCount}
                totalProtectionPrice={totalProtectionPrice}
                autoLiabilityPrice={autoLiabilityPrice}
                fullCoveragePrice={fullCoveragePrice}
                underAgeFee={underAgeFee}
                rentalVehicleSurchargeTax={rentalVehicleSurchargeTax}
                licensingFee={licensingFee}
                insurancePrice={insurancePrice}
                mandatoryInsurancePrice={mandatoryInsurancePrice}
                selectedInsurance={selectedInsurance}
                setSelectedInsurance={setSelectedInsurance}
                isUnderAge={isUnderAge}
                setIsUnderAge={setIsUnderAge}
                extraUnderAgePrice={extraUnderAgePrice}

            />
        ),
        4:(
            <Extras
                dayCount={dayCount}
                extras={extras}
                extrasPrice={extrasPrice}
                setExtrasPrice={setExtrasPrice}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
                isOneTimeSelected={isOneTimeSelected}
            />
        ),
        5:(
            <Review
                pickUp={setDateTimeFromString(startDate, pickUpTime)}
                dropOff={setDateTimeFromString(endDate, dropOffTime)}
                location={pickDropOpts[selectedPickDropOpt]}
                mainPriceLog={mainPriceLog}
                insuranceFeesLog={insuranceFeesLog}
                mandatoryFeesLog={mandatoryFeesLog}
                hawaiiGET={hawaiiGET}
                hawaiiGETAdded={hawaiiGETAdded}
                fullPrice={fullPrice}
                isMandatoriesGiven={isMandatoriesGiven}
                setIsMandatoriesGiven={setIsMandatoriesGiven}
                validateTrigger={validateTrigger}
                setValidateTrigger={setValidateTrigger}
            />
        )
    };


    return (
        <div className={styles.bg}>
            <div className={styles.bookingPanel} ref={bookingPanelRef}>
                <div className={styles.titleHeader} style={{marginLeft: "30px"}}> Book your Jeep Wrangler</div>

                <div className={styles.bookingStepper}>
                    {stepNames.map(({ id, label }) => (
                        <div key={id} className={getStepClass(id)}>
                            <div className={styles.stepText}>{label}</div>
                            <div>{id < currentStep ? "✓" : id}</div>
                        </div>
                    ))}
                </div>

                <div
                    className={`${styles.mainPanelContextContainer} ${activePanelId !== 0 ? styles.scrollLocked : ""}`}
                    ref={mainScrollRef}
                >
                    {steps[currentStep]}
                </div>

                <div className={styles.bottomNavContainer}>
                    <div className={styles.navBackButton} onClick={goBack}>&lt; Back</div>
                    {dayCount>0 && <div className={styles.navPrice}>${fullPrice.toFixed(2)}</div>}

                    <div className={ canContinue ? styles.navContinueButton : styles.navContinueButtonGrayed} onClick={canContinue ? nextStep : () => null}>Continue</div>
                </div>
            </div>
        </div>
    )
}