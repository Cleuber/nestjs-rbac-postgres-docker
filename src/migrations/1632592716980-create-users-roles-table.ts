import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsersRolesTable1632592716980 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
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

      await queryRunner.createForeignKey(
        'users_roles',
        new TableForeignKey({
          name: 'users_roles_users',
          columnNames: ['usersId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'users',
        }),
      );

      await queryRunner.createForeignKey(
        'users_roles',
        new TableForeignKey({
          name: 'users_roles_roles',
          columnNames: ['rolesId'],
          referencedColumnNames: ['id'],
          referencedTableName: 'roles',
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
