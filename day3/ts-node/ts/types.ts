/**
 * Objects
 *
 * Strings
 * Numbers
 * Functions (Objects) (typeof foo === 'function')
 * Null (Objects) (null === null)
 * Undefined
 * Boolean
 */

const o: object = { };
const o2: { prop: string, another: string } = { prop: 'hi', another: 'bye' };

const s: string = 'Hello';
const n: number = 5;
const n2: number = NaN;
const n3: number = Infinity;
const n4: number = -Infinity;

const f: Function = () => {};
const f2: (arg: number) => void = function (arg: number) {};
const f3: (arg: number) => void = (arg: number) => {};
const f4: () => number = () => 5;

const nil: null = null;

const v: void = undefined;

const b: boolean = true;
const b2: boolean = false;

/** Shape example */
class Animal {
  name: string;
}

class Robot {
  name: string;
  serial: number;
}

const animal: Animal = new Animal();
const robot: Robot = new Robot();
const animal2: Animal = new Robot();
const animal3: Animal = { name: 'duck' };

const robot2: Robot = { name: 'hal', serial: 1 };

/** types and interface */
type RobotOrAnimal = Robot|Animal;
type HasName = { name: string };

const thing: HasName = { name: 'something' };
const hasName2: HasName = new Animal();

/** this is odd :/ */
type VoidFunction = () => void;

const voidFun: VoidFunction = () => { return 5; };

/** interfaces */

interface VoidFn2 {
  (): void;
}

const voidFun2: VoidFn2 = () => { return 5; };

interface Named {
  name: string;
}

interface TypicalInterface {
  prop1: string;
  prop2(): number;  // prop2: () => number
  prop3: number;
}

const ti: TypicalInterface = {
  prop1: 'hello',
  prop2: () => 5,
  prop3: 5,
};

class TypicalImplementation implements TypicalInterface, Named {
  name = 'fred';
  prop1: 'jo';
  prop2() {
    return 5;
  }
  prop3 = 7;
}


