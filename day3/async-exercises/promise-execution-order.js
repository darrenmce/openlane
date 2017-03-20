function a() {
  console.log('a');
}

function b() {
  console.log('b');
}

function c() {
  console.log('c-factory');

  return () => {
    console.log('c');
  }
}

function d() {
  console.log('d');
}


a();
const p1 = new Promise((resolve) => {
  setTimeout(resolve, 1000);
});
const p2 = p1.then(b);
const p3 = p2.then(c());
d();

// hypothetical promise implementation
class Promise2 {
  constructor(fn) {
    fn(resolve, reject)
    function resolve() {
      console.log('resolve');
    }

    function reject() {
      console.log('reject');
    }
  }

  then(callback) {
    this._success = callback;
  }

  catch(callback) {
    this._fail = callback;
  }
}

const p1 = new Promise2((resolve) => {
  setTimeout(resolve, 1000);
});
