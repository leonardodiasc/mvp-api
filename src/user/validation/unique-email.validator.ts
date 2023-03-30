import { ValidatorConstraint, ValidatorConstraintInterface, ValidationArguments } from 'class-validator';
import { UserRepository } from '../user.repository';

@ValidatorConstraint({ name: 'uniqueEmail', async: true })
export class UniqueEmailValidator implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository){}

  async validate(email: string, args: ValidationArguments): Promise<boolean> {
    // your validation logic here
    const isEmailUnique = await this.userRepository.checkEmailUnique(email)
    return !isEmailUnique;
  }

}
