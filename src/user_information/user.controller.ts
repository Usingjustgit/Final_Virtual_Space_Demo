import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Request,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';
import { CustomException } from 'src/exceptions/custom.exception';

@Controller('/api/user')
@UseFilters(CustomException)
export class UserController {
  constructor(private readonly userService: UserService) {}

  // This route for testing the given router is workin or not
  // This is return the Single String
  @Get('/')
  async testingData(): Promise<any> {
    return 'This router is workin properly.';
  }

  // This route for create user new user in the database
  // This is return the created user
  @Post('/')
  async createUser(@Body() user: User): Promise<any> {
    return this.userService.create(user); // This method take one parameter and it is a user object from the user body
  }

  // This route for login user in the database
  // This is return the generated token
  @Post('/login')
  @UseGuards(AuthGuard('local'))
  async loginUser(@Request() req): Promise<any> {
    return this.userService.login(req.user); // This method take one parameter and it is a user object from the auth guard
  }

  // This route for update user in the database
  // This is return the updated user
  @Put('/')
  @UseGuards(AuthGuard('jwt'))
  async updateUser(@Req() req, @Body() user: User): Promise<any> {
    return this.userService.update(req.user._id, user); // This method take two parameter. first one is user id from the token and second is a user object from the jwt verification
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
    return this.userService.getAllLikedMovies(req.user._id);
  }

  // This route for add liked movies
  // This route take a one parameter movie id
  // This is return all liked movies
  @Post('/liked-movies/:movieId')
  @UseGuards(AuthGuard('jwt'))
  async addLikedMovie(
    @Req() req,
    @Param('movieId') movieId: string,
  ): Promise<any> {
    return this.userService.addToLikedMovies(req.user._id, movieId);
  }

  // This route for delete liked movies
  // This route take a one parameter movie id
  // This is return all liked movies
  @Delete('/liked-movies/:movieId')
  @UseGuards(AuthGuard('jwt'))
  async deleteLikedMovie(
    @Req() req,
    @Param('movieId') movieId: string,
  ): Promise<any> {
    return this.userService.removeFromLikedMovies(req.user._id, movieId);
  }
}
