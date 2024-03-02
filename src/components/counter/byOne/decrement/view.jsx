import React from 'react'
import './decrement.css'

export default function Decrementview({ onDecrmentHandle }) {
  return (
    <button onClick={onDecrmentHandle} className='decrement-btn'>-</button>
  )
}
