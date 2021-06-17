const createDebug = require('debug')
createDebug.formatters.h = (v) => {
  return v.toString('hex')
}

const debug = createDebug('foo')
debug('this is hex: %h', new Buffer('hello world'))