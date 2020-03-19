import React, { useContext } from 'react'
import { Counter } from '.'
import counterContainer from '../container/CounterContainer'
import { AppContext } from '../'

const App = (): JSX.Element => {
  const { useCase } = useContext(AppContext)
  const { state, functions } = counterContainer({ useCase })

  return (
    <Counter counter={state.counter} onClick={functions.handleIncrementClick} />
  )
}

export default App
