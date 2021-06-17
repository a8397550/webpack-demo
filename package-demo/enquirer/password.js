const { Password } = require('enquirer');
 
const prompt = new Password({
  name: 'password',
  message: 'What is your password?',
//   showPassword: false // 此属性没有用
});
 
prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);