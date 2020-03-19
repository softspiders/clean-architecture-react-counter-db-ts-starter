import { CounterItem } from '../entity/CounterItem'

export interface CounterService {
  getCounter(): Promise<CounterItem | null>
  increment(): Promise<CounterItem | null>
}
