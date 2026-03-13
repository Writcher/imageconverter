import { Module } from '@nestjs/common';
import { BarcodeReaderService } from './barcode-reader.service';
import { BarcodeReaderController } from './barcode-reader.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Panel } from './entities/paneles.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Panel])
  ],
  controllers: [BarcodeReaderController],
  providers: [BarcodeReaderService],
})
export class BarcodeReaderModule {}
