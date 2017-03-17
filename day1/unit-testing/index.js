const userLib = require('./users.js');

userLib.getName(3, (err, name) => {
  if (err) {
    console.log('got an error!', err.message);
    return;
  }
  console.log('got name', name);
});

