'use strict';

const resources = require('./resources.js');
const createUserUtils = require('./users.js');

const userUtils = createUserUtils(resources);

userUtils.getUserName(4, (err, name) => {
  if (err) {
    return console.log('Error fetching the user name');
  }
  console.log(`User's Name: ${name}`);
});