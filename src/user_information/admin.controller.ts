import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/api/admin')
@UseGuards(AuthGuard('jwt'))
export class AdminController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getAllUsers(): Promise<any> {
    return await this.userService.getAllUsers();
  }

  @Delete('/:id')
  async deleteUser(@Param('id') user_id: string): Promise<any> {
    return await this.userService.deleteUser(user_id);
  }
}
