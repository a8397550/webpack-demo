const { Confirm } = require('enquirer');

const promptConfirm = new Confirm({
    name: 'question',
    message: 'Did you like enquirer?'
  });

  promptConfirm.run()
    .then(answer => console.log('Answer:', answer));