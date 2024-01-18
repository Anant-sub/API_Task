import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/typeorm/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userDto } from './dto/user.dto';
@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ){}
    async getAllUsers(){
        return await this.userRepository.find();
    }
    async getUser(id: number){
        return await this.userRepository.findOne({where: {id:id}});
    }
    async createUser(data: any): Promise<UserEntity>{
        return await this.userRepository.save(data);
    }
    async deleteUser(id: number){
        await this.userRepository.delete({id});
        return {
            deleted: true
        };
    }
    async updateUser(id:number,data: any){
        await this.userRepository.update({id},data);
        return data;
    }
}
 