
let people = ['jo', 'jane', 'pat'];

function prefixItem(prefix, item) {
  return prefix + item;
}

const prefixDr = prefixItem.bind(null, 'Dr. ');

const toUpper = (str) => str.toUpperCase();

function prefix1(prefix, arr) {
  let prefixed = [];
  for (let i = 0; i < arr.length; i += 1) {
    prefixed.push(prefixItem(prefix, arr[i]));
  }
  return prefixed;
}

function map(arr, fn) {
  let prefixed = [];
  for (let i = 0; i < arr.length; i += 1) {
    prefixed.push(fn(arr[i]));
  }
  return prefixed;
}

console.log(prefix1('Dr. ', people));
console.log(map(people, prefixDr));
console.log(map(people, toUpper));
console.log(people.map(toUpper));
console.log(people.filter((n) => n === 'pat'));
