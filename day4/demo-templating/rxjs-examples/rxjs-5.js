const { Observable } = require('rxjs');

const someObservable = Observable.create((observer) => {
  let state = 0;
  setTimeout(() => observer.next(state++), 0);
  setTimeout(() => observer.next(state++), 100);
  setTimeout(() => observer.next(state++), 200);
  setTimeout(() => observer.next(state++), 300);
  setTimeout(() => observer.next(state++), 400);
  setTimeout(() => observer.next(state++), 500);
});

const subscription = someObservable
  .throttleTime(50)
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
