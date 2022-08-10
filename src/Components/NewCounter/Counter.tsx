import React, {useEffect, useState} from 'react';
import CounterBlock from "./CounterBlock";
import SetterBlock from "./SetterBlock";
import styles from "./Couner.module.css";
import {NavLink} from "react-router-dom";

const initialValue = 0;

const Counter = () => {

    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(initialValue);
    const [displayedValue, setDisplayedValue] = useState<number>(initialValue);
    const [isEditing, setEditing] = useState(false);
    const [isCorrect, setCorrect] = useState(true);



    useEffect(() => {
        let maxValueAsString = localStorage.getItem('maxValue')
        if (maxValueAsString) {
            let newMaxValue = JSON.parse(maxValueAsString)
            setMaxValue(newMaxValue)
        }
    }, [])

    useEffect(() => {
        let startValueAsString = localStorage.getItem("startValue")
        if (startValueAsString) {
            let newStartValue = JSON.parse(startValueAsString)
            setStartValue(newStartValue)
            setDisplayedValue(newStartValue)
        }
    }, [])

    // useEffect(() => {
    //     localStorage.setItem("displayedValue", JSON.stringify(displayedValue))
    // }, [displayedValue])
    //
    // useEffect(() => {
    //     localStorage.setItem("maxValue", JSON.stringify(maxValue))
    // }, [maxValue])
    //
    // useEffect(() => {
    //     localStorage.setItem("startValue", JSON.stringify(startValue))
    // }, [startValue])


    return (
        <div className={styles.counterBody}>
            <NavLink className={styles.link} to={"/"}>Back</NavLink>
            <div className={styles.counterContainer}>
                <SetterBlock counterState={{
                    startValue,
                    maxValue,
                    isCorrect,
                    setCorrect,
                    setMaxValue,
                    setStartValue,
                    setDisplayedValue,
                    setEditing
                }}/>
                <CounterBlock displayState={{
                    displayedValue,
                    isEditing,
                    startValue,
                    maxValue,
                    isCorrect,
                    setCorrect,
                    setDisplayedValue
                }}/>
            </div>
        </div>
    );
}

export default Counter;

