var ProgressBar = require('progress');
var http = require('http');
 
var req = http.request({
  host: '1.117.51.164',
  port: 80,
  path: '/modules.js'
});
 
req.on('response', function(res){
  var len = parseInt(res.headers['content-length'], 10);
 
  console.log("start");
  var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
    complete: '=',
    incomplete: ' ',
    width: 20,
    total: len
  });
 
  res.on('data', function (chunk) {
    bar.tick(chunk.length);
  });
 
  res.on('end', function () {
    console.log('\n');
  });
});
 
req.end();