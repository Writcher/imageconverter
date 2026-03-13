import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { BarcodeReaderService } from './barcode-reader.service';
import { IsNotEmpty, IsString } from 'class-validator';
import { ApiKeyGuard } from 'src/auth/api-key.guard';

export class PanelEscaneado {
  @IsNotEmpty()
  @IsString()
  tracker: string;

  @IsNotEmpty()
  @IsString()
  panel: string;
};

@Controller('barcodereader')
@UseGuards(ApiKeyGuard)
export class BarcodeReaderController {
  constructor(private readonly barcodereaderService: BarcodeReaderService) { }

  @Post()
  async registerPanel(@Body() body: PanelEscaneado) {
    return this.barcodereaderService.createPanel(body);
  };
};
