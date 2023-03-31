import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
@Injectable()
export class UserRepository {
    private users: UserEntity[] = [];

    async save(user: UserEntity){
        this.users.push(user);
        console.log(user);
    }
    
    async list(){
        return this.users;
    }
    async userExistsEmail(email: string) {
        const findUser = this.users.find(
          (user) => user.email === email,
        );
        return findUser !== undefined;
    }
    async searchById(id: string){
        const findUser = this.users.find((user) => user.id === id);
        if (!findUser){
            throw new Error ('User does not exist');
        }
        return findUser;
    }
    async update(id: string, updateValues: Partial<UserEntity>){
        const user = this.searchById(id);
        Object.entries(updateValues).forEach(([key, value]) =>{
            if (key ==='id'){
                return;
            }
            user[key] = value;
        });
        return user;
    }
}