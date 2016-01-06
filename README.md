# emitter20
[![npm version](https://img.shields.io/npm/v/emitter20.svg)](https://npmjs.org/package/emitter20)
[![Build Status](https://travis-ci.org/metaraine/emitter20.svg?branch=master)](https://travis-ci.org/metaraine/emitter20)

An event emitter in 20 lines of code.

## Install

```sh
$ npm install --save emitter20
```

## Usage

```js
var Emitter = require('emitter20')

var emitter = new Emitter()

emitter.on('karate-chop', function() {
  console.log('Haiaaaaaa!')
})

emitter.trigger('karate-chop') // Haiaaaaa!'
```

Pass arbitrary data to the event handler:

```js
var emitter = new Emitter()

emitter.on('welcome', function(name) {
  console.log(`Welcome {name}!`)
})

emitter.trigger('welcome', 'bob') // Welcome bob!
```

Can be used as a mixin:

```js
var assign = require('lodash.assign')

var obj = { a: 1, b: 2 }
assign(obj, new Emitter())

obj.on('karate-chop', function() {
  console.log('Haiaaaaaa!')
})

obj.trigger('karate-chop') // Haiaaaaa!'
```

## License

ISC © [Raine Lourie](https://github.com/metaraine)
