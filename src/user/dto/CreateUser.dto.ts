import { IsString, IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from "class-validator";
import { IsEmailUnique } from "../validation/unique-email.validator";

export class CreateUserDTO{
    @MinLength(7)
    name: string;

    @IsEmailUnique({message:'this email already exists'})
    @IsEmail()
    email: string;

    @IsStrongPassword()
    pswd: string;
}