/**
 * 登录验证
 */

const { AuthPrompt } = require('enquirer');
 
async function authenticate(value, state) {
  if (value.username === this.options.username && value.password === this.options.password) {
    return Promise.resolve(true);
  }
  return Promise.reject("密码错误");
}
debugger
const CustomAuthPrompt = AuthPrompt.create(authenticate);
 
const prompt = new CustomAuthPrompt({
  name: 'password',
  message: 'Please enter your password',
  username: 'ljy',
  password: '1234567',
  choices: [
    { name: 'username', message: 'username' },
    { name: 'password', message: 'password' }
  ]
});
 
prompt
  .run()
  .then(answer => console.log('Authenticated?', answer))
  .catch(console.error);