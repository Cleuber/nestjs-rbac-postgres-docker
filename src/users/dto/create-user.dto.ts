import { IsString, MaxLength } from "class-validator";

export class CreateUserDto {

  @IsString()
  name: string;

  @IsString()
  login: string;

  @IsString()
  password: string;

  @IsString({ each: true })
  readonly roles: string[]
}
