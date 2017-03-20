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
declare const o: object;
declare const o2: {
    prop: string;
    another: string;
};
declare const s: string;
declare const n: number;
declare const n2: number;
declare const n3: number;
declare const n4: number;
declare const f: Function;
declare const f2: (arg: number) => void;
declare const f3: (arg: number) => void;
declare const f4: () => number;
declare const nil: null;
declare const v: void;
declare const b: boolean;
declare const b2: boolean;
/** Shape example */
declare class Animal {
    name: string;
}
declare class Robot {
    name: string;
    serial: number;
}
declare const animal: Animal;
declare const robot: Robot;
declare const animal2: Animal;
declare const animal3: Animal;
declare const robot2: Robot;
/** types and interface */
declare type RobotOrAnimal = Robot | Animal;
declare type HasName = {
    name: string;
};
declare const thing: HasName;
declare const hasName2: HasName;
/** this is odd :/ */
declare type VoidFunction = () => void;
declare const voidFun: VoidFunction;
/** interfaces */
interface VoidFn2 {
    (): void;
}
declare const voidFun2: VoidFn2;
interface Named {
    name: string;
}
interface TypicalInterface {
    prop1: string;
    prop2(): number;
    prop3: number;
}
declare const ti: TypicalInterface;
declare class TypicalImplementation implements TypicalInterface, Named {
    name: string;
    prop1: 'jo';
    prop2(): number;
    prop3: number;
}
