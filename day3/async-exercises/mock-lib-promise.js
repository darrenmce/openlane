function asyncFunctionNodePromiseStyle(a, b) {
  return new Promise((resolve, reject) => {
    resolve(a + b);
  });
}

module.exports = {
  asyncFn: asyncFunctionNodePromiseStyle,
};
