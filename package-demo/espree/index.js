const espree = require("espree");

const ast = espree.parse('let foo = "bar"', {
  // 将范围信息附加到每个节点
  range : true,  // 默认 false
  // 将行/列位置信息附加到每个节点
  loc : true, // 默认 false
  // 创建一个包含所有注释的顶级注释数组
  comment : false , 
  // 设置为3，5（默认值），6，7，8，9，10，11，或12，以指定的ECMAScript版本语法要使用。
  // 也可以设置为2015（同6）、2016（同7）、2017（同8）、2018（同9）、2019（同10）、2020（同11），或者2021（与 12 相同）使用基于年份的命名。
  ecmaVersion: 6,
  // create a top-level tokens array containing all tokens
  tokens: false,
  // 指定您正在解析的脚本类型（"script" or "module"）
  sourceType : "script", 
  // specify additional language features
  ecmaFeatures: {
    // enable JSX parsing
    jsx: false,
    // enable return in global scope
    globalReturn: false,
    // enable implied strict mode (if ecmaVersion >= 5)
    impliedStrict: false
  }
});
console.log(ast);

// const tokens = espree.tokenize('let foo = "bar"', { ecmaVersion: 6 });
// console.log(tokens);

// 返回当前espree版本
// console.log(espree.version);
// 从eslint-visitor-keys返回用于遍历 AST 的所有访问者键
// console.log(espree.VisitorKeys);
// 返回支持的最新 ECMAScript espree
// console.log(espree.latestEcmaVersion);
// supportedEcmaVersions
// console.log(espree.supportedEcmaVersions);