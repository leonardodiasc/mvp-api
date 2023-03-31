import { Controller, Get, Post, Body, Res, Put, HttpStatus, Param } from '@nestjs/common';
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";
import {UpdateUserDTO} from "./dto/UpdateUser.dto"
import { UserEntity } from './user.entity';
import {v4 as uuid} from 'uuid';
@Controller('/users')
export class UserController{

    constructor(private userRepository: UserRepository) {}

    @Post()
    async createUser(@Body() dataUser: CreateUserDTO){
        const userEntity = new UserEntity;
        userEntity.email = dataUser.email;
        userEntity.name = dataUser.name;
        userEntity.pswd = dataUser.pswd;
        userEntity.id = uuid();
        this. userRepository.save(userEntity)
        return userEntity.id;
    }

    @Get()
    async listUsers(@Res() res){
        const users = await this.userRepository.list();
        return res.status(HttpStatus.OK).json(users);
    }

    @Put('/:id')
    async updateUser(@Param('id') id: string, @Body() newData: UpdateUserDTO){
        const updatedUser = await this.userRepository.update(id, newData);
        return{
            user: updatedUser,
            message: 'user updated'
        };
    }
}
