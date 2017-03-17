'use strict';

const assert = require('chai').assert;
const sinon = require('sinon');

describe('user utils', () => {
  const createUserUtils = require('../users.js');
  const mockResources = {};
  const userUtils = createUserUtils(mockResources);

  beforeEach(() => {
    mockResources.getUser = sinon.stub();
  });

  it('returns the name correctly', (done) => {
    mockResources.getUser.yieldsAsync(null, {
      first_name: 'John',
      last_name: 'Smith'
    });
    userUtils.getUserName(4, (err, name) => {
      assert.isNull(err);
      assert.equal(name, 'John Smith');
      done();
    });
  });

  it('handles errors', (done) => {
    mockResources.getUser.yieldsAsync(new Error('oops!'));
    userUtils.getUserName(4, (err) => {
      assert.instanceOf(err, Error);
      assert.equal(err.message, 'oops!');
      done();
    });
  });


});