import { useDispatch } from "react-redux"
import { incrementByOne } from "../slice"


export const Increment = () => {
    const dispatch = useDispatch()
    const handleClickIncrement = () => {
        dispatch(incrementByOne())
    }
    return (
        <button onClick={handleClickIncrement}>+</button>
    )
}