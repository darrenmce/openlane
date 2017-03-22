function create(callback) {
  return {
    subscribe: (onNext) => {
      callback({
        next: (val) => onNext(val)
      });
    }
  };
}

create((observer) => {
  // imagine this is a 3000ms HTTP call
  setTimeout(() => observer.next(0), 3000);
  observer.next(0);
})
  .subscribe((val) => {
    console.log(val);
  });


