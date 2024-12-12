# 手動でプロジェクト初期設定

## フォルダー作成
  ~~~sh
  mkdir todo-app
  cd todo-app
  npm init -y
  ~~~

## React, ReactDomを導入
  ~~~~sh
  npm install react react-dom
  ~~~~
  * 202412 react 19が公開されて、package.jsonを開きバージョンを18.3.1に変更して「npm install」を実行して18バージョンに設定
  * nodeのバージョンは 18.20.2

## typescript導入
  ~~~sh
  npm install react react-dom
  npm install --save-dev typescript @types/react @types/react-dom
  npx tsc --init
  ~~~

  * 202412現在React19が公開されて、package.jsonを開きバージョンを18.3.1に変更して「npm install」を実行して18バージョンに設定
  * nodeのバージョンは 18.20.2

## webpackなど開発環境
  ~~~sh
  npm install --save-dev webpack webpack-cli webpack-dev-server typescript-loader
  ~~~

  * webpack.config.jsを作成
  ~~~javascript
  // webpack.config.js
  const path = require('path');

  module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
      static: './dist',
      port: 3000
    }
  };
  ~~~

## src生成、ファイル生成
#### src/index.tsx
  ~~~typescript
  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import './index.css';
  import App from './App';

  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  ~~~

#### src/App.tsx
  ~~~typescript
  import React from 'react';

  function App() {
    return (
      <div className='app'>
        App
      </div>
    );
  }

  export default App;
  ~~~

#### public/index.html
  ~~~html
  <!DOCTYPE html>
  <html lang="jp">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
  </html>
  ~~~

## script
  ~~~sh
  npm install react-scripts
  ~~~
  * package.json編集
  ~~~json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  ~~~

## babelの導入
~~~sh
npm install --save-dev @babel/plugin-proposal-private-property-in-object
~~~

## eslint導入
~~~sh
npm install --save-dev eslint
npx eslint --init
~~~

## prettier導入
~~~sh
npm install --save-dev prettier
~~~
* .prettierrcファイル
~~~json
{
  "printWidth": 80,
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "all"
}
~~~

## gitignore

##　起動
~~~sh
npm run start
~~~