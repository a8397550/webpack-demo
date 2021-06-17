/**
 * 调查问卷 Survey
 */

const { Survey } = require('enquirer');
 
const prompt = new Survey({
  name: 'experience',
  message: 'Please rate your experience',
   scale: [
    { name: '1', message: 'Strongly Disagree' },
    { name: '2', message: 'Disagree' },
    { name: '3', message: 'Neutral' },
    { name: '4', message: 'Agree' },
    { name: '5', message: 'Strongly Agree' }
  ],
  margin: [0, 0, 2, 1],
  choices: [
    {
      name: 'interface',
      message: 'The website has a friendly interface.'
    },
    {
      name: 'navigation',
      message: 'The website is easy to navigate.'
    },
    {
      name: 'images',
      message: 'The website usually has good images.'
    },
    {
      name: 'upload',
      message: 'The website makes it easy to upload images.'
    },
    {
      name: 'colors',
      message: 'The website has a pleasing color palette.'
    }
  ]
});
 
prompt.run()
  .then(value => console.log('ANSWERS:', value))
  .catch(console.error);