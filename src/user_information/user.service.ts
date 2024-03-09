import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  /* ============================ Internal Use Controllers ============================ */

  // This method return all user by email
  async findUserByEmail(email: string): Promise<any> {
    try {
      return await this.userModel.findOne({ email }); // Find user by email into the database
    } catch (error) {
      throw new NotFoundException('user not found');
    }
  }

  /* ============================ Normal User Controllers ============================ */

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
      return { status: 201, massage: 'User created successfully' }; // Return the created user without the password
    } catch (err) {
      throw new BadRequestException(err);
    }
  }

  // This method is take a user object and that object based on generate token
  // return that generated token
  // This method end point is .....
  // @Post("/api/user/login")
  async login(user: User): Promise<any> {
    try {
      const token = await this.authService.generateToken(user); // This method is used to generate token from authService class
      return token;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  // This method update a user based on id
  // In this user id get from it token so user must need to login to update it
  // return the updated user
  // This method end point is .....
  // @Put("/api/user/:id")
  async update(id: string, user: User): Promise<User> {
    return this.userModel.findByIdAndUpdate({ _id: id }, user, { new: true });
  }

  // This method delete a user based on id
  // In this user id get from it token so user must need to login to delete it
  // This method end point is .....
  // @Delete("/api/user/:id")
  async deleteUser(id: string): Promise<any> {
    try {
      if (!(await this.userModel.findById(id))) {
        throw new NotFoundException('user not found');
      } // if user not found then throw the error
      await this.userModel.findByIdAndDelete({ _id: id });
      return 'User deleted successfully'; // This method is used to delete a user based on id
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method change password
  // In this user id get from it token so user must need to login to change password
  // return the updated user
  // This method end point is .....
  // @Put("/api/user/change-password/:id")
  async changePassword(
    id: string,
    oldPassword: string,
    password: string,
  ): Promise<any> {
    try {
      if (
        !(await bcrypt.compare(
          oldPassword,
          (await this.userModel.findById(id)).password,
        ))
      ) {
        throw new BadRequestException('password is not correct');
      } // Check if old password is correct or not if not correct then throw the error.
      return this.userModel.findByIdAndUpdate(
        { _id: id },
        { password: await bcrypt.hash(password, 10) },
        { new: true },
      ); // If OldPassword is correct then update the new password with hash password
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method return all liked movies
  // This method find the liked movies based on the user id
  // This method end point is .....
  // @Get("/api/user/liked-movies/:id")
  async getAllLikedMovies(id: string): Promise<any> {
    try {
      return (await this.userModel.findById(id)).likedMovies; // This method is used to get all liked movies
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method add movie to liked movies
  // This method also check the user alrady like the movie or not if alrdy liked then throw the error.
  // This method end point is .....
  // @Post("/api/user/liked-movies/:id")
  async addToLikedMovies(id: string, movieId: string): Promise<any> {
    try {
      const user = await this.userModel.findById(id); // find the user from the database
      if (user.likedMovies.includes(movieId)) {
        throw new BadRequestException('movie already liked');
      } // if the movie is already liked then throw the error
      return await this.userModel.findByIdAndUpdate(
        { _id: id },
        { $push: { likedMovies: movieId } },
        { new: true },
      ); // if the movie is not liked then add it to the liked movies
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method remove movie from liked movies
  // Thid method also check the user liked the movie or not if not liked then throw the error
  // This method end point is .....
  // @Delete("/api/user/liked-movies/:id")
  async removeFromLikedMovies(id: string, movieId: string): Promise<any> {
    try {
      const user = await this.userModel.findById(id);
      if (!user.likedMovies.includes(movieId)) {
        throw new BadRequestException('movie not liked');
      } // if the movie is not liked then throw the error
      return await this.userModel.findByIdAndUpdate(
        { _id: id },
        { $pull: { likedMovies: movieId } },
        { new: true },
      ); // if the movie is liked then remove it from the liked movies
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  /* ======================= Admin Controller ======================= */

  // This method return a user based on id
  // This method end point is .....
  // @Get("/api/user/:id")
  async findOne(email: string): Promise<User> {
    try {
      return this.userModel.findOne({ email }).exec(); // This method is used to find a user based on email
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method return all users
  // Also this method is only for admin so this method is not access for normal user
  // This method end point is .....
  // @Get("/api/admin/users")
  async getAllUsers(): Promise<any> {
    try {
      return this.userModel.find({ isAdmin: false }); // This method return all users from the database only users not admins
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  // This method return a user based on id
  // Also this method is only for admin so this method is not access for normal user
  // This method end point is .....
  // @Get("/api/admin/users/:id")
  async deleteUserById(id: string): Promise<any> {
    try {
      return this.userModel.findByIdAndDelete({ _id: id }); // This method is used to delete a user based on id
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
