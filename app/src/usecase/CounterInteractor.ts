import { CounterInput } from './CounterInput'
import { CounterOutput } from './CounterOutput'
import { CounterItem } from '../entity/CounterItem'

export class CounterInteractor implements CounterInput {
  client: CounterOutput

  constructor(client: CounterOutput) {
    this.client = client
  }

  async getCounter(): Promise<number> {
    const counter: number = await this.client.getCounter()
    console.log('CounterInteractor.getCounter(): counter = ' + counter)
    return counter
  }

  async increment(): Promise<CounterItem> {
    const currentCounter: number = await this.getCounter()
    const counterItem: any = await this.client.updateCounter(currentCounter + 1)

    return CounterItem.fromJSON(counterItem)
  }
}
