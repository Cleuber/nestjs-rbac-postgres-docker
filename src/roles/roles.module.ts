import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { UsersService } from 'src/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Role } from './entities/role.entity';
import { UsersController } from 'src/users/users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role])
  ],
  controllers: [RolesController, UsersController],
  providers: [RolesService, UsersService]
})
export class RolesModule {}
