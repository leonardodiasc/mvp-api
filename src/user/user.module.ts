import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { EmailEhUnicoValidator } from "./validation/unique-email.validator";

@Module({
    controllers: [UserController],
    providers: [UserRepository, EmailEhUnicoValidator]
})

export class UserModule{}