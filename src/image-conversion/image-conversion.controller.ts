import { 
  Controller, 
  Post, 
  Body, 
  HttpException, 
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  UseGuards
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImageConversionService } from './image-conversion.service';
import { ApiKeyGuard } from '../auth/api-key.guard';
import { IsNotEmpty, IsString } from 'class-validator';

export class ConvertImageDto {
    @IsNotEmpty()
    @IsString()
    image: string;
};

@Controller('api/image')
@UseGuards(ApiKeyGuard)
export class ImageConversionController {
    constructor(private readonly imageConversionService: ImageConversionService) {}

    @Post('convert-to-png')
    async convertToPng(@Body() body: ConvertImageDto) {
        try {
            if (!body.image) {
                throw new HttpException('Se requiere una imagen', HttpStatus.BAD_REQUEST);
            };

            const pngBase64 = await this.imageConversionService.convertJpegToPng(body.image);

            return {
                success: true,
                png: pngBase64,
                message: 'Converción exitosa'
            };
        } catch (error) {
            throw new HttpException(
                error.message || 'Fallo al convertir imágen',
                HttpStatus.INTERNAL_SERVER_ERROR
            );
        };
    };
};
