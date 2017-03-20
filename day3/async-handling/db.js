const connection = {
  createTable(table, cb) {
    setTimeout(() => {
      cb(null, `table [ ${table} ] created`);
    }, 500);
  },
  insertData(data, cb) {
    setTimeout(() => {
      cb(null, 'Insert OK');
    }, 500);
  },
  close(cb) {
    setTimeout(() => {
      cb(null, 'Connection Closed');
    }, 500);
  }
};

function connect(cb) {
  setTimeout(() => {
    if (Math.random() < 0.4) {
      return cb(new Error('random connection error'));
    }
    cb(null, connection)
  }, 500);
}

module.exports = connect;

