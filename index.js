module.exports = function () {
  let subscribers = []

  const self = {

    // remove all subscribers
    clear: (eventName) => {
      subscribers = eventName != null
        ? subscribers.filter(subscriber => subscriber.eventName !== eventName)
        : []
      return self // return self to support chaining
    },

    // remove a subscriber
    off: (eventName, callback) => {
      const index = subscribers.findIndex(subscriber => subscriber.eventName === eventName && subscriber.callback === callback)
      if (index >= 0) {
        subscribers.splice(index, 1)
      }
      return self
    },

    // subscribe to an event
    on: (eventName, callback) => {
      subscribers.push({ eventName, callback })
      return self
    },

    // trigger an event; all subscribers will be called
    trigger: (eventName, data) => {
      subscribers
        .filter(subscriber => subscriber.eventName === eventName)
        .forEach(subscriber => subscriber.callback(data))
      return self
    }

  }

  return self
}
