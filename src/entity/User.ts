import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm'

@Entity('User')
@Unique(['email'])
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: null })
  data: number

  @Column()
  email: string

  @Column()
  password: string

  @Column()
  salt: string
}
