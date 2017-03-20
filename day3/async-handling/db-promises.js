const Promise = require('bluebird');

const connection = {
  createTable(table) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`table [ ${table} ] created`);
      }, 500);
    });
  },
  insertData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Insert OK');
      }, 500);
    });
  },
  close() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Connection Closed');
      }, 500);
    });
  }
};

function connect() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.3) {
        return reject(new Error('random connection failure'));
      }
      resolve(connection);
    }, 500);
  });
}

module.exports = connect;

