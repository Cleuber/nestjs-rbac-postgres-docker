import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MockType, repositoryMockFactory } from '../mockTest/utils';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';



describe('UsersService', () => {
  let service: UsersService;
  let userRepoMock: MockType<Repository<User>>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        { provide: getRepositoryToken(User), useFactory: repositoryMockFactory },
      ],
      
    }).compile();

    service = module.get<UsersService>(UsersService);
    userRepoMock = module.get(getRepositoryToken(User));
  });

  it('should be defined', () => {
    userRepoMock.findOne({
      name: "teste"
    });
    expect(service).toBeDefined();
  });
});
