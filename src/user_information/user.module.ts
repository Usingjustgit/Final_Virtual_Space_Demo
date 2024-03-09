import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.entity';
import { AuthModule } from 'src/authentication/auth.module';
import { UserController } from './user.controller';
import { MoviesModule } from 'src/movies_information/movies.module';
import { AdminController } from './admin.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    forwardRef(() => AuthModule),
    forwardRef(() => MoviesModule),
  ],
  controllers: [AdminController, UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
