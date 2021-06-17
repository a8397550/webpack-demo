// /server.js
const express = require('express');
const fs = require("fs");

const app = express();
const path = require("path");

app.get("/test", function(req, res) {
  res.json({
    code: 0,
    message: "test message"
  })
})

app.post("/test-post", function(req, res) {
  res.json({
    code: 0,
    message: "test message"
  })
})

const serveVideo = (req,res) => {
  const filepath = path.join(__dirname, 'file') + "/1.mp4";

  fs.stat(filepath, (err, stats) => {
    if (err) throw err;
    // console.log("fileStat", stats)
    console.log("filepath", filepath)
    res.writeHead(200, {
      'Content-Length': stats.size,
      'Content-Type': 'video/mp4'
    })
    fs.createReadStream(filepath).pipe(res);
  });
};

app.get("/getMp4", serveVideo);

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

app.use(express.static(path.join(__dirname, 'dist')))

// Serve the files on port 80.
app.listen(80, function () {
  console.log('Example app listening on port 80!\n');
});
