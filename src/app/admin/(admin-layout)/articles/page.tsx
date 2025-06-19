'use client';
import React,{ useEffect, useState } from 'react';
import { Button, Card, Form, Input, Table,Modal, Space } from 'antd';
import { SearchOutlined,PlusOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons';

function ArticlePage() {
    const [open,setOpen] = useState(false)
    const [list,setList] = useState([])
    const [query,setQuery] = useState({})
    const [myForm] = Form.useForm()
    useEffect(()=>{
        fetch('/api/admin/articles').then(res=>res.json().then(res=>{
            setList(res.data.list)
        }))
    },[query])
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
      dataSource={list}
      rowKey='id'
        columns={[
          {
            title: '序号',
            width:80,
            render(v,r,i){
                return i+1
            }
          },
          {
            title: '标题',
            dataIndex:'title'
          },
          {
            title: '简介',
            dataIndex:'desc'
          },
          {
            title: '操作',
            render(){
                return <Space>
                    <Button size='small' type='primary' icon={<EditOutlined />}  />
                    <Button size='small' type='primary' icon={<DeleteOutlined />} danger />
                </Space>
            }
          }
        ]}
      />
      <Modal title='编辑' open={open} onCancel={()=>setOpen(false)} onOk={()=>{myForm.submit()}}>
        <Form layout='vertical' form={myForm} onFinish={async(v)=>{
            await fetch('/api/admin/articles',{
                method:'POST',
                body:JSON.stringify(v)
            }).then((res)=>res.json())
            setOpen(false)
            setQuery({})
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