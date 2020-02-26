import { Entity, Column, PrimaryGeneratedColumn, EntitySchema } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ default: null })
  data: number

  @Column()
  email: string

  @Column()
  password: string
}
