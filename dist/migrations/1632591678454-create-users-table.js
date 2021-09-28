"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1632591678454 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable1632591678454 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    generationStrategy: 'increment',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'login',
                    type: 'varchar'
                },
                {
                    name: 'password',
                    type: 'varchar'
                }
            ]
        }));
    }
    async down(queryRunner) {
    }
}
exports.CreateUsersTable1632591678454 = CreateUsersTable1632591678454;
//# sourceMappingURL=1632591678454-create-users-table.js.map