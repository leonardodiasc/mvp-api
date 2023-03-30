import { Controller, Get, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";

@Controller('/users')
export class UserController{

    constructor(private userRepository: UserRepository) {}

    @Post()
    async createUser(@Body() dataUser: CreateUserDTO){
        console.log('Received dataUser:', dataUser);
        this.userRepository.save(dataUser);
        return {status: 'user created'};
    }

    @Get()
    async listUsers(@Res() res){
        const users = await this.userRepository.list();
        return res.status(HttpStatus.OK).json(users);
    }
}
