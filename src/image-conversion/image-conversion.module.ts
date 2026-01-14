import { Module } from '@nestjs/common';
import { ImageConversionController } from './image-conversion.controller';
import { ImageConversionService } from './image-conversion.service';

@Module({
  controllers: [ImageConversionController],
  providers: [ImageConversionService]
})
export class ImageConversionModule {}
