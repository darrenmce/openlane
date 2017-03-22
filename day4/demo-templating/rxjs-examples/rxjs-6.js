const { Observable } = require('rxjs');

const requestA = Observable.create((observer) => {
  setTimeout(() => observer.next('A'), 3000);
  setTimeout(() => observer.next('AA'), 1000); // Math.floor(Math.random() * 6000));
});

const requestB = Observable.create((observer) => {
  setTimeout(() => observer.next('B'), 5000);
  setTimeout(() => observer.next('BB'), 5001);
});

const requestC = Observable.create((observer) => {
  setTimeout(() => observer.next('C'), 1000);
  setTimeout(() => observer.next('CC'), 1001);
});

Observable
  .zip(requestA, requestB, requestC)
  .subscribe(
    (val) =>  console.log('val!', val),
    console.log.bind(console),
    () => console.log('done'));

