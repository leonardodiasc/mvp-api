import { IsString } from "class-validator";
import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator/types/decorator/decorators";

export class CreateUserDTO{
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsStrongPassword()
    pswd: string;
}