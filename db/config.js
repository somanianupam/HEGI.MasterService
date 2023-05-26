const yaml = require('js-yaml');
const fs   = require('fs');
const path = require('path')

const dev_config = yaml.load(fs.readFileSync(path.join('configs', 'development.config.yaml'), 'utf8'));
module.exports = {
    "development": {
        "username": dev_config.db.postgres.username,
        "password": dev_config.db.postgres.password,
        "database": dev_config.db.postgres.name,
        "host": dev_config.db.postgres.host,
        "dialect": 'postgres',
        "port": parseInt(dev_config.db.postgres.port, 10) || 5432,
    },
    "test": {
        "username": dev_config.db.postgres.username,
        "password": dev_config.db.postgres.password,
        "database": dev_config.db.postgres.name,
        "host": dev_config.db.postgres.host,
        "dialect": 'postgres',
        "port": parseInt(dev_config.db.postgres.port, 10) || 5432,
    },
    "production": {
        "username": dev_config.db.postgres.username,
        "password": dev_config.db.postgres.password,
        "database": dev_config.db.postgres.name,
        "host": dev_config.db.postgres.host,
        "dialect": 'postgres',
        "port": parseInt(dev_config.db.postgres.port, 10) || 5432,
    }
}
