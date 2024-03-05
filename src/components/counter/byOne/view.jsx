import React from 'react'
import './counter.css'
import PropTypes from 'prop-types'
import { Increment } from './increment'
import { Decrement } from './decrement'

const CounterByOneView = ({ data, loading, error }) => {
  if (error) {
    return <p>{{ error }}</p>
  }
  return (
    loading ?
      <p className='loading'>Loading ... </p>
      :
      <>
        <div className='counter-text'>Counter value : </div>
        <p className='user'>{data?.name}</p>
        <Increment />
        <Decrement />
      </>
  )
}

CounterByOneView.propTypes = {
  data: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
}

export default CounterByOneView
