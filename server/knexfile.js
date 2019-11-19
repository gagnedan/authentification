require('dotenv').config();

module.exports = {
  development: {
    client: 'oracledb',
    connection: {
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    fetchAsString: ['number', 'clob'],
    pool: {
      min: 0,
      max: 7
    },
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  testing: {
    client: 'oracledb',
    connection: {
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    fetchAsString: ['number', 'clob'],
    pool: {
      min: 0,
      max: 7
    },
    seeds: {
      directory: './data/seeds'
    },
  },

  production: {
    client: 'oracledb',
    connection: {
      port: process.env.DATABASE_PORT,
      host: process.env.DATABASE_HOST,
      database: process.env.DATABASE_NAME,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    fetchAsString: ['number', 'clob'],
    pool: {
      min: 0,
      max: 7
    },
    seeds: {
      directory: './data/seeds'
    },
  },
};