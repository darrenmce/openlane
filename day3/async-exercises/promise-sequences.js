function delayX(x) {
  return new Promise(resolve => setTimeout(resolve, x));
}

const delay1000 = delayX.bind(null, 1000);
const delay2000 = delayX.bind(null, 2000);
const delay3000 = delayX.bind(null, 3000);

const now = Date.now();

// delay1000().then(() => console.log('a 1000', Date.now() - now));
// delay2000().then(() => console.log('a 2000', Date.now() - now));
// delay3000().then(() => console.log('a 3000', Date.now() - now));
//
// delay1000().then(() => {
//   console.log('b 1000', Date.now() - now);
//   return delay2000();
// }).then(() => {
//   console.log('b 2000', Date.now() - now);
//   return delay3000();
// }).then(() => console.log('b 3000', Date.now() - now));

// Promise.all
// Promise.all([
//   delay1000().then(() => console.log('c 1000', Date.now() - now)),
//   delay2000().then(() => console.log('c 2000', Date.now() - now)),
//   delay3000().then(() => console.log('c 3000', Date.now() - now)),
// ])
// .then(() => console.log('all complete'));

Promise.race([
  delay1000().then(() => console.log('c 1000', Date.now() - now)),
  delay2000().then(() => console.log('c 2000', Date.now() - now)),
  delay3000().then(() => console.log('c 3000', Date.now() - now)),
])
.then(() => console.log('1000 complete'));
