const { BasicAuth } = require('enquirer');
 
 const prompt = new BasicAuth({
  name: 'password',
  message: 'Please enter your password',
  username: 'ljy',
  password: '123',
  showPassword: false
});
 
 prompt
  .run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);