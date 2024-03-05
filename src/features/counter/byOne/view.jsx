import { Decrement } from "./decrement"
import { Increment } from "./increment"


export const View = ({ counterValueSelect }) => {
    return (
        <>
            <div>{counterValueSelect}</div>
            <Increment />
            <br />
            <Decrement />
        </>
    )
}