import { Controller, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";

@Controller('/usuarios')
export class UsuarioController{

    private userRepository = new UserRepository()

    @Post()
    async createUser(data){
        this.userRepository.save(data)
        return {status: 'user created'};
    }

}