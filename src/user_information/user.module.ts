import { Module, forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './user.entity';
import { AuthModule } from 'src/authentication/auth.module';
import { UserController } from './user.controller';
import { AdminController } from './admin.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    forwardRef(() => AuthModule),
  ],
  controllers: [AdminController, UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
