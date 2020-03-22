export interface CounterOutput {
  getCounter(): Promise<Response | undefined>
  updateCounter(counter: number): Promise<Response | undefined>
}
