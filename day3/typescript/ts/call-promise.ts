function somePromise() {
  return new Promise((resolve) => {
    resolve('Some value');
  });
}

module.exports = {
  promise: somePromise
};

