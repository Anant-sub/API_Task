import { Injectable } from '@nestjs/common';
import { UserEntitiy } from 'src/typeorm/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntitiy)
        private readonly userRepository: Repository<UserEntitiy>
    ){}
    getAllUsers(): object[]{
        return [];
    }
    getUser(): object{
        return {};
    }
    async createUser(data: object): Promise<UserEntitiy>{
        return await this.userRepository.save(data);
    }
    deleteUser(): any{
        return {};
    }
    updateUser(): any{
        return {};
    }
}
