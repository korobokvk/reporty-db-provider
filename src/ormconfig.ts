import { ConnectionOptions } from 'typeorm'
const dbUrl = process.env.DB_URL
const isDev = process.env.DEV_ENV
const password = isDev ? 'root' : 'root1234'

const config: ConnectionOptions = {
  type: 'postgres',
  host: dbUrl,
  port: 5432,
  username: 'root',
  password: password,
  database: 'database-1',
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  synchronize: true,
}

export default config
