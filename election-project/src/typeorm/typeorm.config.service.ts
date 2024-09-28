import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import type {
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      autoLoadEntities: true,
      database: this.configService.get('SELLER_DB_NAME', 'sellerdb'),
      host: this.configService.get('SELLER_DB_HOST', 'localhost'),
      logging:
        this.configService.get('SELLER_DB_LOGGING', 'false') === 'true'
          ? ['error', 'migration']
          : false,
      password: this.configService.get('SELLER_DB_PASSWORD', 'password'),
      port: parseInt(this.configService.get('SELLER_DB_PORT', '5432'), 10),
      synchronize: true,
      type: 'postgres',
      username: this.configService.get('SELLER_DB_USERNAME', 'postgres'),
    };
  }
}
