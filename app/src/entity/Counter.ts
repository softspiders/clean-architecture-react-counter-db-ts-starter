export class Counter {
  private readonly _id: number
  private readonly _counter: number

  constructor(id: number, counter: number) {
    this._id = id
    this._counter = counter
  }

  get id(): number {
    return this._id
  }

  get counter(): number {
    return this._counter
  }
}
