import { Controller, Get, UseFilters } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CustomException } from 'src/exceptions/custom.exception';

@Controller('/api/category')
@UseFilters(CustomException)
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  //========================= PUBLIC CONTROLLER ===========================

  @Get('/')
  async getAllCategory() {
    return await this.categoryService.getAllCategory();
  }
}
