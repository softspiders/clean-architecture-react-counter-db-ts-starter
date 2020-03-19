import React from 'react'

interface CounterProps {
  counter: number | null
  onClick: () => () => void
}

const Counter = ({ counter = 0, onClick }: CounterProps): JSX.Element => (
  <React.Fragment>
    <button onClick={onClick}>+</button>
    <label>{counter}</label>
  </React.Fragment>
)

export default Counter
