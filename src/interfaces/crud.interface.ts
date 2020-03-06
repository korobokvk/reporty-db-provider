import { FindOneOptions, EntitySchema } from 'typeorm'

export interface Crud<T> {
  readAll(): Promise<Array<T>>
  delete(data: any): Promise<T>
  create(data: any): Promise<Array<T>>
  update(searchParam: any, dataToUpdate: any): Promise<T>
  readOne(searchParam: FindOneOptions): Promise<T>
}
