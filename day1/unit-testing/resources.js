'use strict';

const userData = require('./assets/users.json');
const userDataById = userData.reduce((users, next) => {
  users[next.id] = next;
  return users;
}, {});

function randomDelay() {
  //0 to 2 second delay
  return Math.random() * 2000;
}

function randomError() {
  // 20% error chance
  return Math.random() <= 0.2 ? new Error('Error fetching resource') : null;
}

function getUser(id, callback) {
  setTimeout(() => {
    callback(randomError(), userDataById[id])
  }, randomDelay());
}

module.exports = {
  getUser
};
