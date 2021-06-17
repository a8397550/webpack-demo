// https://www.npmjs.com/package/progress
var ProgressBar = require('progress');
 
// :bar 进度条本身
// :current 当前刻度数
// :total 总滴答声
// :elapsed 时间以秒为单位
// :percent 完成百分比
// :eta 预计完成时间（以秒为单位）
// :rate 每秒滴答数

var bar = new ProgressBar('剩余时间::eta :percent', { 
    total: 100,
    curr: 0,
    callback: function () {
        console.log('callback')
    }
});
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);