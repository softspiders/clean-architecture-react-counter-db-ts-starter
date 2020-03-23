import { CounterInput } from './CounterInput'
import { Counter } from '../entity'

export interface CounterService {
  getCounter(): Promise<Counter>
  updateCounter(counter: Counter): Promise<Counter>
}

export class CounterInteractor implements CounterInput {
  counterService: CounterService

  constructor(counterService: CounterService) {
    this.counterService = counterService
  }

  async getCounter(): Promise<number> {
    const newCounter: Counter = await this.counterService.getCounter()
    return newCounter.counter
  }

  async increment(): Promise<number> {
    const currentCounter: Counter = await this.counterService.getCounter()
    const newCounter: Counter = new Counter(currentCounter.counter + 1)
    const resultCounter: Counter = await this.counterService.updateCounter(
      newCounter
    )

    return resultCounter.counter
  }
}
