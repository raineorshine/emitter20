var chai = require('chai')
var should = chai.should()
var Emitter = require('../index.js')

describe('emitter20', function () {

  it('should emit events', function (done) {
    var emitter = new Emitter()
    emitter.on('karate-chop', done)
    emitter.trigger('karate-chop')
  })

  it('should pass data from trigger to on', function (done) {
    var emitter = new Emitter()
    emitter.on('welcome', function (name) {
      name.should.equal('bob')
      done()
    })
    emitter.trigger('welcome', 'bob')
  })

})
