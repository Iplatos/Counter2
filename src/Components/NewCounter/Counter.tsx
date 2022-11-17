import React, {useState} from 'react';
import CounterBlock from "./CounterBlock";
import SetterBlock from "./SetterBlock";
import styles from "./Couner.module.css";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducer} from "../Counter2/store/store";

const initialValue = 0;

const Counter = () => {
const maxValue = useSelector<AppRootReducer, number>(state=>state.countreone.maxValue)
   /* const [maxValue, setMaxValue] = useState<number>(5);*/
    const startValue = useSelector<AppRootReducer, number>(state=>state.countreone.startValue)
    const displayedValue = useSelector<AppRootReducer, number>(state=>state.countreone.displayedValue)
    const [isEditing, setEditing] = useState(false);
    const [isCorrect, setCorrect] = useState(true);
    const dispatch = useDispatch()


 /*   useEffect(() => {
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
    }, [])*/




    return (
        <div className={styles.counterBody}>
            <NavLink className={styles.link} to={"/"}>Back</NavLink>
            <div className={styles.counterContainer}>
                <SetterBlock counterState={{
                    isCorrect,
                    setCorrect,
                    setEditing,
                    startValue,
                    dispatch,
                    maxValue
                }}/>
                <CounterBlock displayState={{
                    displayedValue,
                    startValue,
                    isEditing,
                    isCorrect,
                    setCorrect,
                    dispatch,
                    maxValue
                }}/>
            </div>
        </div>
    );
}

export default Counter;

