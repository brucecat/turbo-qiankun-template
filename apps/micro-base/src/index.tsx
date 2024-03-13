import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { start, registerMicroApps, initGlobalState } from 'qiankun'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 1. 要加载的子应用列表
const apps = [
  {
    name: "sub-react", // 子应用的名称
    entry: '//localhost:3001', // 默认会加载这个路径下的html，解析里面的js
    activeRule: "/sub-react", // 匹配的路由
    container: "#sub-app" // 加载的容器
  },
  {
    name: "sub-vue", // 子应用的名称
    entry: '//localhost:3002', // 默认会加载这个路径下的html，解析里面的js
    activeRule: "/sub-vue", // 匹配的路由
    container: "#sub-app" // 加载的容器
  },
  {
    name: "sub-umi", // 子应用的名称
    entry: '//localhost:3003', // 默认会加载这个路径下的html，解析里面的js
    activeRule: "/sub-umi", // 匹配的路由
    container: "#sub-app" // 加载的容器
  }
]

// 2. 注册子应用
registerMicroApps(apps, {
  beforeLoad: [async app => console.log('before load', app.name)],
  beforeMount: [async app => console.log('before mount', app.name)],
  afterMount: [async app => console.log('after mount', app.name)],
})

const state = { count: 1 }

const actions = initGlobalState(state);
// 主项目项目监听和修改
actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state);

start() // 3. 启动微服务
