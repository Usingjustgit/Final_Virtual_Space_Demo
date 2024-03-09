import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { UserService } from 'src/user_information/user.service';
import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthLocalStratergy extends PassportStrategy(Strategy) {
  constructor(private userService: UserService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const isUserExist = await this.userService.findOne(username);
    if (isUserExist) {
      if (await bcrypt.compare(password, isUserExist.password)) {
        const { password, ...result } = isUserExist;
        return result;
      }
    }
    return null;
  }
}
