import React, { useContext } from 'react'
import { CounterView } from './index'
import counterContainer from '../container/CounterContainer'
import { AppContext } from '../../index'

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
