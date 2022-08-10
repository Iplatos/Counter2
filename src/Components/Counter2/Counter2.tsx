import React, {useEffect, useState} from 'react';
import CounterBlock2 from "./CounterBlock2";
import SetterBlock2 from "./SetterBlock2";
import s from "./Counter2.module.css"
import {NavLink} from "react-router-dom";

const Counter2 = () => {
    const [counterValue, setCounterValue] = useState(0)
    const [maxValue, setMaxValue] = useState(5)
    const [minValue, setMinValue] = useState(counterValue)
    const [isSetting, setIsSetting] = useState(false)

    const isSettingHandler = () => {
        setIsSetting(!isSetting)
        setCounterValue(minValue)
    }
useEffect(()=>{
     const NewStringMaxValue = localStorage.getItem("counter2_maxValue")
    if (NewStringMaxValue) {
       let NewMaxValue = JSON.parse(NewStringMaxValue)
        setMaxValue(NewMaxValue)
    }
},[])

    useEffect(()=> {
        const NewStringMinValue = localStorage.getItem("counter2_minValue")
        if (NewStringMinValue) {
            let NewMinValue = JSON.parse(NewStringMinValue)
            setMinValue(NewMinValue)
            setCounterValue(NewMinValue)
        }
    },[])

    return (
        <div className={s.counterBody}>
            <NavLink to={"/"}>Back</NavLink>
            <div className={s.AppWrapper}>
                {isSetting
                    ? <SetterBlock2 setter2State={{
                        maxValue,
                        minValue,
                        isSetting,
                        setIsSetting,
                        setMinValue,
                        setMaxValue,
                        isSettingHandler
                    }}/>
                    : <CounterBlock2 counter2State={{
                        counterValue,
                        maxValue,
                        minValue,
                        isSetting,
                        setIsSetting,
                        setMinValue,
                        setCounterValue,
                        isSettingHandler
                    }}/>
                }
                {/*  <span><button disabled={maxValue===minValue} onClick={isSettingHandler}>Set2</button></span>*/}
            </div>
        </div>
    );
};

export default Counter2;
