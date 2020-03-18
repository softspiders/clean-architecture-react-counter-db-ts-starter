import React, { useContext } from 'react'
import { Header, Layout, Counter } from '.'
import counterContainer from '../container/CounterContainer'
import { Container } from '@material-ui/core'
import { AppContext } from '../'

const App = (): JSX.Element => {
  const { useCase } = useContext(AppContext)
  const { state, functions } = counterContainer({ useCase })

  return (
    <Layout>
      <Header />
      <Container maxWidth="sm">
        <Counter
        // todoItems={state.todoItems}
        // todoTitle={state.todoTitle}
        // onAddKeyDown={functions.handleAddKeyDown}
        // onCompleteClick={functions.handleCompleteClick}
        // onDeleteClick={functions.handleDeleteClick}
        // onInputChange={functions.handleInputChange}
        />
      </Container>
    </Layout>
  )
}

export default App
