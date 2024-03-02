import React from 'react'
import CounterByOneView from './view'
import { Increment } from './increment'
import { Decrement } from './decrement'
import { useSelector } from 'react-redux'
import { getValueOfCounterByOneSelector } from '../../../store/selectors'

export const CounterByOne = () => {
  const count = useSelector(getValueOfCounterByOneSelector)
  return (
    <>
      <CounterByOneView countValue={count} />
      <Increment />
      <Decrement />
    </>
  )
}

