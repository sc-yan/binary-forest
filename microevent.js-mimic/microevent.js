/**
 * MicroEvent - to make any js object an event emitter (server or browser)
 */
const MicroEvent = function () {}

MicroEvent.prototype = {

  bind: function (event, fct) {
    this._events = this._events || {}
    this._events[event] = this._events[event] || []
    this._events[event].push(fct)
  },

  unbind: function (event, fct) {
    console.assert(typeof fct === 'function')
    this._events = this._events || {}
    if (!(event in this._events)) return
    console.assert(this._events[event].indexOf(fct) !== -1)
    this._events[event].splice(this._events[event].indexOf(fct), 1)
  },

  trigger: function (event /* , args... */) {
    this._events = this._events || {}
    if (!(event in this._events)) return
    for (let i = 0; i < this._events[event].length; i++) {
      this._events[event][i].apply(this, Array.prototype.slice.call(arguments, 1))
    }
  },
}

/**
 * mixin will delegate all MicroEvent.js function in the destination object
 *
 * - require('MicroEvent').mixin(Foobar) will make Foobar able to use MicroEvent
 *
 * @param {Object} destObject the object which will support MicroEvent
 */
MicroEvent.mixin = function (destObject) {
  const props = ['bind', 'unbind', 'trigger']
  for (let i = 0; i < props.length; i++) {
    const tmp = props[i]
    if (typeof destObject === 'function') {
      destObject.prototype[tmp] = MicroEvent.prototype[tmp]
    } else {
      destObject[tmp] = MicroEvent.prototype[tmp]
    }
  }
  return destObject
}

// export in common js
if (typeof module !== 'undefined' && ('exports' in module)) {
  module.exports = MicroEvent
}
