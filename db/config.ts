import { Dialect } from 'sequelize/types';

module.exports = {
  dialect: 'postgres' as Dialect,
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'nest',
  logging: false,
};
