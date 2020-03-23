import { CounterIn } from './CounterIn'
import { Counter } from '../entity'

// Counter's output interface
export interface CounterOut {
  getCounter(): Promise<Counter>
  updateCounter(counter: Counter): Promise<Counter>
}

export class CounterInteractor implements CounterIn {
  counterOut: CounterOut

  constructor(counterService: CounterOut) {
    this.counterOut = counterService
  }

  async getCounter(): Promise<number> {
    const newCounter: Counter = await this.counterOut.getCounter()
    return newCounter.counter
  }

  async increment(): Promise<number> {
    const currentCounter: Counter = await this.counterOut.getCounter()
    const newCounter: Counter = new Counter(currentCounter.counter + 1)
    const resultCounter: Counter = await this.counterOut.updateCounter(
      newCounter
    )

    return resultCounter.counter
  }
}
