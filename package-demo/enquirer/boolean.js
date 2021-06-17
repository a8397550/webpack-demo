const { BooleanPrompt } = require('enquirer');
 
const  prompt = new  BooleanPrompt({
  header:  '========================',
  message:  'Do you love enquirer (y/n)?',
  footer:  '========================',
  initial: true
});
 
prompt.run()
  .then(answer  =>  console.log('Selected:', answer))
  .catch(console.error);