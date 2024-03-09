import {
  BadRequestException,
  Body,
  Controller,
  Get,
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
    return this.userService.findAll();
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
}
