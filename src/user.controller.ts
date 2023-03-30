import { Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Controller('/usuarios')
export class UserController{

    private userRepository = new UserRepository()

    @Post()
    async createUser(data){
        this.userRepository.save(data)
        return {status: 'user created'};
    }
    @Get()
    async listUsers(){
        return this.userRepository.list();
    }

}