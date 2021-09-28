import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,

    @InjectRepository(Role)
    private roleRepo: Repository<Role>
  ) {

  }
  async create(createUserDto: CreateUserDto) {
    const { roles, ...dataInsert} = createUserDto;

    let rolesUser = await Promise.all(
      roles.map(role => {
        return this.roleRepo.findOne({name: role});
      })
    );
    rolesUser = rolesUser.filter( role => role);

    let userToSave = this.userRepo.create({
      ...dataInsert,
      roles: rolesUser
    });

    return this.userRepo.save(userToSave);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOne(id)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
