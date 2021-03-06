/**
 * 选择，单选
 */

const { Select } = require('enquirer');
 
const prompt = new Select({
  name: 'color',
  message: 'Pick a flavor',
  choices: ['apple', 'grape', 'watermelon', 'cherry', 'orange']
});
 
prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);