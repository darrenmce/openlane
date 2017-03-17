class MyComponent {
  constructor(data, prefix) {
    this.data = data;
    this.prefix = prefix;
  }

  getPrefixed() {
    let foo = 'bar';
    let result = this.data.map((el) => {
      foo = 'barrrr';
      return this.prefix + el;
    });
    console.log(foo);
    return result;
  }
}

// const obj = new MyComponent(['jo', 'chris', 'pat'], 'Dr. ');


this.name = 'GLOBAL';

const obj = {
  name: 'Pat',
  print: function() {
   console.log('Hello ', this.name);
  }
};

obj.print();

const print2 = obj.print;

//print2();
























