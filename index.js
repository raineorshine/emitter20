module.exports = function() {

  let subscribers = []

  return {

    // remove all subscribers
    clear: (eventName) => {
      subscribers = eventName != null
        ? subscribers.filter(subscriber => subscriber.eventName !== eventName)
        : []
    },

    // remove a subscriber
    off: (eventName, callback) => {
      const index = subscribers.findIndex(subscriber => subscriber.eventName === eventName && subscriber.callback === callback)
      if (index >= 0) {
        subscribers.splice(index, 1)
      }
    },

    // subscribe to an event
    on: (eventName, callback) => {
      subscribers.push({ eventName, callback })
    },

    // trigger an event; all subscribers will be called
    trigger: (eventName, data) => {
      subscribers
        .filter(subscriber => subscriber.eventName === eventName)
        .forEach(subscriber => subscriber.callback(data))
    }
  }
}
