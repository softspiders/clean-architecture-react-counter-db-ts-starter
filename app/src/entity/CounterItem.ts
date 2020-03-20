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
    console.log('CounterItem: json = ' + JSON.stringify(json))
    const { counter, id } = json
    console.log('CounterItem: id = ' + id)
    console.log('CounterItem: counter = ' + counter)
    return new CounterItem(id, counter)
  }
}
