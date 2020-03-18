import React from 'react'
import { Button } from '@material-ui/core'

interface TodoProps {
  counter: number | null
  onClick: () => () => void
}

const Counter = ({ counter, onClick }: TodoProps): JSX.Element => (
  <React.Fragment>
    <Button variant="contained" color="secondary">
      Decrement
    </Button>
    <div>{counter}</div>
    <Button variant="contained" color="primary">
      Increment
    </Button>
  </React.Fragment>
)

export default Counter
