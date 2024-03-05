import React, { useEffect } from 'react'

import CounterByOneView from './view'

import { useDispatch, useSelector } from 'react-redux'
import { getUserPlaceHolderStartCreator } from '../../../store/actions-creator/user'
import { getUserPlaceHolderSelector } from '../../../store/selectors/user'

export const CounterByOne = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    //dispatch(getCounterApiStartByOneCreator())
    dispatch(getUserPlaceHolderStartCreator())
  }, [])

  //const { value, loading, error } = useSelector(getValueOfCounterByOneSelector)
  const { data, loading, error } = useSelector(getUserPlaceHolderSelector)

  return (
    <>
      <CounterByOneView {...{ data, loading, error }} />
    </>
  )
}

