const asyncFn = require('./mock-lib-promise').asyncFn;

asyncFn(5, 1)
  .then((val) => console.log(`Value ${val} should be 6: ${val === 6}`))
  .catch((err) => console.log(`this should not happen: ${err.message}`))
