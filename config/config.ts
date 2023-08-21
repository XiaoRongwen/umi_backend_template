import { defineConfig } from '@umijs/max';
import routes from './router';
export default defineConfig({
  antd: {
    configProvider: {},
    appConfig: {},
  },
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes,
  npmClient: 'npm',
});
