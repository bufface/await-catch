# await-catch

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Downloads][downloads-image]][npm-url]

Async await wrapper for easy error handling
> _This library is inspired by [Dima Grossman](http://blog.grossman.io) && Tomer Barnea work. For more info about this approach, please check these links_
> * [_How to write async await without try-catch blocks in Javascript_](https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/)
> * [_await-to-js_](https://github.com/scopsy/await-to-js)

## Install

```sh
npm i await-catch --save
```

## Usage

*With just one promise call:*
```javascript
import to from 'await-catch';

async function asyncTask() {
     let err, user;

     [ err, user ] = await to(userPromise());
     if(err) throw new Error('Some awesome Error message.');

     return user;
}
```

*It works with an array of promises too:*

```javascript
import to from 'await-catch';

async function asyncTasks() {
  let err, result;

  [ err, result ] = await to([ userPromise(), tasksByUserPromise() ]);
  if (err) throw new Error('Some awesome Error message.');

  return result;
}
```

## Contributors

* [Federorlandau](https://https://github.com/Fedeorlandau)


## License

MIT © [Cristian Buffa](https://github.com/bufface)

[downloads-image]: https://img.shields.io/npm/dt/await-catch.svg

[npm-url]: https://www.npmjs.com/package/await-catch
[npm-image]: http://img.shields.io/npm/v/await-catch.svg

[travis-url]: https://travis-ci.org/bufface/await-catch
[travis-image]: https://api.travis-ci.org/bufface/await-catch.svg?branch=master
