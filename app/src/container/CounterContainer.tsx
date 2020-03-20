import { useState, useCallback, useEffect } from 'react'
import { CounterServiceImpl } from '../usecase/CounterServiceImpl'

interface CounterContainerProps {
  useCase: CounterServiceImpl
}

const CounterContainer = ({ useCase }: CounterContainerProps) => {
  const [counter, setCounter] = useState<number | null>(null)

  useEffect(() => {
    ;(async (): Promise<void> => {
      console.log('CounterContainer.useEffect() BEGIN')
      try {
        const counterItem = await useCase.getCounter()
        setCounter(counterItem ? counterItem.counter : null) // TODO rewrite
      } catch (error) {
        // TODO: Add codes to handle errors
        console.log(error)
      }
      console.log('CounterContainer.useEffect() END')
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleIncrement = useCallback(
    () => async (): Promise<void> => {
      console.log('CounterContainer.handleIncrement() BEGIN')
      try {
        const counterItem = await useCase.increment()
        setCounter(counterItem ? counterItem.counter : null) // TODO rewrite
      } catch (error) {
        // TODO: Add codes to handle errors
        console.log(error)
      }
      console.log('CounterContainer.handleIncrement() END')
    },
    [] // eslint-disable-line react-hooks/exhaustive-deps
  )

  return {
    state: {
      counter
    },
    functions: {
      handleIncrementClick: handleIncrement
    }
  }
}

export default CounterContainer
