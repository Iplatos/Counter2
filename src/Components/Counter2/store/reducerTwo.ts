const initValue = 0

const initialState = {
    maxValue: 5,
    startValue: initValue,
    counterValue: initValue,
}

type initType = {
    startValue: number,
    maxValue: number,
    counterValue: number
}
type onIncreaseACtype = ReturnType<typeof onIncreaseAC>
type setCounterValueACtype = ReturnType<typeof setCounterValueAC>
type setMaxValueACACtype = ReturnType<typeof setMaxValueAC>
type setMinValueACtype = ReturnType<typeof setMinValueAC>
type OnresetACACtype = ReturnType<typeof OnresetAC>

export type reducerTwoType = onIncreaseACtype | setCounterValueACtype | setMaxValueACACtype | setMinValueACtype | OnresetACACtype

export const reducerTwo = (state: initType = initialState, action: reducerTwoType) => {
    switch (action.type) {
        case "ONINCRESE" :
            return {...state, counterValue: state.counterValue + 1}
        case "SetCounterValue" :
            return {...state, counterValue: state.startValue}
        case "SetMaxValue" :
            return {...state, maxValue: action.maxValue}
        case "SetMinValue" :
            return {...state, startValue: action.minValue}
        case "OnresetAC" :
            return {...state, counterValue: action.minValue}
        default: return state
    }
}
export const onIncreaseAC = () => {
    return {
        type: "ONINCRESE"
    } as const
}
export const setCounterValueAC = (minValue:number) => {
    return {
        type: "SetCounterValue",
        minValue:minValue
    }as const
}
export const setMaxValueAC = (maxValue:number) => {
    return {
        type: "SetMaxValue",
        maxValue:maxValue
    }as const
}
export const setMinValueAC = (minValue:number) => {
    return {
        type: "SetMinValue",
        minValue:minValue
    }as const
}
export const OnresetAC = (minValue:number) => {
    return {
        type: "OnresetAC",
        minValue:minValue
    }as const
}