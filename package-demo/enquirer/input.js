const { Input } = require('enquirer');
const prompt = new Input({
  name: 'username',
  message: 'What is your username?',
  initial: 'jonschlinkert'
});
 
prompt.run()
  .then(answer => console.log('Username:', answer))
  .catch(console.error);