import { useEffect, useState } from "react";
import styles from "./DoubleCalendar.module.css";

const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

export default function DoubleCalendar({setStartDate, vehiclePrice, endDate, setEndDate, startDate, setDayCount}) {

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const [year1, setYear1] = useState(today.getFullYear());
    const [month1, setMonth1] = useState(today.getMonth());



    const canGoBack1 =
        year1 > today.getFullYear() ||
        (year1 === today.getFullYear() && month1 > today.getMonth());


    const date2 = new Date(year1, month1 + 1, 1);

    const year2 = date2.getFullYear();
    const month2 = date2.getMonth();

    const [selectOrder, setSelectOrder] = useState(false)


    const normalize = (date) => {
        if (!date) return null;
        const d = new Date(date);
        d.setHours(0, 0, 0, 0);
        return d.getTime();
    };

    const start = startDate && normalize(startDate);
    const end = endDate && normalize(endDate);

    const dayCount = start && end && Math.floor((end-start) / (1000 * 60 * 60 * 24) + 1);

    useEffect(() => {
        setDayCount(dayCount);
    }, [dayCount]);



    useEffect(() => {
        if (startDate && endDate && startDate > endDate) {
            setStartDate(endDate);
            setEndDate(startDate);
        }
    }, [startDate, endDate]);



    const getDays = (year, month, today, startDate, endDate) => {
        const days = [];
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const prevMonthLastDate = new Date(year, month, 0).getDate();
        const lastDay = new Date(year, month, lastDate).getDay();

        // Previous month inactive days
        for (let i = firstDay; i > 0; i--) {
            days.push({ value: prevMonthLastDate - i + 1, inactive: true });
        }

        // Current month days
        for (let i = 1; i <= lastDate; i++) {
            const currentDate = new Date(year, month, i);
            currentDate.setHours(0, 0, 0, 0);

            const time = currentDate.getTime();

            const isPast = currentDate < today;
            const isStart = time === start && end !== null && start !== end;
            const isEnd = time === end && start !== end;
            const isSelected =
                start !== null &&
                end !== null &&
                time > Math.min(start, end) &&
                time < Math.max(start, end);

            days.push({
                value: i,
                inactive: isPast,
                selected: isSelected,
                isStart,
                isEnd,
                highlight: time === start || time === end
            });

        }

        // Next month inactive days
        for (let i = lastDay; i < 6; i++) {
            days.push({ value: i - lastDay + 1, inactive: true });
        }

        return days;
    };


    const changeMonth = (direction) => {
        if (direction === "prev") {
            if (!canGoBack1) return;
            if (month1 === 0) {
                setMonth1(11);
                setYear1(year1 - 1);
            } else {
                setMonth1(month1 - 1);
            }
        } else {
            if (month1 === 11) {
                setMonth1(0);
                setYear1(year1 + 1);
            } else {
                setMonth1(month1 + 1);
            }
        }
    };

    function setDate(date) {
        selectOrder ? setEndDate(date) : setStartDate(date);

        if (selectOrder) setSelectOrder(false);
        else
        {
            setEndDate(date);
            setSelectOrder(true);
        }
    }

    return (
        <>
            <div className={styles["calendar-container"]}>
                <div className={styles["navigationContainer"]}>
                    <div className={styles["calendar-navigation"]}>
                          <span
                              className="material-symbols-rounded"
                              onClick={() => canGoBack1 ? changeMonth("prev", true): null}
                          >
                            chevron_left
                          </span>
                    </div>

                    <div className={styles["calendar-navigation"]}>
                        <span
                            className="material-symbols-rounded"
                            onClick={() => changeMonth("next", true)}
                        >
                            chevron_right
                        </span>
                    </div>
                </div>

                <div style={{display: "flex", justifyContent: "space-around"}}>

                    <div style={{display: "block"}}>
                        <header className={styles["calendar-header"]}>
                            <p className={styles["calendar-current-date"]}>
                                {months[month1]} {year1}
                            </p>

                        </header>

                        <div className={styles["calendar-body"]}>
                            <ul className={styles["calendar-weekdays"]}>
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                    <li key={day}>{day}</li>
                                ))}
                            </ul>

                            <ul className={styles["calendar-dates"]}>
                                {getDays(year1, month1, today, startDate, endDate).map((day, index) => (
                                    <li
                                        key={index}
                                        className={[
                                            day.inactive ? styles.inactive : "",
                                            day.highlight ? styles.highlight : "",
                                            day.selected ? styles.selected : "",
                                            day.isStart ? styles.startDateStyle : "",
                                            day.isEnd ? styles.endDateStyle : ""
                                        ].join(" ")}
                                        onClick={() => !day.inactive && setDate(new Date(year1, month1, day.value))}
                                    >
                                        {day.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    <div style={{display: "block"}}>
                        <header className={styles["calendar-header"]}>
                            <p className={styles["calendar-current-date"]}>
                                {months[month2]} {year2}
                            </p>
                        </header>

                        <div className={styles["calendar-body"]}>
                            <ul className={styles["calendar-weekdays"]}>
                                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                                    <li key={day}>{day}</li>
                                ))}
                            </ul>

                            <ul className={styles["calendar-dates"]}>
                                {getDays(year2, month2, today, startDate,endDate).map((day, index) => (
                                    <li
                                        key={index}
                                        className={[
                                            day.inactive ? styles.inactive : "",
                                            day.highlight ? styles.highlight : "",
                                            day.selected ? styles.selected : "",
                                            day.isStart ? styles.startDateStyle : "",
                                            day.isEnd ? styles.endDateStyle : ""
                                        ].join(" ")}
                                        onClick={() => !day.inactive && setDate(new Date(year2, month2, day.value))}
                                    >
                                        {day.value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>
            </div>



            {dayCount !== null &&
                (
                    <div className={styles.priceCalc}>

                        <div> {dayCount+" day * $"+vehiclePrice+"/day"} </div>

                        <div>{"$"+dayCount*vehiclePrice}</div>
                    </div>
                )
            }

        </>
    );
}
