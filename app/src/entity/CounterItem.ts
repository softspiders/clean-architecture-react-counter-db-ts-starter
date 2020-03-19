type CounterJSON = {
  counter: number
}

export class CounterItem {
  private readonly _counter: number

  constructor(counter: number) {
    this._counter = counter
  }

  get counter(): number {
    return this._counter
  }

  static fromJSON(json: CounterJSON): CounterItem {
    const { counter } = json
    return new CounterItem(counter)
  }
}
