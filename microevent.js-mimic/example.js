// import microevent.js
const MicroEvent = require('./microevent.js')

/**
 * Ticker is a class periodically sending out dummy tick events
 */
const Ticker = function (interval) {
  const self = this
  setInterval(() => {
    self.trigger('tick', new Date())
  }, 1000)
}
/**
 * make Ticker support MicroEventjs
 */
MicroEvent.mixin(Ticker)

// create a ticker
const ticker = new Ticker()
// bind the 'tick' event
ticker.bind('tick', (date) => {
  console.log('notified date', date)
})



