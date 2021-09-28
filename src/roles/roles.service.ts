import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepo: Repository<Role>,

    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {

  }

  create(createRoleDto: CreateRoleDto) {
    createRoleDto.resources = JSON.stringify(createRoleDto.resources);
    let role = this.roleRepo.create(createRoleDto);

    return this.roleRepo.save(role);
  }

  findAll() {
    return this.roleRepo.find({});
  }

  findOne(id: number) {
    return this.roleRepo.findOne(id);
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }

}
