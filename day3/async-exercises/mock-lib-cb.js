function asyncFunctionNodeCallbackStyle(a, b, cb) {
  setTimeout(() => {
    cb(null, a + b);
  }, 0);
}

module.exports = {
  asyncFn: asyncFunctionNodeCallbackStyle,
};
