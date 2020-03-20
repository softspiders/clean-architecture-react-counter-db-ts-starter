type CounterJSON = {
  id: number
  counter: number
}

export class CounterItem {
  private readonly _id: number
  private readonly _counter: number

  constructor(id: number, counter: number) {
    this._id = id
    this._counter = counter
  }

  get counter(): number {
    return this._counter
  }

  static fromJSON(json: CounterJSON): CounterItem {
    const { counter, id } = json
    return new CounterItem(id, counter)
  }
}
