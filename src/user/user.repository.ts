export class UserRepository {
    private users = [];

    async save(user){
        this.users.push(user);
        console.log(user);
    }
    
    async list(){
        return this.users;
    }
    async checkEmailUnique(email: string){
        const users = this.users
        
        if(users.find(user => user.email === email )){
            return false;
        } else{
            return true;
        }
    }
}