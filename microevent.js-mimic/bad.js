const MicroEvent = require('./microevent.js')

function Foo () {}

MicroEvent.mixin(Foo)

f = new Foo
b = new Foo

f.bind('blerg', val => console.log('f got blerg', val))

console.log('You should see \'f got blerg yes\' and nothing more:')

f.trigger('blerg', 'yes')
b.trigger('blerg', 'no')

c = {}
MicroEvent.mixin(c)
c.bind('foo', bar => console.log('aaa', bar))
c.trigger('foo', 'bar')
