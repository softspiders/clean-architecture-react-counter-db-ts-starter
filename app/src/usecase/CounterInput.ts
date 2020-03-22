import { CounterItem } from '../entity/CounterItem'

export interface CounterInput {
  getCounter(): Promise<number>
  increment(): Promise<CounterItem | null>
}
