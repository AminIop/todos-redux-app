import React from 'react'
import Incrementview from './view'
import { useDispatch } from 'react-redux'
import { incrementByOneCreator } from '../../../../store/actions-creator/counter'

export const Increment = () => {
    const dispatch = useDispatch()

    const handleIncrement = ()=>{
        dispatch(incrementByOneCreator())
    }
    return (
        <>
            <Incrementview onIncrmentHandle={handleIncrement } />
        </>
    )
}
