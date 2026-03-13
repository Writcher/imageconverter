import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ImageConversionModule } from './image-conversion/image-conversion.module';
import { BarcodeReaderModule } from './barcode-reader/barcode-reader.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: configService.get('MSSQL_DB_HOST'),
        port: parseInt(configService.get('MSSQL_DB_PORT') || '1433', 10),
        username: configService.get('MSSQL_DB_USERNAME'),
        password: configService.get('MSSQL_DB_PASSWORD'),
        database: configService.get('MSSQL_DB_DATABASE'),
        entities: [__dirname + '/modules/mssql/**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: false,
        options: {
          encrypt: true,
          trustServerCertificate: true,
        },
      })
    }),
    ImageConversionModule,
    BarcodeReaderModule,
  ],
})
export class AppModule {}
