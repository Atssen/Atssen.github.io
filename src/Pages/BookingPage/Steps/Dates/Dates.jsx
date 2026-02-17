import styles from "./Dates.module.css"
import DoubleCalendar from "./DoubleCalendar/DoubleCalendar.jsx";
import {useRef} from "react";
import useClickOutside from "../../../../Utils/useClickOutside.jsx";

export default function Dates({setPickDropPrice, activePanelId, setActivePanelId, setDayCount, pickUpTime, setPickUpTime, dropOffTime, setDropOffTime, startDate, setStartDate, endDate, setEndDate, pickDropOpts, setSelectedPickDropOpt, selectedPickDropOpt, vehiclePrice}) {

    const pickupTimePickerRef = useRef(null);
    const dropOffTimePickerRef = useRef(null);
    const timePanelRef = useRef(null);

    const panelRefs = {
        1: pickupTimePickerRef,
        2: dropOffTimePickerRef,
    };


    const [timesStart, timesEnd] = ["5:30AM", "10:30PM"];

    const timeOptions = generateTimeSlots(timesStart, timesEnd);

    function generateTimeSlots(start, end) {
        const slots = [];

        const parseTime = (time) => {
            const [, h, m, p] = time.match(/(\d+):(\d+)(AM|PM)/);
            let hour = parseInt(h, 10);
            const minute = parseInt(m, 10);

            if (p === "PM" && hour !== 12) hour += 12;
            if (p === "AM" && hour === 12) hour = 0;

            return hour * 60 + minute;
        };

        const formatTime = (minutes) => {
            let hour = Math.floor(minutes / 60);
            const minute = minutes % 60;
            const period = hour >= 12 ? " PM" : " AM";

            if (hour === 0) hour = 12;
            else if (hour > 12) hour -= 12;

            return `${hour}:${minute === 0 ? "00" : minute}${period}`;
        };

        let current = parseTime(start);
        const endMinutes = parseTime(end);

        while (current <= endMinutes) {
            slots.push(formatTime(current));
            current += 30;
        }

        return slots;
    }

    useClickOutside({
        activeId: activePanelId,
        refs: panelRefs,
        onClose: () => setActivePanelId(0),
    });

    return (
        <>
            <div className={styles.header} style={{position:"relative", left:"10px", marginTop: "20px"}}>Select Rental Dates</div>
            <DoubleCalendar setDayCount={setDayCount} startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} vehiclePrice={vehiclePrice} />
            <div className={styles.verticalGap}></div>
            <div className={styles.header} style={{position:"relative", left:"10px"}}>Pickup & Drop-off Location</div>

            <div className={styles.selectionsContainer}>
                <div
                    className={selectedPickDropOpt === 0 ? styles.selectionClicked : styles.selection}
                    onClick={() => {setSelectedPickDropOpt(0); setPickDropPrice(0)}}>
                    <div>
                        <div style={{fontWeight:700, fontSize: "1.1em"}}> {pickDropOpts[0]} </div>
                        <div>Self pickup from our garage</div>
                    </div>
                    <div style={{fontWeight:500, fontSize: "1.05em"}}>FREE</div>
                </div>
                <div
                    className={selectedPickDropOpt === 1 ? styles.selectionClicked : styles.selection}
                    onClick={() => {setSelectedPickDropOpt(1); setPickDropPrice(45)}}>
                    <div>
                        <div style={{fontWeight:700, fontSize: "1.1em"}}> {pickDropOpts[1]} </div>
                        <div>Delivered to your hotel</div>
                    </div>
                    <div style={{fontWeight:500, fontSize: "1.05em"}}>+$45</div>
                </div>
                <div
                    className={selectedPickDropOpt === 2 ? styles.selectionClicked : styles.selection}
                    onClick={() => {setSelectedPickDropOpt(2); setPickDropPrice(100)}}>
                    <div>
                        <div style={{fontWeight:700, fontSize: "1.1em"}}> {pickDropOpts[2]} </div>
                        <div>Airport delivery & pickup</div>
                    </div>
                    <div style={{fontWeight:500, fontSize: "1.05em"}}>+$100</div>
                </div>
            </div>

            <div className={styles.timesContainer} style={{marginTop:"60px"}}>
                <div
                    className={styles.timePicker}
                    ref={pickupTimePickerRef}
                    onClick={() =>
                        setActivePanelId(prev => (prev === 1 ? 0 : 1))
                    }
                >
                    <div className={styles.timePickerTitleText} style={{right: "60%"}}>
                        Pick-Up Time
                    </div>
                    <div className={styles.timePickerTime}>
                        {pickUpTime}
                    </div>

                    {activePanelId === 1 && (
                        <div
                            ref={timePanelRef}
                            className={styles.timeSelectionPanel}
                        >
                            {timeOptions.map((time) => (
                                <div key={time} onClick={() => setPickUpTime(time)}>
                                    {time}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div
                    className={styles.timePicker}
                    ref={dropOffTimePickerRef}
                    onClick={() =>
                        setActivePanelId(prev => (prev === 2 ? 0 : 2))
                    }
                >
                    <div className={styles.timePickerTitleText} style={{right: "55%"}}>
                        Drop-Off Time
                    </div>
                    <div className={styles.timePickerTime}>
                        {dropOffTime}
                    </div>
                    {activePanelId === 2 && (
                        <div
                            ref={timePanelRef}
                            className={styles.timeSelectionPanel}
                        >
                            {timeOptions.map((time) => (
                                <div key={time} onClick={() => setDropOffTime(time)}>
                                    {time}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className={styles.verticalGap}/>

        </>
    )
}