import React, { useContext } from 'react'
import { Layout, Counter } from '.'
import counterContainer from '../container/CounterContainer'
import { AppContext } from '../'

const App = (): JSX.Element => {
  const { useCase } = useContext(AppContext)
  const { state, functions } = counterContainer({ useCase })

  return (
    <Layout>
      <Counter
      // todoItems={state.todoItems}
      // todoTitle={state.todoTitle}
      // onAddKeyDown={functions.handleAddKeyDown}
      // onCompleteClick={functions.handleCompleteClick}
      // onDeleteClick={functions.handleDeleteClick}
      // onInputChange={functions.handleInputChange}
      />
    </Layout>
  )
}

export default App
