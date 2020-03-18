import { useState, useCallback, useEffect } from 'react'
import { CounterServiceImpl } from '../usecase/CounterServiceImpl'

interface CounterContainerProps {
  useCase: CounterServiceImpl
}

const CounterContainer = ({ useCase }: CounterContainerProps) => {
  const [counter, setCounter] = useState<number | null>(null)

  useEffect(() => {
    ;(async (): Promise<void> => {
      try {
        const counter = await useCase.getCounter()
        setCounter(counter)
      } catch (error) {
        // TODO: Add codes to handle errors
        console.log(error)
      }
    })()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleIncrement = useCallback(
    () => async (): Promise<void> => {
      try {
        const counter = await useCase.increment()
        setCounter(counter)
      } catch (error) {
        // TODO: Add codes to handle errors
        console.log(error)
      }
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
