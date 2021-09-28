"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersRolesTable1632592716980 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersRolesTable1632592716980 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users_roles',
            columns: [
                {
                    name: 'usersId',
                    type: 'int',
                },
                {
                    name: 'rolesId',
                    type: 'int'
                },
            ]
        }));
        await queryRunner.createForeignKey('users_roles', new typeorm_1.TableForeignKey({
            name: 'users_roles_users',
            columnNames: ['usersId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
        }));
        await queryRunner.createForeignKey('users_roles', new typeorm_1.TableForeignKey({
            name: 'users_roles_roles',
            columnNames: ['rolesId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'roles',
        }));
    }
    async down(queryRunner) {
    }
}
exports.CreateUsersRolesTable1632592716980 = CreateUsersRolesTable1632592716980;
//# sourceMappingURL=1632592716980-create-users-roles-table.js.map