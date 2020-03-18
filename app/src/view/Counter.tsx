import React from 'react'
import { Button } from '@material-ui/core'
import { TodoItem } from '../entity/TodoItem'

interface TodoProps {
  // todoItems: TodoItem[] | null
  // todoTitle: string
  // onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  // onAddKeyDown: (event: React.KeyboardEvent) => void
  // onCompleteClick: (id: number) => () => void
  // onDeleteClick: (id: number) => () => void
}

const Counter = ({  }: TodoProps): JSX.Element => (
  <React.Fragment>
    <Button variant="contained" color="secondary">
      Decrement
    </Button>
    <Button variant="contained" color="primary">
      Increment
    </Button>
  </React.Fragment>
)

export default Counter
