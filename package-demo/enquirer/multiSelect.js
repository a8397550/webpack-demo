const { MultiSelect } = require('enquirer');
 
let prompt = new MultiSelect({
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
});
 
prompt.run()
  .then(answer => console.log('Answer:', answer))
  .catch(console.error);
