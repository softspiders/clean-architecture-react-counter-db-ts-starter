export interface RestClient {
  getCounter(): Promise<Response | undefined>
  updateCounter(counter: number): Promise<Response | undefined>
}
