"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRolesTable1632592162862 = void 0;
const typeorm_1 = require("typeorm");
class CreateRolesTable1632592162862 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'roles',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isGenerated: true,
                    isPrimary: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'resources',
                    type: 'text'
                }
            ]
        }));
    }
    async down(queryRunner) {
    }
}
exports.CreateRolesTable1632592162862 = CreateRolesTable1632592162862;
//# sourceMappingURL=1632592162862-create-roles-table.js.map