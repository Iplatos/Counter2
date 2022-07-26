import React, {useEffect, useState} from 'react';
import s from "./Counter2.module.css"

type Counter2PropsType = {
    CountNumber: number
    InkFunction: (CountNumber: number) => void
    ResetFunction: (CountNumber: number) => void
    max: number
    min: number
    controlMax: number
    controlMin: number
}

export const Counter2 = (props: Counter2PropsType) => {
    const onClickInkhandler = () => {
        props.InkFunction(props.CountNumber)
    }
    const onClickResethandler = () => {
        props.ResetFunction(props.CountNumber)
    }

    const [warning,setWarning] = useState("")

    useEffect(() => {

    },[props.max])


    return (
        <div>

            {props.max !== props.min && props.min >= 0 ?
                <span className={props.max === props.CountNumber ? s.diaspalayLastNumber : s.diaspalayNumber}
                >{props.CountNumber}</span> : <div>"wrong value"</div>}
            <br/>
            {warning}
            <br/>



            <button disabled={((props.max) === props.CountNumber || props.controlMax !== props.max)
            || props.max<props.min}
                    onClick={onClickInkhandler}>inc
            </button>
            <button onClick={onClickResethandler}>reset</button>
        </div>

    )
}
