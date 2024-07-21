const emitter20 = function () {
  let subscribers: any[] = []

  const self = {
    // remove all subscribers
    clear: (eventName: string) => {
      subscribers = eventName != null ? subscribers.filter(subscriber => subscriber.eventName !== eventName) : []
      return self // return self to support chaining
    },

    // remove a subscriber
    off: (eventName: string, callback: (data?: any) => void) => {
      const index = subscribers.findIndex(
        subscriber => subscriber.eventName === eventName && subscriber.callback === callback,
      )
      if (index >= 0) {
        subscribers.splice(index, 1)
      }
      return self
    },

    // subscribe to an event
    on: (eventName: string, callback: (data?: any) => void) => {
      subscribers.push({ eventName, callback })
      return self
    },

    // trigger an event; all subscribers will be called
    trigger: (eventName: string, data?: any) => {
      subscribers
        .filter(subscriber => subscriber.eventName === eventName)
        .forEach(subscriber => subscriber.callback(data))
      return self
    },
  }

  return self
}

export default emitter20
