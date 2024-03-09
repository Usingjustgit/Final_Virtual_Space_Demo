import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Cast, castSchema } from './cast.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cast.name, schema: castSchema }]),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class CastModule {}
