import { User } from "../../users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'roles' })
export class Role {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  resources: string;

  @ManyToMany(() => User, users => users.roles)
  users: User[];

}
