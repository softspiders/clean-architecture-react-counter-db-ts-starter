export interface CounterInput {
  getCounter(): Promise<number>
  increment(): Promise<number>
}
