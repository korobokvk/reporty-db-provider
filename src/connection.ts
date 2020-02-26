import { createConnection, Connection, EntitySchema } from 'typeorm'

export const connection = (entity: (Function | string | EntitySchema<any>)[]): Promise<Connection> =>
  createConnection({
    type: 'postgres',
    host: 'host.docker.internal',
    port: 5432,
    username: 'root',
    password: 'root',
    entities: entity,
    synchronize: true,
    logging: false,
  })
