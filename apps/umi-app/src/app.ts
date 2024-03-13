export const qiankun = {
  async mount(props: any) {
    console.log(props)
  },
  async bootstrap() {
    console.log('umi app bootstraped');
  },
  async afterMount(props: any) {
    console.log('umi app afterMount', props);
  },
};