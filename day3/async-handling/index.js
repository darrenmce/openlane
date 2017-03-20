const EventEmitter = require('events');

const logger = new EventEmitter();
logger.on('log', (msg) => { console.log(msg); });
logger.on('error', (err) => { console.log(err.message); });

function noLibrary() {
  const connect = require('./db.js');

  connect((err, conn) => {
    if (err) throw err;
    logger.emit('log', 'connected');

    conn.createTable('demo', (err, msg) => {
      if (err) throw err;
      logger.emit('log', msg);

      conn.insertData('some data to be inserted', (err, msg) => {
        if (err) throw err;
        logger.emit('log', msg);

        conn.close((err, msg) => {
          if (err) throw err;
          logger.emit('log', msg);
        });
      });
    });
  });
}

const Promise = require('bluebird');

function log(message) {
  logger.emit('log', message);
}

function promises() {
  const connect = require('./db-promises.js');

  connect()
    .then((conn) => {
      log('connected');
      return conn.createTable('demo')
        .then(log)
        .then(() => conn.insertData('some data'))
        .then(log)
        .then(() => conn.close())
        .then(log)
    })
    .catch((err) => {
      logger.emit('error', err);
    });
}

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

//noLibrary();
promises();