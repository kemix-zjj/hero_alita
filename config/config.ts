import { defineConfig } from 'alita';

export default defineConfig({
  appType: 'h5',
  // 配置proxy，解决跨域
  // proxy: {
  //   "/api": {
  //     "target": "https://pvp.qq.com/web201605/js/herolist.json",
  //     "changeOrigin": true,
  //     "pathRewrite":{"^/api":""}
  //   }
  // },
  // 增加request 配置
  request: {
    dataField:''
  },
  keepalive: [/users/],
  aconsole: {
    console: {},
    inspx: {},
  },
  mobileLayout: 'true',
  mfsu: false,
  hash: false,
  npmClient: 'pnpm',
});
