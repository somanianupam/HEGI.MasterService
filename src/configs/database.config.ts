import { registerAs } from '@nestjs/config';
import { Dialect } from 'sequelize/types';

export default registerAs(
  'database',
  (): Record<string, any> => ({
    dialect: 'postgres' as Dialect,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  }),
);
