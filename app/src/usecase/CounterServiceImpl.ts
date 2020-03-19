import { CounterService } from './CounterService'
import { RestClient } from '../adapter/RestClient'
import { CounterItem } from '../entity/CounterItem'

export class CounterServiceImpl implements CounterService {
  client: RestClient

  constructor(client: RestClient) {
    this.client = client
  }

  async getCounter(): Promise<CounterItem | null> {
    const counterItem: any = await this.client.getCounter()
    return CounterItem.fromJSON(counterItem)
  }

  async increment(): Promise<CounterItem | null> {
    const counterItem: any = await this.client.increment()
    return CounterItem.fromJSON(counterItem)
  }
}
