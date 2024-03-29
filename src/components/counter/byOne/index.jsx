import React, { useEffect, useState } from 'react'
import CounterByOneView from './view'
import { useDispatch, useSelector } from 'react-redux'
import { getValueOfCounterByOneSelector } from '../../../store/selectors'
import apisCounterMocks from '../../../utils/apis/mocks/counter'
import { initializeByOneCreator } from '../../../store/actions-creator/counter'

export const CounterByOne = () => {

  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    const myFnct = async () => {
      try{
        setIsPending(true)
        const res = await apisCounterMocks.getCountValue()
        dispatch(initializeByOneCreator(res.data.value))
      }catch(err){
        setError(err)
      }finally{
        setIsPending(false)
      }
    }
    myFnct()
  }, [])

  const count = useSelector(getValueOfCounterByOneSelector)

  return (
    <>
      <CounterByOneView countValue={count} isPending={isPending} error={error}/>
    </>
  )
}

