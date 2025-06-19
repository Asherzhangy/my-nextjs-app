'use client';
import React,{ useState } from 'react';
import { Button, Card, Form, Input, Table,Modal } from 'antd';
import { SearchOutlined,PlusOutlined } from '@ant-design/icons';

function ArticlePage() {
    const [open,setOpen] = useState(false)
    const [myForm] = Form.useForm()
  return (
    <Card title='文章管理' extra={<Button type='primary' icon={<PlusOutlined />} onClick={()=>setOpen(true)} />}>
      <Form layout='inline'>
        <Form.Item label='标题'>
          <Input placeholder='请输入关键词' />
        </Form.Item>
        <Form.Item>
          <Button icon={<SearchOutlined />} type='primary' />
        </Form.Item>
      </Form>
      <Table
        columns={[
          {
            title: '序号',
          },
          {
            title: '标题',
          },
          {
            title: '简介',
          },
          {
            title: '操作',
          }
        ]}
      />
      <Modal title='编辑' open={open} onCancel={()=>setOpen(false)} onOk={()=>{myForm.submit()}}>
        <Form layout='vertical' form={myForm} onFinish={(v)=>{
            console.log(v) //等会儿这里写接口
            setOpen(false)
        }}>
            <Form.Item label='标题' name='title' rules={[{required:true,message:"标题不能为空"}]}>
                <Input placeholder='请输入名字' / >
            </Form.Item>
            <Form.Item label='简介' name='desc'>
                <Input.TextArea placeholder='请输入简介' />
            </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}

export default ArticlePage;