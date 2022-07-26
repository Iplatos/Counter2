import React, {ChangeEvent, useState} from 'react';

type SetMenuPropsType={
    SetFunction:(min:number,max:number)=>void
    min:number
    max:number
    SetMax:(max:number)=>void
    SetMin:(min:number)=>void
    controlMin:number
    controlMax:number
}


export const SetMenu=(props:SetMenuPropsType)=>{
let [minValue,SetminValue]=useState<number>(0)
let [maxValue,SetMaxValue]=useState<number>(0)



    const onchangeMinHandler = (event:ChangeEvent<HTMLInputElement>)=>{
    if (event.currentTarget.value>" "){
        props.SetMin(JSON.parse(event.currentTarget.value))
        SetminValue(JSON.parse(event.currentTarget.value))
    }}

    const onchangeMaxHandler = (event:ChangeEvent<HTMLInputElement>)=> {
        if (event.currentTarget.value > " ") {
            props.SetMax(JSON.parse(event.currentTarget.value))
            SetMaxValue(JSON.parse(event.currentTarget.value))
        }
    }
        const onClickSetHandler= (minValue:number,maxValue:number)=>{

     props.SetFunction(minValue,maxValue)
    }



    return (<div>


        <label> Max <input value={props.max} onChange={onchangeMaxHandler} type={"number"} ></input></label>
        <label> min <input value={props.min} onChange={onchangeMinHandler} type={"number"} ></input></label>

        <button disabled={((props.controlMax===maxValue && props.controlMin===minValue) || props.min<0 || props.min>props.max || props.min===props.max )}
                onClick={()=>onClickSetHandler(props.min,props.max)} >Set</button>
        </div>
    )
}