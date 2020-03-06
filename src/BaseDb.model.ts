import { Crud } from './interfaces/crud.interface'

export class BaseDbModel<T> {
  public create
  public readOne
  public readAll
  public update
  public delete

  constructor(private dbCrud: Crud<T>) {
    this.create = dbCrud.create
    this.readOne = dbCrud.readOne
    this.readAll = dbCrud.readAll
    this.update = dbCrud.update
    this.delete = dbCrud.delete
  }
}
