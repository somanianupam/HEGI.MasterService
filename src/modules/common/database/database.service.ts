import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Dialect } from 'sequelize/types';

@Injectable()
export class DatabaseService {
  constructor(private readonly configService: ConfigService) {}
  get sequelizeOrmConfig() {
    return {
      dialect: this.configService.get<string>('database.dialect') as Dialect,
      host: this.configService.get<string>('database.host'),
      port: this.configService.get<number>('database.port'),
      username: this.configService.get<string>('database.username'),
      password: this.configService.get<string>('database.password'),
      database: this.configService.get<string>('database.database'),
      dialectOptions: {
        ssl: this.configService.get<string>('database.ssl'),
        logging: this.configService.get<string>('database.logging'),
      },
    };
  }
}
