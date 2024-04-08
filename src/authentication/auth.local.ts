import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from 'src/user_information/user.service';
import * as bcrypt from 'bcryptjs';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class AuthLocalStratergy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super();
  }

  // This method is used to validate user
  // If user exist and password is correct then return the user
  async validate(username: string, password: string): Promise<any> {
    console.log('User comming here to checking login :', username, password);
    const isUserExist = await this.userService.findUserByEmail(username);
    if (!isUserExist) {
      throw new NotFoundException(); // If user does not exist then throw the error
    }
    if (isUserExist && (await bcrypt.compare(password, isUserExist.password))) {
      // console.log('isUserExist', isUserExist);
      // const { password, ...result } = isUserExist;
      const { _id, fullName, email, image, likedMovies, isAdmin } = isUserExist;
      return { _id, fullName, email, image, likedMovies, isAdmin }; // If user exist and password is correct then return the user
    }
    throw new BadRequestException(); // If user exist but password is not correct then throw the error
  }
}
