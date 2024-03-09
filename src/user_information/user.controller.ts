import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Req,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async testingData(): Promise<any> {
    return this.userService.findAll();
  }

  @Post('/')
  async createUser(@Body() user: User): Promise<any> {
    return this.userService.create(user);
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  async loginUser(@Request() req): Promise<any> {
    return this.userService.login(req.user);
  }

  @Put('/')
  @UseGuards(AuthGuard('jwt'))
  async updateUser(@Req() req, @Body() user: User): Promise<any> {
    return this.userService.update(req.user._id, user);
  }
}
