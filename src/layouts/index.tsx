import { Outlet } from '@umijs/max';
import { Layout } from 'antd';

export default function index() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
