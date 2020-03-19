import React from 'react'
import { Button, Typography } from '@material-ui/core'

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
