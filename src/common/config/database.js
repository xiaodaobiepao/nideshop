const mysql = require('think-model-mysql');

module.exports = {
  handle: mysql,
  database: 'nideshop',
  prefix: 'nideshop_',
  encoding: 'utf8mb4',
  host: 'process.env.MYSQL_HOST',
  port: 'process.env.MYSQL_PORT',
  user: 'process.env.ACCESSKEY',
  password: 'process.envSECRETKEY',
  dateStrings: true
};
