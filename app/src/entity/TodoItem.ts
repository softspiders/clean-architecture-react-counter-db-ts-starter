type CounterJSON = {
  counter: number
}

export class TodoItem {
  private readonly _counter: number

  constructor(counter: number) {
    this._counter = counter
  }

  get counter(): number {
    return this._counter
  }

  static fromJSON(json: CounterJSON): TodoItem {
    const { counter } = json
    return new TodoItem(counter)
  }
}
