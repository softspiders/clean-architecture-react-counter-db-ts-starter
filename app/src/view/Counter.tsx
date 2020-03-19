import React from 'react'

interface CounterProps {
  counter: number | null
  onClick: () => () => void
}

const Counter = ({ counter = 0, onClick }: CounterProps): JSX.Element => (
  <div>
    <div>{counter}</div>
    <button onClick={onClick}>Click</button>
  </div>
)

export default Counter
