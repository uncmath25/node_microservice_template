'use strict';

const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const chai = require('chai');
chai.use(deepEqualInAnyOrder);
const { expect } = chai;

const getResource = require('../../src/service/getResource');
const logger = require('../middleware/logger');

const MOCK_RESOURCE = 'Mock Resource';
const serviceClient = {
  get: async (resourceId) => {
    logger.debug(`Retrieving mock resource from client from resourceId: ${resourceId}`);
    return new Promise((resolve, reject) => {
      setTimeout(() => { resolve(MOCK_RESOURCE); }, 1000);
    });
  }
};

describe('getResource', () => {
  it('should retrieve the correct resource', async () => {
    const resourceId = 1;
    const actualResource = await getResource(logger, serviceClient, resourceId);
    expect(MOCK_RESOURCE).to.deep.equalInAnyOrder(actualResource);
  });
});
