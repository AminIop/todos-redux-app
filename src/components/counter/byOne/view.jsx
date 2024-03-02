import React from 'react'
import './counter.css'

export default function CounterByOneView({ countValue }) {
  return (
    <>
     <div className='counter-text'>Counter value : {countValue}</div>
    </>
  )
}
