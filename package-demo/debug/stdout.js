var debug = require('debug');
var error = debug('app:error');
 
// by default stderr is used
error('goes to stderr!');
 
var log = debug('app:log');
// 将此命名空间设置为通过console.log记录
log.log = console.log.bind(console); // 绑定到console
log('goes to stdout');
error('still goes to stderr!');
 
// 将所有输出设置为通过console.info
// 覆盖每个命名空间的所有日志设置
debug.log = console.info.bind(console);
error('now goes to stdout via console.info');
log('still goes to stdout, but via console.info now');