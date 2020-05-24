'use strict';

const MOCK_RESOURCE = 'Mock Resource';
const CLIENT_DELAY_MS = 1000;

module.exports = (logger) => {
  return {
    get: async (resourceId) => {
      logger.debug(`Retrieving resource from client for resourceId: ${resourceId}`);
      return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(MOCK_RESOURCE); }, CLIENT_DELAY_MS);
      });
    }
  };
};
