import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CustomException } from 'src/exceptions/custom.exception';
import { AuthGuard } from '@nestjs/passport';
import { RoleGaurd } from 'src/authentication/auth.rolegaurd';

@Controller('/api/category')
@UseFilters(CustomException)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  //========================= PUBLIC CONTROLLER ===========================

  // This router return all category
  @Get('/')
  async getAllCategory() {
    return await this.categoryService.getAllCategory();
  }

  // This router return a category based on id
  // This router take id from url
  @Get('/:id')
  async getCategoryById(id: string) {
    return await this.categoryService.getCategoryById(id);
  }

  //========================= ADMIN CONTROLLER ===========================

  // This router is for create category
  // This router take data from body as title
  // And return the created category or string
  @Post('/')
  @UseGuards(AuthGuard('jwt'), new RoleGaurd())
  async createCategory(@Body() data: any) {
    return await this.categoryService.createCategory(data);
  }

  // This router is for update category
  // This router take id from url
  // And return the updated category or string
  @Put('/:id')
  @UseGuards(AuthGuard('jwt'), new RoleGaurd())
  async updateCategory(@Param('id') id: string, @Body() data: any) {
    return await this.categoryService.updateCategory(id, data);
  }

  // This router is for delete category
  // This router take id from url
  // And return the deleted category or string
  @Delete('/:id')
  @UseGuards(AuthGuard('jwt'), new RoleGaurd())
  async deleteCategory(@Param('id') id: string) {
    return await this.categoryService.deleteCategory(id);
  }

  // This router is for delete all category
  // And return the string if delete successfull else error
  @Delete('/')
  @UseGuards(AuthGuard('jwt'), new RoleGaurd())
  async deleteAllCategory() {
    return await this.categoryService.deleteAllCategory();
  }
}
