import React, {Dispatch, SetStateAction, useState} from 'react';
import styles from "./Couner.module.css";
import {CounterOneReducerType, onSetAC, setMaxValueAC, setMinValueAC} from "../Counter2/reducers";

type CounterState = {
    startValue: number
    maxValue: number
    isCorrect: boolean
    setCorrect: Dispatch<SetStateAction<boolean>>
  /*  setStartValue: Dispatch<SetStateAction<number>>
    setMaxValue: Dispatch<SetStateAction<number>>
    setDisplayedValue: Dispatch<SetStateAction<number>>*/
    setEditing: Dispatch<SetStateAction<boolean>>
    dispatch:(action:CounterOneReducerType)=>void
}

type SetterBlockPropsType = {
    counterState: CounterState
}

const SetterBlock: React.FC<SetterBlockPropsType> = ({
                                                         counterState: {
                                                             startValue,
                                                             maxValue,
                                                             isCorrect,
                                                             setCorrect,
                                                             setEditing,
                                                             dispatch
                                                         }
                                                     }) => {
    const [isSetterDisabled, setSetterDisabled] = useState(true);
    const getMappedValue = (stringValue: string): number => {
        return +stringValue;
    };

    const onSet = () => {
        setSetterDisabled(true);
        const action = onSetAC(startValue)
       dispatch(action)
        setEditing(false);
       /* localStorage.setItem("maxValue", JSON.stringify(maxValue))
        localStorage.setItem("startValue", JSON.stringify(startValue))*/
        //localStorage.setItem("displayedValue", JSON.stringify(startValue))
    };

    return (
        <div className={styles.setterContainer}>
            <div className={styles.setterInput}>
                <div className={styles.MaxValue}>
                    <label>Max Value</label>
                    <input style={{backgroundColor: maxValue<0 || startValue===maxValue ? "red" : ""}} type={"number"} value={maxValue} onChange={(event) => {

                        const mappedValue = getMappedValue(event.currentTarget.value);
                        const action = setMaxValueAC(mappedValue)
                        dispatch(action);
                        setSetterDisabled(false);
                        setEditing(true);
                        if (mappedValue < 0) {
                            setCorrect(false);
                        } else {
                            setCorrect(true);
                        }
                    }}/>
                </div>
                <div className={styles.StartValue}>
                    <label>Start Value</label>
                    <input style={{backgroundColor: startValue<0 || startValue>=maxValue ? "red" : ""}} type={"number"} value={startValue} onChange={(event) => {
                        const mappedValue = getMappedValue(event.currentTarget.value);
                        const action = setMinValueAC(mappedValue)
                        dispatch(action);
                        setSetterDisabled(false);
                        setEditing(true);
                        if (mappedValue < 0) {
                            setCorrect(false);
                        } else {
                            setCorrect(true);
                        }
                    }}/>
                </div>
            </div>
            <div className={styles.setterButton}>
                <button onClick={onSet} disabled={maxValue<startValue || isSetterDisabled || !isCorrect || maxValue === startValue || maxValue<0 || startValue<0}>Set
                </button>
            </div>
        </div>
    );
}
export default SetterBlock