var promise = require('./call-promise').promise;
promise()
    .then(function (val) {
    return 7;
})
    .then(function (val) { console.log('val is seven', 7 === val); })
    .then(function (val) { return console.log('val is undefined', undefined === val); })
    .catch(function (err) { return console.log('hello', err.message === 'hello'); });
//# sourceMappingURL=promise-return-values.js.map