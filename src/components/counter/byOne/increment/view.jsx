import React from 'react'
import './increment.css'

export default function Incrementview({ onIncrmentHandle }) {
  return (
    <button onClick={onIncrmentHandle} className='increment-btn'>+</button>
  )
}
