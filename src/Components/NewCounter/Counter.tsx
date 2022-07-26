import React, {useState} from 'react';
import CounterBlock from "./CounterBlock";
import SetterBlock from "./SetterBlock";
import styles from "./Couner.module.css";

const initialValue = 0;

const Counter = () => {
    const [maxValue, setMaxValue] = useState(5);
    const [startValue, setStartValue] = useState(initialValue);
    const [displayedValue, setDisplayedValue] = useState(initialValue);

    return (
        <div className={styles.counterContainer}>
            <SetterBlock counterState={{startValue, maxValue, setMaxValue, setStartValue}}/>
            <CounterBlock displayState={{displayedValue, startValue, maxValue, setDisplayedValue}} />
        </div>
    );
}

export default Counter;