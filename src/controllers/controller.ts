import { Crud } from '../interfaces/crud.interface'
import { getRepository, Repository, getConnectionManager, getManager } from 'typeorm'

export class Controller<T> implements Crud<T> {
  public repo
  public model

  constructor(model) {
    this.model = model
    this.init()
  }

  public init = async () => {
    const { connections } = await getConnectionManager()
    if (connections.length) {
      this.repo = getRepository(this.model)
    }
  }

  public create = async (entityData): Promise<T[]> => {
    const newRepo = await this.repo.create(entityData)
    try {
      return await this.repo.save(newRepo)
    } catch (error) {
      throw error
    }
  }

  public readOne = async (searchParam): Promise<T> => {
    try {
      return await this.repo.findOne(searchParam)
    } catch (error) {
      throw error
    }
  }

  public readAll = async (): Promise<T[]> => {
    try {
      return await this.repo.find()
    } catch (error) {
      throw error
    }
  }

  public update = async (searchParam, dataToUpdate): Promise<T> => {
    const foundedRepo = await this.repo.findOne(searchParam)
    try {
      return await this.repo.save({ ...foundedRepo, ...dataToUpdate })
    } catch (error) {
      throw error
    }
  }

  public delete = async (searchParam): Promise<T> => {
    const foundedRepo = await this.repo.findOne(searchParam)
    try {
      return await this.repo.remove(foundedRepo)
    } catch (error) {
      throw error
    }
  }
}
