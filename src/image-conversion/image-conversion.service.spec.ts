import { Test, TestingModule } from '@nestjs/testing';
import { ImageConversionService } from './image-conversion.service';

describe('ImageConversionService', () => {
  let service: ImageConversionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageConversionService],
    }).compile();

    service = module.get<ImageConversionService>(ImageConversionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
