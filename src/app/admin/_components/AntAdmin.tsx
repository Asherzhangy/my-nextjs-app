'use client';
import React, { useState } from 'react';
import { ConfigProvider,Button, Layout, Menu, theme } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import { useRouter } from 'next/navigation';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  TeamOutlined
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;
function AntdContainer({ children }: any) {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const nav = useRouter()
  return <ConfigProvider locale={zhCN}>
    <Layout style={{height:"100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['/admin/dashboard']}
          onClick={({key})=>{
            // console.log(key)
            nav.push(key)
          }}
          items={[
            {
              key: '/admin/dashboard',
              icon: <UserOutlined />,
              label: '履歴書',
            },
            {
              key: '/admin/articles',
              icon: <UploadOutlined />,
              label: '記事管理',
            },
            {
              key: '/admin/users',
              icon: <TeamOutlined />,
              label: 'ユーザー情報',
            }
            
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </ConfigProvider>;
}

export default AntdContainer;
