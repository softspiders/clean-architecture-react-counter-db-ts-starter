export interface CounterServiceOutput {
  getCounter(): Promise<Response | undefined>
  updateCounter(counter: number): Promise<Response | undefined>
}
