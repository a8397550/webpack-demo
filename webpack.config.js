const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动生成index.html
// 自动清理，清理dist旧文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

class MyPlugin{
  constructor(options){
    console.log("MyPlugin constructor:", options);
  }
  apply(compiler) {
    if (compiler.hooks) {
      // 新版本 webpack 5.x
      compiler.hooks.compile.tap('MyPlugin', params => {
        console.log('以同步方式触及 compile 钩子。一个新的编译(compilation)创建之后')
      })
      compiler.hooks.done.tap('MyPlugin', params => {
        console.log('以同步方式触及 compile 钩子。编译完成时')
      })
    } else {
      // 旧版本
      // console.log(compiler);
      compiler.plugin("compilation", compilation => {
        console.log("MyPlugin");
      });
    }
  }
}

module.exports = {
  entry: {
    index:'./src/index.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'webpack-demo', // 设置输出文件标题名
      filename: 'index.html', // 设置输出文件名
      template: 'view/index.html', // 设置模板
    }),
    new MyPlugin({param: "my plugin"})
  ],
  mode: "production",

  // mode: 'development',
  // devtool: 'inline-source-map', // 站点地图，可以输出错误发生所在地
  // devServer: {
  //   contentBase: './dist', // webpack-dev-server在哪里寻找文件
  // },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "force-strict-loader", // 自定义loader
      //     options: {
      //       sourceMap: true,
      //     }
      //   }
      // },
      {
        test: /\.css$/,
        /*
        配置文件中针对.css文件应用了css-loader,style-loader，
        注意这里loader的顺序不能颠倒，webpack是自下而上解析的，
        只有通过css-loader处理css后才能通过style-loader生成<style></style>标签。
        */
        use: [
          'style-loader',
          'css-loader'
        ]
        /* link的方式
        use: [
            'style-loader/url',
            'file-loader'
        ]
        */
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ],
  }
};
