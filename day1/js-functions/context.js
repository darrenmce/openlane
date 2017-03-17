'use strict';

const obj = {
   prop: 'my prop'
};


class MyObj {
  constructor() {
    this.prop = 'my prop';
  }
}

function MyOtherObj() {
  console.log('This', this);
  this.prop = 'my prop ' + Math.random();
}

let myContext = { other: 'thing' };

let boundMyOther = MyOtherObj.bind(myContext);

let otherContext = {};
boundMyOther.bind(otherContext);

// instance types
// console.log(obj);
// const m = new MyObj();
// console.log(m);
// const m2 = new MyOtherObj();
// console.log(m2);
// console.log({} instanceof Object);
// console.log(obj instanceof Object);
// console.log(m instanceof Object);
// console.log(m instanceof MyObj);
// console.log(obj instanceof MyObj);


// This fail (requires strict mode)
// let val = MyOtherObj();
// console.log(val);
