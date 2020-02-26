import { ConnectionOptions } from 'typeorm'

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'host.docker.internal',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'root',
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  synchronize: true,
}

export default config
