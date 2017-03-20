const asyncFn = require('./mock-lib-cb').asyncFn;

asyncFn(1, 5, (err, val) => {
  if (err) {
    console.log(`this should not happen: ${err.message}`);
    return;
  }
  console.log(`Value ${val} should be 6: ${val === 6}`);
});
