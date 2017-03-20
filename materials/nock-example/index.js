"use strict";

const createPostHandler = require('./posts.js');

const postHandler = createPostHandler('https://jsonplaceholder.typicode.com');

postHandler.getPost(4, (err, post) => {
  console.log(post);
});