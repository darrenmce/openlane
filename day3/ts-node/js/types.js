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
const o = {};
const o2 = { prop: 'hi', another: 'bye' };
const s = 'Hello';
const n = 5;
const n2 = NaN;
const n3 = Infinity;
const n4 = -Infinity;
const f = () => { };
const f2 = function (arg) { };
const f3 = (arg) => { };
const f4 = () => 5;
const nil = null;
const v = undefined;
const b = true;
const b2 = false;
/** Shape example */
class Animal {
}
class Robot {
}
const animal = new Animal();
const robot = new Robot();
const animal2 = new Robot();
const animal3 = { name: 'duck' };
const robot2 = { name: 'hal', serial: 1 };
const thing = { name: 'something' };
const hasName2 = new Animal();
const voidFun = () => { return 5; };
const voidFun2 = () => { return 5; };
const ti = {
    prop1: 'hello',
    prop2: () => 5,
    prop3: 5,
};
class TypicalImplementation {
    constructor() {
        this.name = 'fred';
        this.prop3 = 7;
    }
    prop2() {
        return 5;
    }
}
//# sourceMappingURL=types.js.map