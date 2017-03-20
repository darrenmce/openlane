const promise = require('./call-promise').promise;

promise()
  .then((val) => {
    return 7;
  })
  .then(function (val) { console.log('val is seven', 7 === val); })
  .then((val) => console.log('val is undefined', undefined === val))
  .catch((err) => console.log('hello', err.message === 'hello'))


