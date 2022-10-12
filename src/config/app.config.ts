export const EnvConfiguration =() => ({
  enviroment: process.env.NODE_DEV || 'dev',
  mongodb: process.env.MONGODB,
  port: process.env.PORT || 3002,
  defaultLimit: +process.env.DEFAULT_LIMIT || 7  
}) 