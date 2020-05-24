'use strict';

const express = require('express');

const handleGetResource = require('./endpoints/getResource');

module.exports = (baseRoute, app, logger, serviceClient) => {
  const router = express.Router();
  handleGetResource(router, logger, serviceClient);
  app.use(baseRoute, router);
  logger.info(`using router with base route: ${baseRoute}`);
};
