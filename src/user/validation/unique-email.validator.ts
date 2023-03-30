import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { UserRepository } from '../user.repository';

@ValidatorConstraint({ name: 'uniqueEmail', async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository){
        
    }
  async validate(email: string, args: ValidationArguments): Promise<boolean> {
    // your validation logic here
    const isEmailUnique =  this.isEmailUnique(email, args.constraints[0]);
    return isEmailUnique;
  }

  private isEmailUnique(email: string, emails: string[]): boolean {
    // Example implementation with a mock array of existing emails
    return !emails.includes(email);
  }
}
