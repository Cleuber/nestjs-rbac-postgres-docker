import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateRolesTable1632592162862 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
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

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
