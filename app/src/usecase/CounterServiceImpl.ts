import { CounterService } from './CounterService'
import { RestClient } from '../adapter/RestClient'
import { TodoItem } from '../entity/TodoItem'

export class CounterServiceImpl implements CounterService {
  client: RestClient

  constructor(client: RestClient) {
    this.client = client
  }

  async getCounter(): Promise<TodoItem | null> {
    const counter: any = await this.client.increment()

    return counter
  }

  async increment(): Promise<TodoItem | null> {
    const counter: any = await this.client.increment()

    return counter
  }
}
