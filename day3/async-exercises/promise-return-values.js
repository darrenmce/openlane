function promise() {
  return new Promise((resolve) => {
    resolve('Some value');
  });
}

promise()
  .then((val) => {
    console.log(val);
    throw new Error('hello');
  })
  .catch((err) => /** fail over */ 7)
  .then((val) => console.log('val is seven', 7 === val))
  .then((val) => console.log('val is undefined', undefined === val))
  .catch((err) => console.log('hello', err.message === 'hello'))

