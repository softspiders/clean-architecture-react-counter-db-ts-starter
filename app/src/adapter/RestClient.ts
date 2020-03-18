export interface RestClient {
  getCounter(): Promise<Response | undefined>
  increment(): Promise<Response | undefined>
}
