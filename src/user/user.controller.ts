import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntitiy } from 'src/typeorm/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    getAllUsers(): object[]{
        return this.userService.getAllUsers();
    }

    @Get(':id')
    getUser(@Param('id') id: string): any{
        return id;
    }
    
    
    @Post('/Add')
    createUser(@Body() data: object): any{
        return data;
    }


    @Delete('/delete/:id')
    deleteUser(@Param('id') id: string): any{
        return id;
    }

    @Patch('update')
    updateUser(@Body() data: object): any{
        return data;
    }
}
