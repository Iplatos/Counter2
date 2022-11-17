const
    initvalue = 0
const initialstate = {
    maxValue: 5,
    startValue: initvalue,
    displayedValue: initvalue,
}

export type initialStateType = {
    maxValue: number
    startValue: number
    displayedValue: number
}
type onIncreaseACtype = ReturnType<typeof onIncreaseAC>
type onResetACType = ReturnType<typeof onResetAC>
type onSetACType = ReturnType<typeof onSetAC>
type setMaxValueACtype = ReturnType<typeof setMaxValueAC>
type setMinValueACtype  = ReturnType<typeof setMinValueAC>

export type CounterOneReducerType = onIncreaseACtype | onResetACType | onSetACType | setMaxValueACtype | setMinValueACtype

export const CounterOneReducer = (state: initialStateType = initialstate, action: CounterOneReducerType) => {

    switch (action.type) {

        case 'ONINCREASE' :
            return {...state, displayedValue: state.displayedValue + 1}
        case "ONRESET":
            return {...state, displayedValue: state.startValue}
        case "onSetAC" :
            return {...state, displayedValue: action.startValue }
        case "onSetMAXAC" :
            return {...state, maxValue: action.mapped }
        case "onSetMINAC" :
            return {...state, startValue: action.mapped }
        default:
            return state
    }
}


export const onIncreaseAC = () => {
    return {
        type: "ONINCREASE",
    } as const

}
export const onResetAC = () => {
    return {
        type: "ONRESET",
    } as const
}
export const onSetAC = (startValue:number) => {
    return {
        type: "onSetAC",
        startValue:startValue
    }as const
}
export const setMaxValueAC = (mapped:number) => {
    return {
        type: "onSetMAXAC",
        mapped:mapped
    }as const
}
export const setMinValueAC = (mapped:number) => {
    return {
        type: "onSetMINAC",
        mapped:mapped
    }as const
}


