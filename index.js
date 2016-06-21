module.exports = function() {
  var subscribers = []
  return {
    on: function (eventName, cb) {
      subscribers.push({
        eventName: eventName,
        cb: cb
      })
    },
    trigger: function (eventName, data) {
      subscribers
        .filter(function (subscriber) {
          return subscriber.eventName === eventName
        })
        .forEach(function (subscriber) {
          subscriber.cb(data)
        })
    }
  }
}
