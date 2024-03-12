import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Category, CategoryDocument } from './category.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<CategoryDocument>,
  ) {}

  //============================= PUBLIC CATEGORY API ============================

  //This method return all category
  // This method end point is ..…
  // @Get('/api/category')
  async getAllCategory(): Promise<any> {
    try {
      return await this.categoryModel.find().exec();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  //This method return a category based on id
  // This method end point is ..：
  // @Get('/api/category/:id')
  async getCategoryById(id: string): Promise<any> {
    try {
      return await this.categoryModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  //============================= ADMIN CATEGORY API ============================

  //This method create a category
  // This method end point is ..
  // @Post('/api/admin/category')
  async createCategory(data: any): Promise<any> {
    try {
      return await this.categoryModel.create(data);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  //This method update a category
  // This method end point is ..
  // @Put('/api/admin/category/:id')
  async updateCategory(id: string, data: any): Promise<any> {
    try {
      return await this.categoryModel.findByIdAndUpdate({ _id: id }, data);
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  //This method delete a category
  // This method end point is ..
  // @Delete('/api/admin/category/:id')
  async deleteCategory(id: string): Promise<any> {
    try {
      return await this.categoryModel.findByIdAndDelete({ _id: id });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  //This method delete all category
  // This method end point is ..
  // @Delete('/api/admin/category')
  async deleteAllCategory(): Promise<any> {
    try {
      return await this.categoryModel.deleteMany({});
    } catch (error) {
      throw new NotFoundException(error);
    }
  }
}
