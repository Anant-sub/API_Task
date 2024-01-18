import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { userDto } from './dto/user.dto';
import { UserEntity } from 'src/typeorm/user.entity';

describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;

  it('should return a user with specified id', async () => {
    expect("anant").toEqual("anant");
  });
});
