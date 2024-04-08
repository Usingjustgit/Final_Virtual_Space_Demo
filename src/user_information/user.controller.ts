import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UploadedFile,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';

export type Passwords = {
  oldPassword: string;
  newPassword: string;
};

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // This route for testing the given router is workin or not
  // This is return the Single String
  @Get('/')
  @UseGuards(AuthGuard('jwt'))
  async getAllUsers(): Promise<any> {
    return this.userService.getAllUsers();
  }

  // This route for create user new user in the database
  // This is return the created user
  @Post('/register')
  async createUser(@Body() user: User): Promise<any> {
    return this.userService.create(user); // This method take one parameter and it is a user object from the user body
  }

  // This route for login user in the database
  // This is return the generated token
  @Post('/login')
  @UseGuards(AuthGuard('local'))
  async loginUser(@Req() req): Promise<any> {
    console.log('User comming here to checking login :', req.user);
    return this.userService.login(req.user); // This method take one parameter and it is a user object from the auth guard
  }

  // This route for update user in the database
  // This is return the updated user
  @Put('/')
  @UseGuards(AuthGuard('jwt'))
  async updateUser(@Req() req, @Body() user: User): Promise<any> {
    return this.userService.update(req.user._id, user); // This method take two parameter. first one is user id from the token and second is a user object from the jwt verification
  }

  // This route for change password on the database
  // This is return the updated user
  @Put('/change-password')
  @UseGuards(AuthGuard('jwt'))
  async changePassword(@Req() req, @Body() Passwords: Passwords): Promise<any> {
    return this.userService.changePassword(req.user._id, Passwords);
  }

  // This route for delete user in the database
  // This is return the deleted user
  @Delete('/')
  @UseGuards(AuthGuard('jwt'))
  async deleteUser(@Req() req): Promise<any> {
    return this.userService.deleteUser(req.user._id);
  }

  // This route for get all liked movies
  // This is return all liked movies
  @Get('/liked-movies')
  @UseGuards(AuthGuard('jwt'))
  async getLikedMovies(@Req() req): Promise<any> {
    return Promise.all(await this.userService.getAllLikedMovies(req.user._id));
  }

  // This route for add liked movies
  // This route take a one parameter movie id
  // This is return all liked movies
  @Post('/liked-movies')
  @UseGuards(AuthGuard('jwt'))
  async addLikedMovie(
    @Req() req,
    @Body('movieId') movieId: string,
  ): Promise<any> {
    return this.userService.addToLikedMovies(req.user._id, movieId);
  }

  // This route for delete liked movies
  // This route take a one parameter movie id
  // This is return all liked movies
  @Delete('/liked-movies')
  @UseGuards(AuthGuard('jwt'))
  async deleteLikedMovie(
    @Req() req,
    @Param('movieId') movieId: string,
  ): Promise<any> {
    return this.userService.removeFromLikedMovies(req.user._id, movieId);
  }

  // This route for delete all liked movies
  // This is return string message
  @Delete('/liked-movies/all')
  @UseGuards(AuthGuard('jwt'))
  async deleteAllLikedMovies(@Req() req): Promise<any> {
    return this.userService.deleteAllLikedMovies(req.user._id);
  }
}
