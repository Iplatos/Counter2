import React, {Dispatch} from 'react';
import styles from "./Couner.module.css";

type displayProps = {
    displayedValue: number
    startValue: number
    maxValue: number
    setDisplayedValue: Dispatch<React.SetStateAction<number>>
}

type CounterBlockPropsType = {
    displayState: displayProps
}

const CounterBlock: React.FC<CounterBlockPropsType> = ({
                                                           displayState: {
                                                               maxValue,
                                                               displayedValue,
                                                               startValue,
                                                               setDisplayedValue
                                                           }
                                                       }) => {

    const onIncrease = (): void => {
        setDisplayedValue(displayedValue => displayedValue + 1);
    };

    const onReset = (): void => {
        setDisplayedValue(startValue);
    };

    return (
        <div>
            <div style={{color: displayedValue === maxValue ? "red" : ""}}
                 className={styles.valueContainer}>{displayedValue}</div>
            <div>
                <button disabled={displayedValue === maxValue} onClick={onIncrease}>Inc</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    )
}

export default CounterBlock