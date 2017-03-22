const { Observable } = require('rxjs/Observable');

function create(callback) {
  return {
    subscribe: (onNext) => {
      callback({
        next: (val) => onNext(val)
      });
    }
  };
}

console.log('first');

const someObservable = Observable.create((observer) => {
// const someObservable = create((observer) => {
  console.log('third');
  setInterval(() => observer.next('another'), 3000);
  observer.next('some value');
});

console.log('second');

someObservable.subscribe((val) => {
  foo(val);
});

function foo(val) {
  console.log('trigger', val);
}

console.log('last');
