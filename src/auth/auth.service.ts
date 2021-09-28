import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { User } from '../users/entities/user.entity';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
import { rejects } from 'assert';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private jwtService: JwtService
  ) { }

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  async validateCredentials(login: string, password: string): Promise<boolean> {
    let user = await this.userRepository.findOne({ login });

    if (!(user instanceof User)) {
      throw new Error('Invalid user')
    }

    return bcrypt.compare(password, user.password);
  }

  async login(createAuthDto: CreateAuthDto): Promise<Object> {
    try {
      let isValid = await this.validateCredentials(createAuthDto.login, createAuthDto.password);
      if (!isValid) {
        throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED,);
      }

      let user = await this.userRepository.findOne({ login: createAuthDto.login });
      const { password, ...payload } = user;

      return this.jwtService.signAsync({ payload })
    } catch (err) {
      console.log('Failed to authenticate user', err)
      throw new HttpException('Invalid Credentials', HttpStatus.UNAUTHORIZED,);
    }
  }


}
