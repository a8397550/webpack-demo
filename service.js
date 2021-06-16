// /server.js
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const fs = require("fs");
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const path = require("path");
app.use(express.static(path.join(__dirname, 'dist')))


const serveVideo = (req,res) => {
  const filepath = path.join(__dirname, 'file') + "\\1.mp4";

  fs.stat(filepath, (err, stats) => {
    if (err) throw err;
    console.log("fileStat", stats)
    res.writeHead(200, {
      'Content-Length': stats.size,
      'Content-Type': 'video/mp4'
    })
    fs.createReadStream(filepath).pipe(res);
  });
};

// 设置跨域访问  
app.all('*', function(req, res, next) {  
  console.log("res")
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1')  
  res.header("Content-Type", "application/json;charset=utf-8");  
  next();  
});  

 
 
app.get("/getMp4", serveVideo);


// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }));

// Serve the files on port 80.
app.listen(80, function () {
  console.log('Example app listening on port 80!\n');
});
