import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './react/view'
import * as serviceWorker from './serviceWorker'
import { CounterInteractor } from './usecase/CounterInteractor'
import { CounterOutputRestAdapter } from './adapter/CounterOutputRestAdapter'

const restClient = new CounterOutputRestAdapter('http://localhost:3001')
const counterUseCase = new CounterInteractor(restClient)

interface IContextProps {
  useCase: CounterInteractor
}

export const AppContext = createContext({} as IContextProps)

ReactDOM.render(
  <React.Fragment>
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
