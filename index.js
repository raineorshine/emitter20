module.exports = function() {
  var subscribers = [], self
  return self = {
    on: function (eventName, cb) {
      return subscribers.push({
        eventName: eventName,
        cb: cb
      }) && self
    },
    trigger: function (eventName, data) {
      return subscribers
        .filter(function (subscriber) {
          return subscriber.eventName === eventName
        })
        .forEach(function (subscriber) {
          subscriber.cb(data)
        }) || self
    }
  }
}
