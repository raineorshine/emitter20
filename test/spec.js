/* eslint-env mocha */
const chai = require('chai')
const Emitter = require('../index.js')

describe('emitter20', function () {
  it('should emit events', done => {
    const emitter = new Emitter()
    emitter.on('karate-chop', done)
    emitter.trigger('karate-chop')
  })

  it('should pass data from trigger to on', done => {
    const emitter = new Emitter()
    emitter.on('welcome', name => {
      chai.expect(name).equals('bob')
      done()
    })
    emitter.trigger('welcome', 'bob')
  })

  it('should return itself', done => {
    const emitter = new Emitter()
    emitter
      .on('later', done)
      .trigger('later')
  })

  it('should remove events', done => {
    const emitter = new Emitter()
    const onWelcome = name => {
      throw new Error('Subscriber should not be triggered after off.')
    }
    emitter.on('welcome', onWelcome)
    emitter.off('welcome', onWelcome)
    emitter.trigger('welcome', 'bob')
    done()
  })

  it('should clear events with a given eventName', done => {
    const emitter = new Emitter()
    const onOne = name => {
      throw new Error('Subscriber should not be triggered after clear.')
    }
    emitter.on('one', onOne)
    emitter.on('done', done)
    emitter.clear('one')
    emitter.trigger('one')
    emitter.trigger('done')
  })

  it('should clear events with a given eventName', done => {
    const emitter = new Emitter()
    const onOne = name => {
      throw new Error('Subscriber should not be triggered after clear.')
    }
    const onTwo = name => {
      throw new Error('Subscriber should not be triggered after clear.')
    }
    emitter.on('one', onOne)
    emitter.on('two', onTwo)
    emitter.clear()
    emitter.trigger('one')
    emitter.trigger('two')
    done()
  })
})
