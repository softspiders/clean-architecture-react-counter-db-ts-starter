import { TodoItem } from '../entity/TodoItem'

export interface CounterService {
  getCounter(): Promise<number | null>
  increment(): Promise<number | null>
}
