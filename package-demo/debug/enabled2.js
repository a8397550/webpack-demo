// 检查目标使用启用
const httpDebug = require('debug')('http');

const debug = require('debug');
// 如果停用了，就没有输出了
// debug.enable();
// debug.disable(); // 注意 如果这样停用，就起不来了。
// debug.enable();
// console.log(debug.enabled("http"));
// debug.enable();
// console.log(debug.enabled("http"));

let namespaces = debug.disable(); // 正确的停用启用
debug.enable(namespaces);

httpDebug("===")
if (httpDebug.enabled) {
  httpDebug("enable")
} else {
  httpDebug("disable")
}