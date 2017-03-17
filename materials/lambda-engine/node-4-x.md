Node 4.x
========

_Lambda as of Q1 2017 uses Node JS 4.x an older LTS release, 6.x is the current LTS.  Lambda also uses an even older version of node version 0.10.x.  Be sure to specify the nodejs4.3 version as opposed to nodejs which is 0.10.x_ 

- Language is mostly ES5
- Supports `const`/`let`
- Supports `() => {}` style functions
- Supports backtick strings and string interpolation
- Supports generators

## Environment

- Built in access to AWS SDK http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/index.html
- Environment Variables: http://docs.aws.amazon.com/lambda/latest/dg/env_variables.html and the global `process` object
- Handler function: http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-handler.html
- Context object: http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
- Logging: http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-logging.html
- Exceptions: http://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-mode-exceptions.html

## Handler Notes

- return values must be `JSON.stringify`able
- callbacks follow the `(error: Error, result: Object) => any` (node) pattern
- result objects must be `JSON.stringify`able
- handlers can timeout, this is configurable
- the `console` object works with the methods `log`, `error`, `warn`, and `info`
- exceptions (`Error`s) are translated by AWS including a nice stack trace breakdown

