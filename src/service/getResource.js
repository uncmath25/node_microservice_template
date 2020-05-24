'use strict';

module.exports = async (logger, serviceClient, resourceId) => {
  logger.debug(`getResource service is retrieving the resource for resourceId: ${resourceId}`);
  return await serviceClient.get(resourceId);
};
