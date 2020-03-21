import { ConnectionOptions } from 'typeorm'
const dbUrl = process.env.DB_URL

const config: ConnectionOptions = {
  type: 'postgres',
  host: dbUrl,
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
