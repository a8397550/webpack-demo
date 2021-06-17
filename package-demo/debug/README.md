##debug的使用
可以做执行日志的打印，错误日志的打印，带有更好的视觉体验
### require("debug")
```javascript
  // npm install --save-dev debug
  // index.js
  require("debug")
  ...
  // 执行命令
  // DEBUG=* node index.js
  // DEBUG=http node index.js
  // DEBUG=worker:* node worker.js
  // DEBUG=worker:a node worker.js
```
![](https://user-images.githubusercontent.com/71256/29091486-fa38524c-7c37-11e7-895f-e7ec8e1039b6.png)  
