// 运行时配置
import { BulbOutlined, LogoutOutlined } from '@ant-design/icons';
import { RequestConfig, RunTimeLayoutConfig } from '@umijs/max';
import { Dropdown, message } from 'antd';
// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string;
  avatar?: string;
}> {
  return {
    name: '小荣',
    avatar:
      'https://p26-passport.byteacctimg.com/img/user-avatar/312989b46037c16843b1eb44aea82fa2~180x180.awebp?',
  };
}

export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  //initialState上面登录函数返回的信息

  return {
    logo: 'https://github.com/XiaoRongwen/imgs/blob/master/logo.png?raw=true', //左上角Logo
    title: 'xxxx运营平台', //左上角Logo后面的名字
    menu: {
      locale: false, //菜单是否国际化
    },
    layout: 'mix', //菜单的方式，有mix,top,side三种，这里用mix
    splitMenus: true, // 这里用了mix才会生效,bia
    avatarProps: {
      src: initialState?.avatar || undefined, //右上角头像
      title: initialState?.name || '用户', //右上角名称
      size: 'small',
      render: (props, dom) => {
        return (
          <Dropdown
            menu={{
              items: [
                {
                  key: 'logout',
                  icon: <LogoutOutlined />,
                  label: '退出登录',
                },
                {
                  key: 'theam',
                  icon: <BulbOutlined />,
                  label: '切换主题',
                },
              ],
            }}
          >
            {dom}
          </Dropdown>
        );
      },
    },
    // actionsRender: () => [<InfoCircleFilled key="InfoCircleFilled" />],
    token: {
      //菜单的样式配置
      //   colorBgAppListIconHover: 'rgba(0,0,0,0.06)',
      //   colorTextAppListIconHover: 'rgba(255,255,255,0.95)',
      //   colorTextAppListIcon: 'rgba(255,255,255,0.85)',
      sider: {
        //侧边菜单的配置 ，这里具体看文档
        // colorBgCollapsedButton: '#fff',
        // colorTextCollapsedButtonHover: '#1677ff',
        // colorTextCollapsedButton: 'rgba(0,0,0,0.45)',
        colorMenuBackground: '#fff',
        // colorBgMenuItemCollapsedElevated: 'rgba(0,0,0,0.85)',
        colorMenuItemDivider: 'rgba(255,255,255,0.15)',
        colorBgMenuItemHover: 'rgba(0,0,0,0.06)',
        colorBgMenuItemSelected: 'rgba(0,0,0,0.05)',
        colorTextMenuSelected: '#1677ff',
        colorTextMenuItemHover: '#1677ff',
        // colorTextMenu: 'rgba(255,255,255,0.75)',
        // colorTextMenuSecondary: 'rgba(255,255,255,0.65)',
        colorTextMenuTitle: 'rgba(255,255,255,0.95)',
        colorTextMenuActive: '#1677ff',
        colorTextSubMenuSelected: '#1677ff',
      },
    },
  };
};

export const request: RequestConfig = {
  timeout: 1000,
  // other axios options you want
  errorConfig: {
    errorHandler(error: any) {
      const { response } = error;
      if (response && response.status === 500) {
        message.error('请求错误：服务器故障，请稍后再试');
      }
    },
    errorThrower() {},
  },
  // 请求拦截
  requestInterceptors: [
    (config: any) => {
      let token = localStorage.getItem('token') || '';
      if (token.startsWith('"')) {
        token = JSON.parse(token);
      }
      if (token) {
        config.headers.Authorization = 'Bearer ' + token;
      }
      return config;
    },
    (error: any) => {
      return error;
    },
  ],
  // 相应拦截
  responseInterceptors: [
    (response: any) => {
      const { data, message } = response;
      if (!data.success) {
        message.error(message);
      }
      return response;
    },
  ],
};
