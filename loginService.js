const express = require('express');
const fs = require("fs");
const app = express();
const path = require("path");
const formidable = require('express-formidable')
const cookieParser = require('cookie-parser');  

app.use(cookieParser());  
// 挂载中间件
app.use(formidable())

app.get('/login', function(req, res) {
  const html = fs.readFileSync('./view/login.html');
  res.setHeader('content-type', 'text/html; charset=UTF-8')
  res.send(html);
})

app.post('/loginPass', function(req, res) {
  const {query, params, body, data, fields, files} = req;
  console.log(query, params, body, data, fields, files);

  
  res.cookie("name", fields.name, {maxAge: 900000, httpOnly: false, domain: ".feelacg.com"}); 
  res.cookie("password", fields.password, {maxAge: 900000, httpOnly: false}); 
  const html = fs.readFileSync('./view/loginIndex.html');
  res.setHeader('content-type', 'text/html; charset=UTF-8')
  res.send(html);
})

app.get('/index', function(req, res) {
  const html = fs.readFileSync('./view/loginIndex.html');
  res.setHeader('content-type', 'text/html; charset=UTF-8')
  res.send(html);
})


// Serve the files on port 80.
app.listen(80, function () {
  console.log('Example app listening on port 80!\n');
});
