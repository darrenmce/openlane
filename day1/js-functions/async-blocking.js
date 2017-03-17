
setInterval(
  () => console.log(Date.now()), 500 
);

setTimeout(() => {
  console.log('INTERRUPT');
  let cat = 0;
  for (let i = 0; i < 500000000; i += 1) {
     cat += Math.random(); 
  }
  return cat;
} , 3000);

