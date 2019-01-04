// 是项目的JS打包入口文件
import React from 'react';
import ReactDOM from 'react-dom';
// 导入项目的根组件
import App, { Button, Photo } from '../src/index.js';

ReactDOM.render(
  <App text="Hello react组件">
    <Button>小按钮</Button>
    <Photo src="https://avatars3.githubusercontent.com/u/18528507?s=40&v=4" />
  </App>, document.getElementById('app')
);
