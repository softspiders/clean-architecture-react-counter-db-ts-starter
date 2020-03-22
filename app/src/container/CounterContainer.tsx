import { useState, useCallback, useEffect } from 'react'
import { CounterInteractor } from '../usecase/CounterInteractor'

interface CounterContainerProps {
  useCase: CounterInteractor
}

const CounterContainer = ({ useCase }: CounterContainerProps) => {
  const [counter, setCounter] = useState<number>(1)

  useEffect(() => {
    ;(async (): Promise<void> => {
      try {
        const newCounter = await useCase.getCounter()
        setCounter(newCounter)
      } catch (error) {
        console.log(error)
      }
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleIncrement = useCallback(async (): Promise<void> => {
    try {
      const counterItem = await useCase.increment()
      setCounter(counterItem.counter)
    } catch (error) {
      console.log(error)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

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
