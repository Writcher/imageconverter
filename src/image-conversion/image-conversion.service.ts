import { Injectable } from '@nestjs/common';
import sharp from 'sharp';

@Injectable()
export class ImageConversionService {
    async convertJpegToPng(base64Image: string): Promise<string> {
        try {
            const base64Data = base64Image.replace(/^data:image\/\w+;base64,/, '');

            const imageBuffer = Buffer.from(base64Data, 'base64');

            const pngBuffer = await sharp(imageBuffer)
                .png()
                .toBuffer();

            return pngBuffer.toString('base64');
        } catch (error) {
            throw new Error(`Converción fallida: ${error.message}`)
        };
    };  
};
