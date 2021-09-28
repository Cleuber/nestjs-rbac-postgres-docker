import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
export declare class RolesService {
    private roleRepo;
    private userRepo;
    constructor(roleRepo: Repository<Role>, userRepo: Repository<User>);
    create(createRoleDto: CreateRoleDto): any;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateRoleDto: UpdateRoleDto): string;
    remove(id: number): string;
}
