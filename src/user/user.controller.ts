import { Controller, Get, Post, Body } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { CreateUserDTO } from "./dto/CreateUser.dto";

@Controller('/users')
export class UserController{

    private userRepository = new UserRepository()

    @Post()
    async createUser(@Body() dataUser: CreateUserDTO){
        this.userRepository.save(dataUser);
        return {status: 'user created'};
    }
    @Get()
    async listUsers(){
        return this.userRepository.list();
    }

}