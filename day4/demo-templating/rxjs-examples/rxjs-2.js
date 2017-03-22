const { Observable } = require('rxjs/Observable');

const someObservable = Observable.create((observer) => {
  observer.next('first');
  observer.next('second');
  setTimeout(() => observer.next('third'), 1000);
  setTimeout(() => observer.error(new Error('oops!')), 3500);
  setTimeout(() => observer.next('fourth'), 5000);
});

someObservable.subscribe(
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
