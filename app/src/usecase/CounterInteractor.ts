import { CounterInput } from './CounterInput'

export interface CounterOutput {
  getCounter(): Promise<number>
  updateCounter(counter: number): Promise<number>
}

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
