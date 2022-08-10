import React from 'react';
import s from "./CounertBlock2.module.css"

type counter2StateType = {
    counterValue: number
    minValue: number
    isSetting: boolean
    maxValue: number
    setIsSetting: React.Dispatch<React.SetStateAction<boolean>>
    setMinValue: React.Dispatch<React.SetStateAction<number>>
    setCounterValue: React.Dispatch<React.SetStateAction<number>>
    isSettingHandler: (set: boolean) => void /*React.Dispatch<React.SetStateAction<boolean>>*/
}
type counter2PropsType = {
    counter2State: counter2StateType
}


const CounterBlock2: React.FC<counter2PropsType> = ({
                                                        counter2State: {
                                                            isSetting,
                                                            counterValue,
                                                            minValue,
                                                            maxValue,
                                                            setCounterValue,
                                                            setMinValue,
                                                            setIsSetting,
                                                            isSettingHandler
                                                        }
                                                    }) => {
    const OnIncButtonHandler = () => {
        setCounterValue(counterValue => counterValue + 1)
    }
    const OnResetButtonHandler = () => {
        setCounterValue(minValue)
    }
    const SettingHandler = () => {
        isSettingHandler(!isSetting)

    }

    return (
        <div className={s.AppCounter}>
            <div className={maxValue === counterValue ? s.MaxCounterValue : s.counterValue}>{counterValue}</div>
            <span className={s.counterButtonBlock}>< button disabled={maxValue === counterValue}
                                                            onClick={OnIncButtonHandler}>inc</button>
            <button onClick={OnResetButtonHandler}>reset</button>
            <button onClick={SettingHandler}>set</button></span>
        </div>
    );
};

export default CounterBlock2;