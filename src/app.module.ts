import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ImageConversionModule } from './image-conversion/image-conversion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ImageConversionModule,
  ],
})
export class AppModule {}
