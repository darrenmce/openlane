// import * as math from './math';
// const math = require('./math');
import { add } from './math';
// const add = require('./math').add;

export function run(event: object, context: object, callback: Function) {
  callback(null, 'hello from TypeScript!!!!!' + add(5, 4));
}
