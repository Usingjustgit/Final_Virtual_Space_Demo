import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserService } from 'src/user_information/user.service';
import { Model } from 'mongoose';
import { Music, MusicDocument } from './music.entity';

@Injectable()
export class MusicService {
  constructor(
    @InjectModel(Music.name)
    private readonly musicModel: Model<MusicDocument>,
    private readonly userService: UserService,
  ) {}

  /**
   * This method get all videos
   * @returns Promise<Music[]> - A promise resolving to an array of videos
   */
  async getAllPrivateMusic(userId: string): Promise<Music[]> {
    try {
      return await this.musicModel.find({ user_id: userId });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async getAllMusic(): Promise<Music[]> {
    try {
      return await this.musicModel.find();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async getMusicById(_id: string): Promise<Music> {
    try {
      return await this.musicModel.findById({ _id }).populate('user_id');
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async uploadMusicInfo(email: string, MusicInfo: Music) {
    try {
      const { music_title, music_description, music_url, isPublic } = MusicInfo;
      const user = await this.userService.findUserByEmail(email);
      const video_id = await new this.musicModel({
        music_title,
        music_description,
        music_url,
        isPublic,
        user_id: user._id,
      }).save();
      user.videos.push(String(video_id._id));
      await user.save();
      return 'Music uploaded successfully';
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateMusicInfo(music_id: string, PhotoInfo: Music) {
    try {
      const music = await this.musicModel.findByIdAndUpdate(
        { _id: music_id },
        {
          $set: {
            music_title: PhotoInfo.music_title,
            music_description: PhotoInfo.music_description,
            music_url: PhotoInfo.music_url,
            isPublic: PhotoInfo.isPublic,
          },
        },
      );
      await music.save();
      return 'Music updated successfully';
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteMusicInfo(user_email: string, music_id: string) {
    try {
      const currentUser = await this.userService.findUserByEmail(user_email);
      if (!currentUser) {
        throw new Error('User not found');
      }
      currentUser.musics.filter((music) => {
        if (music != music_id) {
          return music;
        }
      });
      await currentUser.save();
      return await this.musicModel.findByIdAndDelete({ _id: music_id });
    } catch (error) {
      throw new Error(error);
    }
  }
}
