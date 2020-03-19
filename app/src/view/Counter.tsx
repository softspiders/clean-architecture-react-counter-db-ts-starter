import React from 'react'
import { Button, Typography } from '@material-ui/core'

interface CounterProps {
  counter: number | null
  onClick: () => () => void
}

const Counter = ({ counter = 0, onClick }: CounterProps): JSX.Element => (
  <React.Fragment>
    <Button variant="contained" color="primary">
      +
    </Button>
    <Typography variant="h5" component="abbr">
      Counter: {counter}
    </Typography>
  </React.Fragment>
)

export default Counter
