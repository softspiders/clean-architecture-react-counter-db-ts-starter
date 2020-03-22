import fetch from 'unfetch'
import { CounterOutput } from '../usecase'

export class CounterJSON {
  counter!: number
  id!: number

  constructor(counterResponse: any) {
    this.counter = counterResponse.counter
    this.id = counterResponse.id
  }
}

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
        const result: CounterJSON = new CounterJSON(json[0])
        return result.counter
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
          counter,
          id: 1
        })
      })

      if (response.ok) {
        const json = await response.json()
        return json.counter
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
