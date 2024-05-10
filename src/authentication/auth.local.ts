import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from 'src/user_information/user.service';
import * as bcrypt from 'bcryptjs';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LocalUserValidation } from 'type';

@Injectable()
export class AuthLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super();
  }

  /**
   * Method to validate user credentials
   * @param username - User's email
   * @param password - User's password
   * @returns User object if credentials are valid
   * @throws NotFoundException if user does not exist
   * @throws BadRequestException if password is incorrect
   */
  async validate(
    username: string,
    password: string,
  ): Promise<LocalUserValidation> {
    const user = await this.userService.findUserByEmail(username);

    // If user does not exist, throw NotFoundException
    if (!user) {
      throw new NotFoundException();
    }

    if (user.isDelete) {
      throw new NotFoundException();
    }

    // If user exists, check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const { _id, fullName, email, image, isAdmin } = user;
      return { _id, fullName, email, image, isAdmin };
    }
    // If password is incorrect, throw BadRequestException
    throw new BadRequestException();
  }
}
