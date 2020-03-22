import { CounterInput } from './CounterInput'
import { CounterOutput } from './CounterOutput'
import { CounterItem } from '../entity/CounterItem'

export class CounterInteractor implements CounterInput {
  client: CounterOutput

  constructor(client: CounterOutput) {
    this.client = client
  }

  async getCounter(): Promise<CounterItem> {
    const counters: any = await this.client.getCounter()
    return CounterItem.fromJSON(counters[0])
  }

  async increment(): Promise<CounterItem> {
    const currentCounterItem = await this.getCounter()
    const counterItem: any = await this.client.updateCounter(
      currentCounterItem.counter + 1
    )

    return CounterItem.fromJSON(counterItem)
  }
}
