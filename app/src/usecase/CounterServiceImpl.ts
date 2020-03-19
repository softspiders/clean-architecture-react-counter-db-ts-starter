import { CounterService } from './CounterService'
import { RestClient } from '../adapter/RestClient'
import { CounterItem } from '../entity/CounterItem'

export class CounterServiceImpl implements CounterService {
  client: RestClient

  constructor(client: RestClient) {
    this.client = client
  }

  async getCounter(): Promise<CounterItem | null> {
    const counter: any = await this.client.increment()

    return counter
  }

  async increment(): Promise<CounterItem | null> {
    const counter: any = await this.client.increment()

    return counter
  }
}
