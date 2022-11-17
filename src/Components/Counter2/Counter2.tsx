import React, {useEffect, useState} from 'react';
import CounterBlock2 from "./CounterBlock2";
import SetterBlock2 from "./SetterBlock2";
import s from "./Counter2.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootReducer} from "./store/store";
import {setCounterValueAC} from "./store/reducerTwo";

const Counter2 = () => {
  const counterValue = useSelector<AppRootReducer, number>(state => state.counterTwo.counterValue)
    const maxValue = useSelector<AppRootReducer, number>(state=>state.counterTwo.maxValue)
    const minValue = useSelector<AppRootReducer, number>(state=>state.counterTwo.startValue)
    const [isSetting, setIsSetting] = useState(false)

    const dispatch = useDispatch()
    const isSettingHandler = () => {
        setIsSetting(!isSetting)
        const action  =  setCounterValueAC(minValue)
        dispatch(action)
    }
/*useEffect(()=>{
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
    },[])*/

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
                        isSettingHandler,
                        dispatch
                    }}/>
                    : <CounterBlock2 counter2State={{
                        counterValue,
                        maxValue,
                        minValue,
                        isSetting,
                        setIsSetting,
                        dispatch,
                        isSettingHandler
                    }}/>
                }
                {/*  <span><button disabled={maxValue===minValue} onClick={isSettingHandler}>Set2</button></span>*/}
            </div>
        </div>
    );
};

export default Counter2;
