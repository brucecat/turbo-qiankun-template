import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import router from './router'
let app: any;
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  createApp(App).use(router).mount('#app');
} else {
  renderWithQiankun({
    mount(props) {
      app = createApp(App);
      app.use(router).mount(props.container.querySelector('#app'));
    },
    bootstrap() {
      console.log('vue app bootstrap');
    },
    update() {
      console.log('vue app update');
    },
    unmount() {
      console.log('vue app unmount');
      app?.unmount();
    }
  });
}