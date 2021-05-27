import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  proxy:{
    '/api/': {
      target: 'http://192.168.3.40:8888',
      changeOrigin: false,
      pathRewrite: { '^': '' },
    },
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  ssr: {
    mode: 'stream',
    devServerRender: true,
    removeWindowInitialProps:true,
  },
});
