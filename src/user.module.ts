import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";

export class UserModule{
    controllers: [UserController]

}