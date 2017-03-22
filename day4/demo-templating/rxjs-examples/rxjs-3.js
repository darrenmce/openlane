const { Observable } = require('rxjs');

const someObservable = Observable.create((observer) => {
  observer.next('first');
  observer.next('second');
  setTimeout(() => observer.next('third'), 1000);
  setTimeout(() => Math.random() > 0.5 ? observer.error(new Error('oops!')) : null, 3500);
  setTimeout(() => observer.next('fourth'), 5000)
  setTimeout(() => observer.complete(), 3500);
});

someObservable
  .retry(3)
  .subscribe(
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
