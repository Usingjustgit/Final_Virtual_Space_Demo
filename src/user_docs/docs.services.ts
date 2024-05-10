import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Docs, DocsDocument } from './docs.entity';
import { UserService } from 'src/user_information/user.service';
import { Model } from 'mongoose';

@Injectable()
export class DocsService {
  constructor(
    @InjectModel(Docs.name)
    private readonly docsModel: Model<DocsDocument>,
    private readonly userService: UserService,
  ) {}

  /**
   * This method get all videos
   * @returns Promise<Docs[]> - A promise resolving to an array of videos
   */
  async getAllPrivateDocs(userId: string): Promise<Docs[]> {
    try {
      return await this.docsModel.find({ user_id: userId });
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async getAllDocs(): Promise<Docs[]> {
    try {
      return await this.docsModel.find();
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async getDocById(_id: string): Promise<Docs> {
    try {
      return await this.docsModel.findById({ _id }).populate('user_id');
    } catch (error) {
      throw new NotFoundException(error);
    }
  }

  async uploadDocInfo(email: string, DocInfo: Docs) {
    try {
      const { docs_title, docs_description, docs_url, isPublic } = DocInfo;
      const user = await this.userService.findUserByEmail(email);
      const video_id = await new this.docsModel({
        docs_title,
        docs_description,
        docs_url,
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

  async updateDocsInfo(doc_id: string, DocInfo: Docs) {
    try {
      const document = await this.docsModel.findByIdAndUpdate(
        { _id: doc_id },
        {
          $set: {
            docs_title: DocInfo.docs_title,
            docs_description: DocInfo.docs_description,
            docs_url: DocInfo.docs_url,
            isPublic: DocInfo.isPublic,
          },
        },
      );
      await document.save();
      return 'Document updated successfully';
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteDocsInfo(user_email: string, doc_id: string) {
    try {
      const currentUser = await this.userService.findUserByEmail(user_email);
      if (!currentUser) {
        throw new Error('User not found');
      }
      currentUser.documents.filter((doc) => {
        if (doc != doc_id) {
          return doc;
        }
      });
      await currentUser.save();
      return await this.docsModel.findByIdAndDelete({ _id: doc_id });
    } catch (error) {
      throw new Error(error);
    }
  }
}
