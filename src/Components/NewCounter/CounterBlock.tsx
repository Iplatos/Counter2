import React, {Dispatch} from 'react';
import styles from "./Couner.module.css";
import {useDispatch} from "react-redux";
import {CounterOneReducerType, onIncreaseAC, onResetAC} from "../Counter2/reducers";

type displayProps = {
    displayedValue: number
    startValue: number
    maxValue: number
    isEditing: boolean
/*
    setDisplayedValue: Dispatch<React.SetStateAction<number>>
*/
    isCorrect: boolean
    setCorrect: Dispatch<React.SetStateAction<boolean>>
    dispatch: (action: CounterOneReducerType)=>void
}

type CounterBlockPropsType = {
    displayState: displayProps
}

const CounterBlock: React.FC<CounterBlockPropsType> = ({
                                                           displayState: {
                                                               maxValue,
                                                               displayedValue,
                                                               startValue,
                                                               isCorrect,
                                                               isEditing,
                                                               dispatch
                                                           }
                                                       }) => {


    const onIncrease = (): void => {
        const action = onIncreaseAC()
        dispatch(action)
    };

    const onReset = (): void => {
        const action = onResetAC()
        dispatch(action)
    };

    const getState = (): string | number => {
        if (isEditing && isCorrect && maxValue !== startValue && maxValue > startValue) {
            return "enter value and press 'set'";
        } else if (maxValue <= startValue || !isCorrect /*|| maxValue<startValue*/) {
            return "incorrect value";
        } else {
            return displayedValue;
        }
    }
    return (
        <div className={styles.CounterBlock}>
            <div style={{color: displayedValue === maxValue || !isCorrect || maxValue <= startValue ? "red" : ""}}
                 className={styles.valueContainer}>{getState()}</div>
            <div className={styles.counterButton}>
                <span><button disabled={displayedValue === maxValue || isEditing || !isCorrect} onClick={onIncrease}>Inc
                </button></span>
                <span><button disabled={isEditing || !isCorrect} onClick={onReset}>Reset</button></span>
            </div>
        </div>
    )
}

export default CounterBlock