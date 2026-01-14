import { Test, TestingModule } from '@nestjs/testing';
import { ImageConversionController } from './image-conversion.controller';

describe('ImageConversionController', () => {
  let controller: ImageConversionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageConversionController],
    }).compile();

    controller = module.get<ImageConversionController>(ImageConversionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
