module.exports = function() {
  var subscribers = []
  return {
    on: function (name, f) {
      subscribers.push({
        name: name,
        f: f
      })
    },
    trigger: function (name, data) {
      subscribers
        .filter(function (subscriber) {
          return subscriber.name === name
        })
        .forEach(function (subscriber) {
          subscriber.f(data)
        })
    }
  }
}
