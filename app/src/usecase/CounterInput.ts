import { CounterItem } from '../entity/CounterItem'

export interface CounterInput {
  getCounter(): Promise<CounterItem | null>
  increment(): Promise<CounterItem | null>
}
