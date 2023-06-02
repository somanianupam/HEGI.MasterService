import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Dialect } from 'sequelize/types';
import { PinCode } from '../entities/pincode.entity';
import { Hospital } from '../entities/hospital.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

@Injectable()
export class DatabaseService {
  constructor(private readonly configService: ConfigService) {}
  get typeOrmConfig() {
    const config: PostgresConnectionOptions = {
      type: 'postgres',
      host: this.configService.get<string>('db.postgres.host'),
      port: this.configService.get<number>('db.postgres.port'),
      username: this.configService.get<string>('db.postgres.username'),
      password: this.configService.get<string>('db.postgres.password'),
      database: this.configService.get<string>('db.postgres.name'),
      entities: [PinCode],
    };
    return config;
  }
}
