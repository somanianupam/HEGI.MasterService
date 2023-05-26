import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Dialect } from 'sequelize/types';

@Injectable()
export class DatabaseService {
  constructor(private readonly configService: ConfigService) {}
  get sequelizeOrmConfig() {
    return {
      dialect: 'postgres' as Dialect,
      host: this.configService.get<string>('db.postgres.host'),
      port: this.configService.get<number>('db.postgres.port'),
      username: this.configService.get<string>('db.postgres.username'),
      password: this.configService.get<string>('db.postgres.password'),
      database: this.configService.get<string>('db.postgres.name'),
      dialectOptions: {
        ssl: this.configService.get<boolean>('db.postgres.ssl'),
        logging: this.configService.get<boolean>('db.postgres.logging'),
      },
    };
  }
}
