const c = require('ansi-colors');
 
console.log(c.red('This is a red string!')); // 红色
console.log(c.green('This is a red string!')); // 绿色
console.log(c.cyan('This is a cyan string!')); // 青色
console.log(c.yellow('This is a yellow string!')); // 黄色

console.log(c.bold.red('this is a bold red message')); // 加粗
// 注意，倾斜没有生效，可能是系统字体的原因..., 或者bash的原因
console.log(c.bold.yellow.italic('this is a bold yellow italicized message')); // 加粗，倾斜
console.log(c.green.bold.underline('this is a bold green underlined message')); // 下线条
debugger
// 嵌套使用
const str = c.yellow(`foo ${c.red.bold('red')} bar ${c.cyan('cyan')} baz`);
console.log(str);
 
// disable colors manually
c.enabled = false;
 
// 或者使用库自动检测支持
// color-support 颜色检测
const hasBasic = require('color-support').hasBasic;
c.enabled = hasBasic;
console.log(c.white(hasBasic));
console.log(c.red('I will only be colored red if the terminal supports colors'));
