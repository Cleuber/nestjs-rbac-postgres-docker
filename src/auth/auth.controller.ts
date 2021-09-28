import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards, SetMetadata, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { Resource } from './decorators/resource.decorator';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtGuard } from './guards/jwt.guard';
import { ResourceGuard } from './guards/resource.guards';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post()
  create(@Body() createAuthDto: CreateAuthDto,   @Res() res: Response) {

    return this.authService.login(createAuthDto).then(result => {
      res.status(200).json({ accessToken: result })
    }).catch(err => {
      res.status(401).json(err);
    })
  }

}
