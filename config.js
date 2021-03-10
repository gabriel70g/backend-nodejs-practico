module.exports = {
  remoteDB: process.env.REMOTE_DB || false,
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
    host: process.env.MYSQL_HOST || '',
    user: process.env.MYSQL_USER || 'f7xRnYJhNS',
    password: process.env.MYSQL_PASS || 'GktuUkY9yz',
    database: process.env.MYSQL_DB || 'f7xRnYJhNS',
  },
  mysqlService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3001,
  }, 

  cacheService: {
    host: process.env.MYSQL_SRV_HOST || 'localhost',
    port: process.env.MYSQL_SRV_PORT || 3003,
  },
  redis : {
    host: process.env.REDIS_HOST || "redis-16202.c241.us-east-1-4.ec2.cloud.redislabs.com",
    port: process.env.REDIS_PORT || "16202",
    password:process.env.REDIS.PASS || "HQa4xdnIiwItfBTrKK0nylA6lXahoyfd"    
  }
}