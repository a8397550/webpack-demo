const express = require('express');
const fs = require("fs");
const app = express();
const path = require("path");
const formidable = require('express-formidable')
const cookieParser = require('cookie-parser');  
const { 
  uuid,
  getQueryParams,
  joinUrl,
  getUrlParam
} = require('./lib/utils')

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

  // res.cookie("name", fields.name, {maxAge: 900000, httpOnly: false, domain: ".feelacg.com"}); 
  res.cookie("name", fields.name, {maxAge: 900000, httpOnly: false});
  res.cookie("password", fields.password, {maxAge: 900000, httpOnly: false}); 
  const html = fs.readFileSync('./view/loginIndex.html');
  res.setHeader('content-type', 'text/html; charset=UTF-8')
  res.send(html);
})

app.post("/redirect", function (req, res) {
  const {backUri} = req.query;
  res.redirect(302, `http://127.0.0.1/redirect-page?backUri=${encodeURIComponent(backUri)}`);  
})

app.get('/redirect-page', function (req, res) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "http://localhost");  
  res.header("Access-Control-Allow-Headers", "X-Requested-With");  
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
  res.header("X-Powered-By",' 3.2.1')  

  const html = fs.readFileSync('./view/redirect.html');
  res.setHeader('content-type', 'text/html; charset=UTF-8')
  res.send(html);
})

const tokens = {}

app.post("/verifyLogin", function (req, res) { 
  let {backUri} = req.query;

  res.cookie("name", req.cookies?.name, {maxAge: 900000, httpOnly: false});
  res.cookie("password", req.cookies?.password, {maxAge: 900000, httpOnly: false}); 

  const token = uuid(32);
  tokens[token] = req.cookies;

  backUri = decodeURIComponent(backUri);
  const query = getQueryParams(backUri);
  const params = {
    ...query,
    token
  }

  console.log('params', params);
  let uri = backUri;

  if (backUri.indexOf('?') !== -1) {
    uri = backUri.split('?')[0]
  }
  
  uri = joinUrl(uri, params);
  console.log('uri', uri);
  res.redirect(302, uri);  
})

app.get('/index', function(req, res) {
  const {token} = req.query;
  const cookies = tokens[token] || {};
  delete tokens[token];

  if (cookies?.name) {
    res.cookie("name", cookies?.name, {maxAge: 900000, httpOnly: false});
  }

  if (cookies?.password) {
    res.cookie("password", cookies?.password, {maxAge: 900000, httpOnly: false}); 
  }

  const html = fs.readFileSync('./view/loginIndex.html');
  res.setHeader('content-type', 'text/html; charset=UTF-8')
  res.send(html);
})


// Serve the files on port 80.
app.listen(80, function () {
  console.log('Example app listening on port 80!\n');
});
