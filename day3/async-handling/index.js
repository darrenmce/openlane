const connect = require('./db.js');
const EventEmitter = require('events');

const logger = new EventEmitter();
logger.on('log', (msg) => { console.log(msg); });

function noLibrary() {

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

noLibrary();