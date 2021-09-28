import { User } from "../../users/entities/user.entity";
export declare class Role {
    id: number;
    name: string;
    resources: string;
    users: User[];
}
