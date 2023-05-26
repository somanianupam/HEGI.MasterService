require('dotenv').config()
module.exports = {
    "development": {
        "username":  process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DATABASE_NAME,
        "host": process.env.DATABASE_HOST,
        "dialect": 'postgres',
        "port": parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
    "test": {
        "username":  process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DATABASE_NAME,
        "host": process.env.DATABASE_HOST,
        "dialect": 'postgres',
        "port": parseInt(process.env.DATABASE_PORT, 10) || 5432,
    },
    "production": {
        "username":  process.env.DATABASE_USER,
        "password": process.env.DATABASE_PASSWORD,
        "database": process.env.DATABASE_NAME,
        "host": process.env.DATABASE_HOST,
        "dialect": 'postgres',
        "port": parseInt(process.env.DATABASE_PORT, 10) || 5432,
    }
}
