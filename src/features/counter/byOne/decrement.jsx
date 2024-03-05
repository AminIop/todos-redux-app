import { useDispatch } from "react-redux"
import { decrementByOne } from "../slice"

export const Decrement = () => {
    const dispatch = useDispatch()
    const handleClickDecrement = () => {
        dispatch(decrementByOne())
    }
    return (
        <button onClick={handleClickDecrement}>-</button>
    )
}