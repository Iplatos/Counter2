import React, {Dispatch} from 'react';
import styles from "./Couner.module.css";

type displayProps = {
    displayedValue: number
    startValue: number
    maxValue: number
    isEditing: boolean
    setDisplayedValue: Dispatch<React.SetStateAction<number>>
    isCorrect: boolean
    setCorrect: Dispatch<React.SetStateAction<boolean>>
}

type CounterBlockPropsType = {
    displayState: displayProps
}

const CounterBlock: React.FC<CounterBlockPropsType> = ({
                                                           displayState: {
                                                               maxValue,
                                                               displayedValue,
                                                               startValue,
                                                               setDisplayedValue,
                                                               isCorrect,
                                                               isEditing,

                                                           }
                                                       }) => {

    const onIncrease = (): void => {
        setDisplayedValue(displayedValue => displayedValue + 1);
    };

    const onReset = (): void => {
        setDisplayedValue(startValue);
    };

    const getState = (): string | number => {
        if (isEditing && isCorrect && maxValue !== startValue && maxValue>startValue) {
            return "enter value and press 'set'";
        } else if (  maxValue<=startValue ||  !isCorrect /*|| maxValue<startValue*/) {
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