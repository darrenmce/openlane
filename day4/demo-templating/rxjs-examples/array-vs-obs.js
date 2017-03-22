const { Observable } = require('rxjs');

const CYCLES = 1000000;

const inputData = genInput(CYCLES);

test('Array', testArray, inputData);
test('RxJS', testRx, inputData);


function test(label, testFn, input) {
  const start = Date.now();
  const result = testFn(input);
  const end = Date.now();

  const totalS = parseFloat((end - start) / 1000).toFixed(2);

  console.log(`${label} with an input set of ${input.length}: ${totalS}s and ` +
    `a result of ${result}`);
}

function testArray(input) {
  return input
    .filter((el) => el % 2 === 0)
    .map((el) => el * 5)
    .reduce((total, next) => total + next, 0);
}

function testRx(input) {
  let value;

  Observable.from(input)
    .filter((el) => el % 2 === 0)
    .map((el) => el * 5)
    .reduce((total, next) => total + next, 0)
    .subscribe((result) => { value = result; });

  return value;
}

function genInput(cycles) {
  const input = [];

  for (let i = 0; i < cycles; i += 1) {
    input.push(Math.floor(Math.random() * 10000));
  }

  return input;
}