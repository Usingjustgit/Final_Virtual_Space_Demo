import {
  Controller,
  Delete,
  Get,
  Param,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from '@nestjs/passport';
import { RoleGaurd } from 'src/authentication/auth.rolegaurd';
import { CustomException } from 'src/exceptions/custom.exception';

@Controller('/api/admin')
@UseFilters(CustomException)
@UseGuards(AuthGuard('jwt'), new RoleGaurd())
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
