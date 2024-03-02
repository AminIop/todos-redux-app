import React from 'react'
import Incrementview from './view'
import { useDispatch } from 'react-redux'
import { decrementByOneCreator } from '../../../../store/actions-creator/counter'

export const Decrement = () => {
    const dispatch = useDispatch()
    const handleDecrement = ()=>{
        dispatch(decrementByOneCreator())
    }
    return (
        <>
            <Incrementview onDecrmentHandle={handleDecrement } />
        </>
    )
}
