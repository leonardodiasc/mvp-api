import { IsString, IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from "class-validator";

export class CreateUserDTO{
    @MinLength(7)
    name: string;

    @IsEmail()
    email: string;

    @IsStrongPassword()
    pswd: string;
}