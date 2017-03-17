
function foo() {

  function bar() {
   console.log('hello');
  }

  return bar;
}

let outerBar = foo();

outerBar();

