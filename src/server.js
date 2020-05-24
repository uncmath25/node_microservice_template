'use strict';

const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require(`../docs/${process.env.API_VERSION}/swagger.json`);
const useRouter = require(`./api/${process.env.API_VERSION}/router.js`);
const buildServiceClient = require('./client/service');
const buildLogger = require('./middleware/logger');
const serverSwaggerUi = require('./middleware/swaggerUi');

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const logger = buildLogger(app);
serverSwaggerUi(swaggerSpec, app);

// injectables
const serviceClient = buildServiceClient(logger);

// routing
useRouter(`/api/${process.env.API_VERSION}`, app, logger, serviceClient);

app.listen(process.env.PORT, () => logger.info(`Node Express server is running env: ${process.env.ENV} on port: ${process.env.PORT}`));
