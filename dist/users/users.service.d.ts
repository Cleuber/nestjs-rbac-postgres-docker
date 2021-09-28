import { Role } from 'src/roles/entities/role.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
export declare class UsersService {
    private userRepo;
    private roleRepo;
    constructor(userRepo: Repository<User>, roleRepo: Repository<Role>);
    create(createUserDto: CreateUserDto): unknown;
    findAll(): any;
    findOne(id: number): any;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
