import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1632591678454 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
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

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
