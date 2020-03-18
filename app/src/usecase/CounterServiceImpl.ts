import { CounterService } from './CounterService'
import { RestClient } from '../adapter/RestClient'

export class CounterServiceImpl implements CounterService {
  client: RestClient

  constructor(client: RestClient) {
    this.client = client
  }

  async getCounter(): Promise<number | null> {
    const counter: any = await this.client.increment()

    return counter
  }

  async increment(): Promise<number | null> {
    const counter: any = await this.client.increment()

    return counter
  }
}
