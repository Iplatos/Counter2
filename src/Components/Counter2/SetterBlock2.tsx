import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from "./SetterBlock2.module.css"
import {reducerTwoType, setMaxValueAC, setMinValueAC} from "./store/reducerTwo";



type DispatchAction<T>= React.Dispatch<React.SetStateAction<T>>

type setter2StateType = {
    maxValue: number
    minValue: number
    isSetting: boolean
    setIsSetting: DispatchAction<boolean>
   /* setMinValue: DispatchAction<number>
    setMaxValue: DispatchAction<number>*/
    isSettingHandler:DispatchAction<boolean>
    dispatch:(action: reducerTwoType)=>void
}
type setter2StatePropsType = {
    setter2State: setter2StateType
}

const SetterBlock2: React.FC<setter2StatePropsType> = ({
                                                           setter2State:
                                                               {
                                                                   isSetting,
                                                                   minValue,
                                                                   maxValue,
                                                                   dispatch,
                                                                   isSettingHandler
                                                               }
                                                       }) => {

    const MaxValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const action = setMaxValueAC(+event.currentTarget.value)
        dispatch(action)
    }

    const MinValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const action = setMinValueAC(+event.currentTarget.value)
        dispatch(action)

    }
    const SettingHandler = () => {
        isSettingHandler(!isSetting)
       /* localStorage.setItem("counter2_maxValue", JSON.stringify(maxValue))
        localStorage.setItem("counter2_minValue", JSON.stringify(minValue))*/
    }
    return (
        <div className={s.SetterWrapper}>
            <div className={s.inputBlock}>
                <div className={s.fieldMax}>
                    <label> max Value </label>
                    <input
                        className={maxValue === minValue || maxValue < 0 || minValue > maxValue ? s.inputError : s.inputCorrect}
                        value={maxValue} onChange={MaxValueChangeHandler}
                        type={"number"}>
                    </input>

                </div>

                <div className={s.fieldMin}>
                    <label> start Value </label>
                    <input
                        className={maxValue === minValue || minValue < 0 || minValue > maxValue ? s.inputError : s.inputCorrect}
                        value={minValue} onChange={MinValueChangeHandler}
                        type={"number"}>
                    </input>


                </div>
            </div>
            <div className={s.SetButton}>
                <button disabled={maxValue === minValue || minValue > maxValue || minValue<0 || maxValue<0} onClick={SettingHandler}>set</button>
            </div>
        </div>
    );
};

export default SetterBlock2;