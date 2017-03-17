'use strict';

const assert = require('chai').assert;
const sinon = require('sinon');

describe('user lib tests', () => {

  const createUserLib = require('../users.js');
  const mockResource = {};
  const userLib = createUserLib(mockResource);
  beforeEach(() => {
    mockResource.getUser = sinon.stub();
  });

  it('should return the name of a user', (done) => {
    mockResource.getUser.yieldsAsync(null, {
      first_name: 'Darren',
      last_name: 'Smith'
    });
    userLib.getName(3, (err, name) => {
      assert.equal(name, 'Darren Smith');
      done(err);
    });
  });

  it('should forward the error from getUser', (done) => {
    mockResource.getUser.yieldsAsync(new Error('oops!'));
    userLib.getName(3, (err, name) => {
      assert.instanceOf(err, Error);
      assert.equal(err.message, 'oops!');
      done();
    });
  });

  it('should return error if no last name', (done) => {
    mockResource.getUser.yieldsAsync(null, {
      first_name: 'Darren'
    });
    userLib.getName(3, (err, name) => {
      assert.instanceOf(err, Error);
      assert.equal(err.message, 'No last name');
      done();
    });
  }); 

});
