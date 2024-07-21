import Emitter from '../build/index.js'
import { expect, test } from 'vitest'

test('emit events', async () => {
  const emitter = new Emitter()
  await new Promise(resolve => {
    emitter.on('karate-chop', resolve)
    emitter.trigger('karate-chop')
  })
})

test('pass data from trigger to on', async () => {
  const emitter = new Emitter()
  await new Promise(resolve => {
    emitter.on('welcome', name => {
      expect(name).toEqual('bob')
      resolve()
    })
    emitter.trigger('welcome', 'bob')
  })
})

test('return itself', async () => {
  const emitter = new Emitter()
  await new Promise(resolve => {
    emitter.on('later', resolve).trigger('later')
  })
})

test('remove events', async () => {
  const emitter = new Emitter()
  await new Promise(resolve => {
    const onWelcome = () => {
      throw new Error('Subscriber should not be triggered after off.')
    }
    emitter.on('welcome', onWelcome)
    emitter.off('welcome', onWelcome)
    emitter.trigger('welcome', 'bob')
    resolve()
  })
})

test('clear events with a given eventName', async () => {
  const emitter = new Emitter()
  await new Promise(resolve => {
    const onOne = name => {
      throw new Error('Subscriber should not be triggered after clear.')
    }
    emitter.on('one', onOne)
    emitter.on('done', resolve)
    emitter.clear('one')
    emitter.trigger('one')
    emitter.trigger('done')
  })
})

test('clear events with a given eventName', async () => {
  const emitter = new Emitter()
  await new Promise(resolve => {
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
    resolve()
  })
})
