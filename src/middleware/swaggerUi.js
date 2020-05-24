'use strict';

const swaggerUi = require('swagger-ui-express');

const swaggerUiRoute = `/api/${process.env.API_VERSION}/swagger-ui.html`;

module.exports = (swaggerSpec, app) => {
  app.use(swaggerUiRoute, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
