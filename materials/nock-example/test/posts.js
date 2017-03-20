"use strict";

const createPostHandler = require('../posts.js');
const assert = require('chai').assert;
const nock = require('nock');

describe('post handler tests', () => {
  const baseUrl = 'http://example.com';
  let postHandler;
  beforeEach(() => {
    postHandler = createPostHandler(baseUrl);
  });

  before(() => {
    nock.disableNetConnect();
  });

  after(() => {
    nock.enableNetConnect();
  });

  it('should hit the correct endpoint and return json', (done) => {
    nock(baseUrl)
      .get('/posts/5')
      .reply(200, {
        data: 'hello'
      });

    postHandler.getPost(5, (err, post) => {
      assert.deepEqual(post, { data: 'hello' });
      done(err);
    });
  });

  it('should forward http errors to the callback', (done) => {
    nock(baseUrl)
      .get('/posts/5')
      .reply(500, 'oops!');

    postHandler.getPost(5, (err) => {
      assert.instanceOf(err, Error);
      assert.equal(err.message, 'Bad Response');
      assert.equal(err.body, 'oops!');
      done();
    });
  });

  it('should forward transport errors to the callback', (done) => {
    nock(baseUrl)
      .get('/posts/5')
      .replyWithError(new Error('transport error!'));

    postHandler.getPost(5, (err) => {
      assert.instanceOf(err, Error);
      assert.equal(err.message, 'transport error!');
      done();
    });
  });


});