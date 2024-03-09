import { BadRequestException, Injectable } from '@nestjs/common';
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

  // This method is take a user object and create a new user in the database
  // In this method we will hash the password before saving it and validate unique email
  // return the created user
  // This method end point is .....
  // @Put("/api/user")
  async create(user: User): Promise<any> {
    try {
      user.password = await bcrypt.hash(user.password, 10); // Hash the password using bcryptjs library
      const createdUser = new this.userModel(user); // Create a new user object with the hashed password
      await createdUser.save(); // Save the user in the database
      return createdUser; // Return the created user without the password
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  // This method is take a user object and that object based on generate token
  // return that generated token
  // This method end point is .....
  // @Post("/api/user/login")
  async login(user: User): Promise<any> {
    const token = await this.authService.generateToken(user);
    return token;
  }

  // This method return all users from the database
  // This method end point is .....
  // @Get("/api/user")
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // This method return a user based on id
  // This method end point is .....
  // @Get("/api/user/:id")
  async findOne(email: string): Promise<User> {
    return this.userModel.findOne({ email }).exec();
  }

  // This method update a user based on id
  // In this user id get from it token
  // return the updated user
  // This method end point is .....
  // @Put("/api/user/:id")
  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate({ _id: id }, user, { new: true });
  }
}
