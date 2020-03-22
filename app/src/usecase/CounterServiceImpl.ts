import { CounterService } from './CounterService'
import { CounterServiceOutput } from './CounterServiceOutput'
import { CounterItem } from '../entity/CounterItem'

export class CounterServiceImpl implements CounterService {
  client: CounterServiceOutput

  constructor(client: CounterServiceOutput) {
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
