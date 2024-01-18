import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/typeorm/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { log } from 'console';
import { userDto } from './dto/user.dto';
@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    async getAllUsers(){
        return {
            data: await this.userService.getAllUsers()
        };
    }

    @Get(':id')
    async getUser(@Param('id') id: number){
        console.log(id);
        return {
            data: await this.userService.getUser(id)
        };
    }
    
    
    @Post('/Add')
    async createUser(@Body() data: userDto){
        return {
            message: "User created successfully!",
            data: await this.userService.createUser(data)
        };
    }


    @Delete(':id')
    async deleteUser(@Param('id') id: number){
        await this.userService.deleteUser(id);
        return {
            message: "User deleted successfully",
        };
    }

    @Patch('/:id')
    async updateUser(@Param('id') id: number,@Body() data: userDto){
        return {
            message: "User updated successfully",
            data: await this.userService.updateUser(id,data)
        };
    }
}
