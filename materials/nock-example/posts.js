// curl https://jsonplaceholder.typicode.com/posts/1
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
"use strict";

const request = require('request');

function createPostsHandler(baseUrl) {

  function getPost(postId, cb) {
    request(`${baseUrl}/posts/${postId}`, { json: true }, (err, response, body) => {
      if (err) {
        return cb(err);
      }
      if (response.statusCode >= 400) {
        const httpStatusError = new Error('Bad Response');
        httpStatusError.body = body;
        return cb(httpStatusError);
      }
      cb(null, body);
    });
  }


  return {
    getPost
  }
}


module.exports = createPostsHandler;