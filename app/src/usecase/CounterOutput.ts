export interface CounterOutput {
  getCounter(): Promise<number | undefined>
  updateCounter(counter: number): Promise<number | undefined>
}
