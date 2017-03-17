const createUserLib = require('./users.js');
const resources = require('./resources.js');

const userLib = createUserLib(resources);

userLib.getName(3, (err, name) => {
  if (err) {
    console.log('got an error!', err.message);
    return;
  }
  console.log('got name', name);
});

