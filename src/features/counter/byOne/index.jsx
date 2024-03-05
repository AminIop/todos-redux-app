import { useSelector } from "react-redux"
import { getCounterValueByOneSelector } from "../slice"
import { View } from "./view"

export const CounterByOne = () => {
    const counterValueSelect = useSelector(getCounterValueByOneSelector)
    return (
        <View {...{ counterValueSelect }} />
    )
}