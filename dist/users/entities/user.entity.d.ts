import { Role } from '../../roles/entities/role.entity';
export declare class User {
    id: number;
    name: string;
    login: string;
    password: string;
    roles: Role[];
    private encryptPassword;
}
