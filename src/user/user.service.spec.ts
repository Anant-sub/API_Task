import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from 'src/typeorm/user.entity';
import { Repository } from 'typeorm';
import { userDto } from './dto/user.dto';

describe('UserService', () => {
  let service: UserService;
  let repository: Repository<UserEntity>;

  const userArr = [
    {
      "id": 1,
      "title": "Post 1",
      "comments": 10,
      "likes": 10,
      "author": "John Doe",
      "createdAt": "2023-12-05T08:15:03.202Z"
    },
    {
      "id": 2,
      "title": "Post 2",
      "comments": 5,
      "likes": 15,
      "author": "Jane Smith",
      "createdAt": "2023-12-06T10:30:45.567Z"
    },
    {
      "id": 3,
      "title": "Post 3",
      "comments": 8,
      "likes": 20,
      "author": "Bob Johnson",
      "createdAt": "2023-12-07T14:22:17.901Z"
    },
    {
      "id": 4,
      "title": "Post 4",
      "comments": 12,
      "likes": 8,
      "author": "Alice Brown",
      "createdAt": "2023-12-08T18:40:02.123Z"
    },
    {
      "id": 5,
      "title": "Post 5",
      "comments": 6,
      "likes": 18,
      "author": "Chris White",
      "createdAt": "2023-12-09T22:05:30.456Z"
    },
    {
      "id": 6,
      "title": "Post 6",
      "comments": 15,
      "likes": 25,
      "author": "Eva Green",
      "createdAt": "2023-12-10T03:12:59.789Z"
    },
    {
      "id": 7,
      "title": "Post 7",
      "comments": 9,
      "likes": 13,
      "author": "David Black",
      "createdAt": "2023-12-11T07:55:45.234Z"
    },
    {
      "id": 8,
      "title": "Post 8",
      "comments": 7,
      "likes": 22,
      "author": "Sophie Gray",
      "createdAt": "2023-12-12T12:18:37.890Z"
    },
    {
      "id": 9,
      "title": "Post 9",
      "comments": 11,
      "likes": 11,
      "author": "Michael Taylor",
      "createdAt": "2023-12-13T16:30:20.345Z"
    },
    {
      "id": 10,
      "title": "Post 10",
      "comments": 14,
      "likes": 16,
      "author": "Olivia Davis",
      "createdAt": "2023-12-14T20:42:11.678Z"
    }
  ];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    repository = module.get<Repository<UserEntity>>(getRepositoryToken(UserEntity));
  });  

  describe('checking all the functionalities', () =>{
    it('for getUser', async() => {
      let obj = {
        "id": 1,
        "title": "Post 1",
        "comments": 10,
        "likes": 10,
        "author": "John Doe",
        "createdAt": "2023-12-05T08:15:03.202Z"
      }
      jest.spyOn(repository,'findOne').mockResolvedValue(obj);
      const res = await service.getUser(1);
      expect(res).toEqual(obj);
    })


    it('for getAllUser', async() => {
      jest.spyOn(repository,'find').mockResolvedValue(userArr);
      const res = await service.getAllUsers();
      expect(res).toEqual(userArr);
    })

    it('for createUser', async() => {
      const obj = {
          "id": 10,
          "title": "Post 10",
          "comments": 14,
          "likes": 16,
          "author": "Olivia Davis",
          "createdAt": "2023-12-14T20:42:11.678Z"
      }
      jest.spyOn(repository,'save').mockResolvedValue(obj);
      const res = await service.createUser(obj);
      expect(res).toEqual(obj);
    })

    it('for updateUser', async () => {
        const obj: any =  {
          "id": 6,
          "title": "Post 6",
          "comments": 15,
          "likes": 25,
          "author": "Eva Blue",
          "createdAt": "2023-12-10T03:12:59.789Z"
        }
        jest.spyOn(repository,'update').mockResolvedValue(obj);
        const res = await service.updateUser(6,obj);
        expect(res).toEqual(obj);
    })
  })
});
