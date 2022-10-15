/* eslint-disable no-restricted-syntax */
const { describe, it } = require('mocha');
const { expect } = require('chai');
const oneai = require('./testClient');

describe('Clustering', () => {
  it('collection', async () => {
    const collection = new oneai.clustering.Collection('test-collection');
    const items = [
      {
        text: 'Can not access account',
      },
      {
        text: 'I cannot access my account',
      },
      {
        text: 'Can not enter my account',
      },
      {
        text: 'Cancel order',
      },
      {
        text: 'I want to cancel my order',
      },
      {
        text: 'How do I cancel my order?',
      },
      {
        text: 'Need help cancelling order',
      },
    ];
    expect(await collection.addItems(items)).to.have.property('status');
  });

  it('getCollections', async () => {
    for await (const collection of oneai.clustering.getCollections({ limit: 2 })) {
      console.log(collection.toJSON());
      for await (const cluster of collection.getClusters({ limit: 1 })) {
        console.log(cluster.toJSON());
      }
    }
  });
});
