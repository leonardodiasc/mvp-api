import { IsString, IsEmail, IsNotEmpty, IsStrongPassword, MinLength, IsOptional } from "class-validator";
import { IsEmailUnique } from "../validation/unique-email.validator";

export class UpdateUserDTO{
    @MinLength(7)
    @IsOptional()
    name: string;

    @IsEmailUnique({message:'this email already exists'})
    @IsEmail()
    @IsOptional()
    email: string;

    @IsStrongPassword()
    @IsOptional()
    pswd: string;
}