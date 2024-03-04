import React from 'react'
import './counter.css'
import PropTypes from 'prop-types'
import { Increment } from './increment'
import { Decrement } from './decrement'

const CounterByOneView = ({ value, loading, error }) => {
  if (error) {
    return <p>{{ error }}</p>
  }
  return (
    loading ?
      <p className='loading'>Loading ... </p>
      :
      <>
        <div className='counter-text'>Counter value : {value}</div>
        <Increment />
        <Decrement />
      </>
  )
}

CounterByOneView.propTypes = {
  value: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
}

export default CounterByOneView
