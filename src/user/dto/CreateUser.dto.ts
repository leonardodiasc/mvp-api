import { IsString } from "class-validator";
import { IsEmail, IsNotEmpty, IsStrongPassword, MinLength } from "class-validator/types/decorator/decorators";

export class CreateUserDTO{
    @IsString()
    @MinLength(8)
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsStrongPassword()
    pswd: string;
}