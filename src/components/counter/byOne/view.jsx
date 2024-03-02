import React from 'react'
import './counter.css'
import PropTypes from 'prop-types'
import { Increment } from './increment'
import { Decrement } from './decrement'

const CounterByOneView = ({ countValue, isPending, error }) => {
  if (error) {
    return <p>{{ error }}</p>
  }
  return (
    isPending ?
      <p className='loading'>Loading ... </p>
      :
      <>
        <div className='counter-text'>Counter value : {countValue}</div>
        <Increment />
        <Decrement />
      </>
  )
}

CounterByOneView.propTypes = {
  countValue: PropTypes.number.isRequired,
  isPending : PropTypes.bool.isRequired,
  error : PropTypes.string.isRequired
}

export default CounterByOneView
