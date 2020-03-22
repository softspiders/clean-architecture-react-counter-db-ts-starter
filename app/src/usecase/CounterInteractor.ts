import { CounterInput } from './CounterInput'
import { CounterOutput } from './CounterOutput'

export class CounterInteractor implements CounterInput {
  client: CounterOutput

  constructor(client: CounterOutput) {
    this.client = client
  }

  async getCounter(): Promise<number> {
    return await this.client.getCounter()
  }

  async increment(): Promise<number> {
    const currentCounter: number = await this.getCounter()
    return await this.client.updateCounter(currentCounter + 1)
  }
}
