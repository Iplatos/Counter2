import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from "./Couner.module.css";

type CounterState = {
    startValue: number
    maxValue: number
    setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
}

type SetterBlockPropsType = {
    counterState: CounterState
}

const SetterBlock: React.FC<SetterBlockPropsType> = ({
                                                         counterState: {
                                                             startValue,
                                                             maxValue,
                                                             setMaxValue,
                                                             setStartValue
                                                         }
                                                     }) => {
    const [isSetterDisabled, setSetterDisabled] = useState(true);
    const getMappedValue = (stringValue: string): number => {
        return +stringValue;
    };

    return (
        <div className={styles.setterContainer}>
            <div>
                <div>
                    <label>Max Value</label>
                    <input type={"number"} value={maxValue} onChange={(event) => {
                        const mappedValue = getMappedValue(event.currentTarget.value);
                        setMaxValue(mappedValue);
                        setSetterDisabled(false);
                    }}/>
                </div>
                <div>
                    <label>Start Value</label>
                    <input type={"number"} value={startValue} onChange={(event) => {
                        const mappedValue = getMappedValue(event.currentTarget.value);
                        setStartValue(mappedValue);
                        setSetterDisabled(false);
                    }}/>
                </div>
            </div>
            <button disabled={isSetterDisabled}>Set</button>
        </div>
    );
}
export default SetterBlock