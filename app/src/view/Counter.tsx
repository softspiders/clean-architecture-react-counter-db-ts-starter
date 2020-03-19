import React from 'react'
import { Button } from '@material-ui/core'

interface CounterProps {
  counter: number | null
  onClick: () => () => void
}

const Counter = ({ counter, onClick }: CounterProps): JSX.Element => (
  <Button variant="contained" color="primary">
    +
  </Button>
)

export default Counter
