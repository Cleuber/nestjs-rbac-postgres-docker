
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { User } from '../../users/entities/user.entity';
import { Repository } from 'typeorm';

const _ = require('underscore');

@Injectable()
export class ResourceGuard implements CanActivate {

  constructor(
    private reflector: Reflector,
    @InjectRepository(User)
    private userRepo: Repository<User>) { }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const resource = this.reflector.get('resource', context.getHandler());

    const req = context.switchToHttp().getRequest();

    if (resource) {
      return this.userRepo.findOne(req.user.id,{
        relations: ['roles'],
      }).then(user => {
        if (!(user instanceof User)) {
          return false;
        }
    
        let resources = user.roles.map(role => {
          return JSON.parse(role.resources);
        })

        let permissions = _.unique(_.flatten(resources));
        return permissions.includes(resource);

      }).catch(err => {
        console.log('Failed to find user', err);
        return false;
      });
    }

    return true;
  }
}

