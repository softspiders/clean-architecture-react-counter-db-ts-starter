import { CounterItem } from '../entity/CounterItem'

export interface CounterInput {
  getCounter(): Promise<number | null>
  increment(): Promise<CounterItem | null>
}
