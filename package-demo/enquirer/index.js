const { prompt } = require('enquirer');

async function scanf() {
  const response = await prompt([
    {
      type: "toggle",
      message: 'Want to answer?',
      enabled: 'Yep',
      disabled: 'Nope'
    },
    {
      type: "multiselect",
      name: 'value',
      message: '请选择内容(按空格键操作)',
      limit: 7,
      choices: [
        { name: 'aqua', value: '#00ffff' },
        { name: 'black', value: '#000000' },
        { name: 'blue', value: '#0000ff' },
        { name: 'fuchsia', value: '#ff00ff' },
        { name: 'gray', value: '#808080' },
        { name: 'green', value: '#008000' },
        { name: 'lime', value: '#00ff00' },
        { name: 'maroon', value: '#800000' },
        { name: 'navy', value: '#000080' },
        { name: 'olive', value: '#808000' },
        { name: 'purple', value: '#800080' },
        { name: 'red', value: '#ff0000' },
        { name: 'silver', value: '#c0c0c0' },
        { name: 'teal', value: '#008080' },
        { name: 'white', value: '#ffffff' },
        { name: 'yellow', value: '#ffff00' }
      ],
      result(names) {
        // 默认返回 names
        const objs = this.map(names);
        // 处理过后，返回values
        return Object.values(objs);
      }
    },
    {
      type: "password",
      name: 'password',
      message: 'What is your password?',
      validate(value, state, item, index) {
        if (!value) { // 验证
          console.log(console.log('Password cannot be empty'));
          return false;
        }
        return true;
      }
    },
    {
      type: "autocomplete",
      name: 'flavor',
      message: 'Pick your favorite flavor',
      limit: 5, // 第一屏显示多少个
      initial: 2, // 默认第三个
      choices: [
        'Almond',
        'Apple',
        'Banana',
        'Blackberry',
        'Blueberry',
        'Cherry',
        'Chocolate',
        'Cinnamon',
        'Coconut',
        'Cranberry',
        'Grape',
        'Nougat',
        'Orange',
        'Pear',
        'Pineapple',
        'Raspberry',
        'Strawberry',
        'Vanilla',
        'Watermelon',
        'Wintergreen'
      ]
    },
    {
      type: 'confirm',
      name: 'question',
      message: 'Did you like enquirer?'
    }, {
      type: 'input',
      name: 'user',
      message: 'What is your user?'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your username?'
    }]);

  console.log(response); // { username: 'jonschlinkert' }
}


scanf();