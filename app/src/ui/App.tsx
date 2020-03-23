import React, { useContext } from 'react'
import counterContainer from './CounterContainer'
import { AppContext } from '../index'
import CounterView from './CounterView'

const App = (): JSX.Element => {
  const { useCase } = useContext(AppContext)
  const { state, functions } = counterContainer({ useCase })

  return (
    <CounterView
      counter={state.counter}
      onClick={functions.handleIncrementClick}
    />
  )
}

export default App
