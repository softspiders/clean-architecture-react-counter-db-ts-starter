import { TodoItem } from '../entity/TodoItem'

export interface CounterService {
  getCounter(): Promise<TodoItem | null>
  increment(): Promise<TodoItem | null>
}
