import fetch from 'unfetch'
import { CounterOutput } from '../usecase/CounterOutput'

export class CounterOutputRestAdapter implements CounterOutput {
  endpoint: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  client: any

  constructor(endpoint: string) {
    this.endpoint = endpoint
    this.client = fetch
  }

  public async getCounter(): Promise<number> {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await this.client(this._createUrl('/counter'))

      if (response.ok) {
        const json = await response.json()
        return json[0].counter
      }
      throw new Error(response.statusText)
    } catch (error) {
      throw error
    }
  }

  public async updateCounter(counter: number): Promise<number> {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await this.client(this._createUrl(`/counter/1`), {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          counter
        })
      })

      if (response.ok) {
        return response.json()
      }
      throw new Error(response.statusText)
    } catch (error) {
      throw error
    }
  }

  private _createUrl(resource: string): string {
    return this.endpoint + resource
  }
}
