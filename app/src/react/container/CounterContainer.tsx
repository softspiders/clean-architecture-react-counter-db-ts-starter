import { useState, useCallback, useEffect } from 'react'
import { CounterInteractor } from '../../usecase'

interface CounterContainerProps {
  useCase: CounterInteractor
}

const CounterContainer = ({ useCase }: CounterContainerProps) => {
  const [counter, setCounter] = useState<number>(1)

  useEffect(() => {
    ;(async (): Promise<void> => {
      try {
        const newCounter: number = await useCase.getCounter()
        setCounter(newCounter)
      } catch (error) {
        console.log(error)
      }
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleIncrement = useCallback(async (): Promise<void> => {
    try {
      const newCounter: number = await useCase.increment()
      setCounter(newCounter)
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
