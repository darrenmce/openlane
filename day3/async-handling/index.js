const connect = require('./db.js');

function noLibrary() {

  connect((err, conn) => {
    if (err) throw err;
    console.log('connected');

    conn.createTable('demo', (err, msg) => {
      if (err) throw err;
      console.log(msg);

      conn.insertData('some data to be inserted', (err, msg) => {
        if (err) throw err;
        console.log(msg);

        conn.close((err, msg) => {
          if (err) throw err;
          console.log(msg);
        });
      });
    });
  });
}

noLibrary();