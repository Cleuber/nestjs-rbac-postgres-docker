import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, ManyToMany, JoinTable, JoinColumn, ManyToOne } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Role } from '../../roles/entities/role.entity';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  login: string;

  @Column()
  password: string;

  @JoinTable({name: 'users_roles'})
  @ManyToMany(() => Role, roles => roles.users, {cascade: true})
  roles: Role[];
  
  @BeforeInsert()
  private encryptPassword(): void {
    var salt = bcrypt.genSaltSync(12);
    this.password = bcrypt.hashSync(this.password, salt);
  }
}