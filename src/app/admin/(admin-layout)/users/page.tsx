'use client';
import React from 'react';
import { Button, Card, Form, Input, Table } from 'antd';
import { SearchOutlined,PlusOutlined } from '@ant-design/icons';
// import PageContainer from '../../_components/PageContainer';

function UsersPage() {
  const mockData = [
    {
      key: '1',
      id: 1,
      name: '田中 太郎',
      nickname: 'たろう',
      username: 'tanaka',
      avatar: '/1.png',
      phone: '090-1234-5678',
      age: 28,
      gender: '男',
    },
    {
      key: '2',
      id: 2,
      name: '佐藤 花子',
      nickname: 'はな',
      username: 'sato',
      avatar: '/2.png',
      phone: '080-8765-4321',
      age: 25,
      gender: '女',
    },
    {
      key: '3',
      id: 3,
      name: '山本 一郎',
      nickname: 'いちろう',
      username: 'yamamoto',
      avatar: '/4.png',
      phone: '070-1122-3344',
      age: 32,
      gender: '男',
    },
  ];
  return (
    <Card title='ユーザー情報' extra={<Button type='primary' icon={<PlusOutlined />} />}>
      <Form layout='inline'>
        <Form.Item label='名前'>
          <Input placeholder='名前を入力してください' />
        </Form.Item>
        <Form.Item>
          <Button icon={<SearchOutlined />} type='primary' />
        </Form.Item>
      </Form>
      <Table
        style={{ marginTop: '8px' }}
        dataSource={mockData}
        columns={[
          {
            title: '序号',
            dataIndex: 'id',
            key: 'id',
          },
          {
            title: '名前',
            dataIndex: 'name',
            key: 'name',
          },
          {
            title: '昵称',
            dataIndex: 'nickname',
            key: 'nickname',
          },
          {
            title: 'ユーザー名',
            dataIndex: 'username',
            key: 'username',
          },
          {
            title: 'アバター',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (text) => <img src={text} alt="avatar" style={{ width: 80, height: 90}} />,
          },
          {
            title: '電話番号',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
          },
          {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
          },
          {
            title: '操作',
            key: 'action',
            render: () => (
              <Button type="link">詳細</Button>
            ),
          },
        ]}
      />
    </Card>
  );
}

export default UsersPage;