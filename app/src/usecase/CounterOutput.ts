export interface CounterOutput {
  getCounter(): Promise<number>
  updateCounter(counter: number): Promise<number>
}
