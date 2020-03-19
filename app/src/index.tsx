import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './view'
import * as serviceWorker from './serviceWorker'
import { CssBaseline, colors } from '@material-ui/core'
import { CounterServiceImpl } from './usecase/CounterServiceImpl'
import { RestClientImpl } from './adapter/RestClientImpl'

const restClient = new RestClientImpl('http://localhost:3001')
const counterUseCase = new CounterServiceImpl(restClient)

interface IContextProps {
  useCase: CounterServiceImpl
}

export const AppContext = createContext({} as IContextProps)

ReactDOM.render(
  <React.Fragment>
    <CssBaseline />
    <AppContext.Provider value={{ useCase: counterUseCase }}>
      <App />
    </AppContext.Provider>
  </React.Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
