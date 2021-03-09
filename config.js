module.exports = {
  api: {
    port: process.env.API_PORT || 3000,

  },
  post: {
    port: process.env.POST_PORT || 3002,
  },
  jwt: {
    secret: process.env.JWT_SECRET || 'notasecret!',
  },
  mysql: {
    host: process.env.MYSQL_HOST || 'remotemysql.com',
    user: process.env.MYSQL_USER || 'f7xRnYJhNS',
    password: process.env.MYSQL_PASS || 'GktuUkY9yz',
    database: process.env.MYSQL_DB || 'f7xRnYJhNS',
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  }
}