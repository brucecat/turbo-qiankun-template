import Home from "./pages/Home";

const routes = [
  {
    path: "/",
    key: 'main-app',
    component: Home,
    title: '首页',
    showMenu: true, // 是否在菜单中显示
  },
  {
    path: "/sub-react",
    key: 'sub-react',
    title: 'react子应用',
    showMenu: true,
  },
  {
    path: "/sub-vue",
    key: 'sub-vue',
    title: 'vue子应用',
    showMenu: true,
  },
  {
    path: "/sub-umi",
    key: 'sub-umi',
    title: 'umi子应用',
    showMenu: true,
  }
];

export default routes;
