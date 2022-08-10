import React, {ChangeEvent, ChangeEventHandler} from 'react';
import s from "./SetterBlock2.module.css"

type setter2StateType = {
    maxValue: number
    minValue: number
    isSetting: boolean
    setIsSetting: React.Dispatch<React.SetStateAction<boolean>>
    setMinValue: React.Dispatch<React.SetStateAction<number>>
    setMaxValue: React.Dispatch<React.SetStateAction<number>>
    isSettingHandler: React.Dispatch<React.SetStateAction<boolean>>
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
                                                                   setMinValue,
                                                                   setMaxValue,
                                                                   setIsSetting,
                                                                   isSettingHandler
                                                               }
                                                       }) => {

    const MaxValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+event.currentTarget.value)
    }

    const MinValueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMinValue(+event.currentTarget.value)
    }
    const SettingHandler = () => {
        isSettingHandler(!isSetting)
        localStorage.setItem("counter2_maxValue", JSON.stringify(maxValue))
        localStorage.setItem("counter2_minValue", JSON.stringify(minValue))
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