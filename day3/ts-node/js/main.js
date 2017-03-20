"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as math from './math';
// const math = require('./math');
const math_1 = require("./math");
// const add = require('./math').add;
function run(event, context, callback) {
    callback(null, 'hello from TypeScript!!!!!' + math_1.add(5, 4));
}
exports.run = run;
//# sourceMappingURL=main.js.map