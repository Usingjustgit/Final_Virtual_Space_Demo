import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from 'src/user_information/user.service';
import { Model } from 'mongoose';
import { Photo, PhotoDocument } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectModel(Photo.name)
    private readonly photoModel: Model<PhotoDocument>,
    private readonly userService: UserService,
  ) {}

  /**
   * This method get all videos
   * @returns Promise<Photo[]> - A promise resolving to an array of videos
   */
  async getAllPrivatePhoto(userId: string): Promise<Photo[]> {
    try {
      return await this.photoModel.find({ user_id: userId });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async getAllPhotos(): Promise<Photo[]> {
    try {
      return await this.photoModel.find();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async getPhotoById(_id: string): Promise<Photo> {
    try {
      return await this.photoModel.findById({ _id }).populate('user_id');
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async uploadPhotoInfo(email: string, PhotoInfo: Photo) {
    try {
      const { photo_title, photo_description, photo_url, isPublic } = PhotoInfo;
      const user = await this.userService.findUserByEmail(email);
      const video_id = await new this.photoModel({
        photo_title,
        photo_description,
        photo_url,
        isPublic,
        user_id: user._id,
      }).save();
      user.videos.push(String(video_id._id));
      await user.save();
      return 'video uploaded successfully';
    } catch (error) {
      throw new Error(error);
    }
  }

  async updatePhotoInfo(doc_id: string, PhotoInfo: Photo) {
    try {
      const photo = await this.photoModel.findByIdAndUpdate(
        { _id: doc_id },
        {
          $set: {
            photo_title: PhotoInfo.photo_title,
            photo_description: PhotoInfo.photo_description,
            photo_url: PhotoInfo.photo_url,
            isPublic: PhotoInfo.isPublic,
          },
        },
      );
      await photo.save();
      return 'Photo updated successfully';
    } catch (error) {
      throw new Error(error);
    }
  }

  async deletePhotoInfo(user_email: string, photo_id: string) {
    try {
      const currentUser = await this.userService.findUserByEmail(user_email);
      if (!currentUser) {
        throw new Error('User not found');
      }
      currentUser.documents.filter((photo) => {
        if (photo != photo_id) {
          return photo;
        }
      });
      await currentUser.save();
      return await this.photoModel.findByIdAndDelete({ _id: photo_id });
    } catch (error) {
      throw new Error(error);
    }
  }
}
