import { createSlice } from "@reduxjs/toolkit"

const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        byOne: {
            value: 0
        }
    },
    reducers: {
        incrementByOne: state => {
            state.byOne.value += 1
        }
        ,
        decrementByOne: state => {
            state.byOne.value -= 1
        }
    }
})

export const getCounterValueByOneSelector = state => state.counter.byOne.value

export const { incrementByOne, decrementByOne } = CounterSlice.actions

export default CounterSlice.reducer