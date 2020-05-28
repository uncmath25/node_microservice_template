'use strict';

const expressPino = require('express-pino-logger');
const pino = require('pino');

module.exports = (app) => {
  const logger = pino({
    level: process.env.LOG_LEVEL,
    prettyPrint: {
      colorize: true,
      translateTime: true
    }
  });
  app.use(expressPino({ logger }));
  return logger;
};
