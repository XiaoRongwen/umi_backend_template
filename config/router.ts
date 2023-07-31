const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  {
    name: '客户管理',
    path: '/customer-manage',
    component: './CustomerManage',
    routes: [
      {
        name: ' 客户列表',
        icon: 'TeamOutlined',
        path: '/customer-manage/customer-list',
        component: './CustomerManage/CustomerList',
      },
      {
        name: ' 客户认证',
        icon: 'FileProtectOutlined',
        path: '/customer-manage/authentication',
        component: './CustomerManage/ClientAuthentication',
      },
    ],
  },
  {
    name: 'Login',
    path: '/login',
    component: './Login',
    layout: false,
  },
];
export default routes;
