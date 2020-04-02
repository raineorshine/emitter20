var chai = require('chai')
var should = chai.should()
var Emitter = require('../index.js')

describe('emitter20', function () {

  it('should emit events', done => {
    var emitter = new Emitter()
    emitter.on('karate-chop', done)
    emitter.trigger('karate-chop')
  })

  it('should pass data from trigger to on', done => {
    var emitter = new Emitter()
    emitter.on('welcome', name => {
      name.should.equal('bob')
      done()
    })
    emitter.trigger('welcome', 'bob')
  })

  it('should remove events', done => {
    var emitter = new Emitter()
    const onWelcome = name => {
      throw new Error('Subscriber should not be triggered after off.')
    }
    emitter.on('welcome', onWelcome)
    emitter.off('welcome', onWelcome)
    emitter.trigger('welcome', 'bob')
    done()
  })

  it('should clear events with a given eventName', done => {
    var emitter = new Emitter()
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
    var emitter = new Emitter()
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
