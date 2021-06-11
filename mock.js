// /server.js
const express = require('express');


const app = express();
const path = require("path");

app.get("/test", function(req, res) {
  res.json({
    code: 0,
    message: "test message"
  })
})

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
