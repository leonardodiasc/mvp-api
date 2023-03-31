import { Injectable } from '@nestjs/common';
@Injectable()
export class UserRepository {
    private users = [];

    async save(user){
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
}