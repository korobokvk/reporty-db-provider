import { ConnectionOptions } from 'typeorm'
const dbUrl = process.env.DB_URL
const isDev = process.env.DEV_ENV
// Need to refactor this sh**
const password = isDev ? 'root' : 'root1234'
const baseFolder = isDev ? 'src' : 'dist'
const fileFormat = isDev ? 'ts' : 'js'

const config: ConnectionOptions = {
  type: 'postgres',
  host: dbUrl,
  port: 5432,
  username: 'root',
  password: password,
  database: 'postgres',
  entities: [`${baseFolder}/entity/**/*.${fileFormat}`],
  migrations: [`${baseFolder}/migration/**/*.${fileFormat}`],
  subscribers: [`${baseFolder}/subscriber/**/*.${fileFormat}`],
  synchronize: true,
}

export default config
