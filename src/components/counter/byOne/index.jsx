import React from 'react'
import CounterByOneView from './view'
import { useSelector } from 'react-redux'
import { getValueOfCounterByOneSelector } from '../../../store/selectors'

export const CounterByOne = () => {
  const count = useSelector(getValueOfCounterByOneSelector)
  return (
    <>
      <CounterByOneView countValue={count}/>
    </>
  )
}

