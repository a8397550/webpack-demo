const { NumberPrompt } = require('enquirer');
 
const prompt = new NumberPrompt({
  header:  '************************',
  footer:  '************************',
  name: 'number',
  message: 'Please enter a number',
  min: 100, // 未生效
  max: 200, // 未生效
  float: false // 生效 false 回去掉小数点, 四舍五入 ...
});

// console.log(prompt);
 
prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);