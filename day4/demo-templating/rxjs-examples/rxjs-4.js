const { Observable } = require('rxjs/Observable');

const someObservable = Observable.create((observer) => {
  const timer = setInterval(() => observer.next(Date.now()), 2000);

  return () => {
    clearInterval(timer);
  };
});

const subscription = someObservable.subscribe(
  (val) => {
    console.log(val);
  },
  (err) => {
    console.log('RxJS caught error', err.message);
  },
  () => {
    console.log('done');
  }
);

setTimeout(() => {
  subscription.unsubscribe();
}, 2200);

console.log('we get here');


//
// function create(callback) {
//   return {
//     subscribe: (onNext) => {
//       callback({
//         next: (val) => onNext(val)
//       });
//     }
//   };
// }
