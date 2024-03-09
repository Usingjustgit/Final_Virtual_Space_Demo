import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { AuthService } from 'src/authentication/auth.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly authService: AuthService,
  ) {}

  async create(user: User): Promise<any> {
    user.password = await bcrypt.hash(user.password, 10);
    const createdUser = new this.userModel(user);
    await createdUser.save();
    return { ...createdUser, password: undefined };
  }

  async login(user: User): Promise<any> {
    const token = await this.authService.generateToken(user);
    return token;
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate({ _id: id }, user, { new: true });
  }
}
