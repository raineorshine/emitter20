# emitter20
[![npm version](https://img.shields.io/npm/v/emitter20.svg)](https://npmjs.org/package/emitter20)
[![Build Status](https://travis-ci.org/metaraine/emitter20.svg?branch=master)](https://travis-ci.org/metaraine/emitter20)

An event emitter that used to be 20 lines of code but is still quite small. No dependencies.

## Install

```sh
$ npm install --save emitter20
```

## Methods

- `on: (eventName: string, callback: Function) => void` - Subscribe a callback to the given event type.
- `off: (eventName: string, callback: Function) => void` - Remove a callback from the given event type.
- `trigger: (eventName: string, callback: Function) => void` - Trigger an event, invoking all subscribers.
- `clear: (eventName?: string) => void` - Remove all subscribers from the given event type, or all subscribers if no event type is specified.


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

ISC © [Raine Revere](https://github.com/raineorshine)
