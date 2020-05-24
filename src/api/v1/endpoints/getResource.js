'use strict';

const getResource = require('../../../service/getResource');

const ROUTE_NAME = '/getResource/:resourceId';

module.exports = (app, logger, serviceClient) => {
  app.get(ROUTE_NAME, async (req, res) => {
    try {
      const { resourceId } = req.params;
      logger.debug(`getResource router received a request for resourceId: ${resourceId}`);
      const resource = await getResource(logger, serviceClient, resourceId);
      if (resource === null) {
        res.status(404).json({description: `No resource was found for resourceId: ${resourceId}`});
      } else {
        res.status(200).json({data: resource});
      }
    } catch (err) {
      logger.error(err);
      res.status(500).json({description: 'Server failure'});
    }
  });
};
