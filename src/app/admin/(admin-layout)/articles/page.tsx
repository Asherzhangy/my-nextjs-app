'use client';
import React,{ useEffect, useState } from 'react';
import { Button, Card, Form, Input, Table,Modal, Space,Popconfirm } from 'antd';
import { SearchOutlined,PlusOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons';
import MyUpload from '../../_components/MyUpload';
import { title } from 'process';

type Article = {
    id:string,
    title:string,
    desc:string,
    image:string 
}
function ArticlePage() {
    const [open,setOpen] = useState(false)
    const [list,setList] = useState<Article[]>([])
    const [query,setQuery] = useState({title:''})
    const [currentId,setCurrentId] = useState('')
    const [myForm] = Form.useForm()
    const [imageUrl, setImageUrl] = useState<string>('');
    // useEffect这里是监听作用
    useEffect(()=>{
        fetch(`/api/admin/articles?title=${query.title}`).then(res=>res.json().then(res=>{
            setList(res.data.list)
        }))
    },[query])
    useEffect(()=>{
      if(!open){
        setCurrentId('')
        setImageUrl('')
      }
    },[open])
  return (
    <Card title='文章管理' extra={<Button type='primary' icon={<PlusOutlined />} onClick={()=>{
        myForm.resetFields()
        setOpen(true)}} />}>
      <Form layout='inline' onFinish={(v)=>{
        setQuery({title:v.title})
      }}>
        <Form.Item label='标题' name='title'>
          <Input placeholder='请输入关键词' />
        </Form.Item>
        <Form.Item>
          <Button icon={<SearchOutlined />} htmlType='submit' type='primary' />
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
            title: '封面',
            // dataIndex:'title'
            render(v,r){
              return (
                <img 
                src={r.image}
                style={{width:'80px',maxHeight:'80px'}}
                alt={r.title}
                />
              )
            }
          },
          {
            title: '简介',
            dataIndex:'desc'
          },
          {
            title: '操作',
            render(v,r){
                return <Space>
                    <Button size='small' type='primary' icon={<EditOutlined />} onClick={()=>{
                        setOpen(true)
                        setCurrentId(r.id)
                        setImageUrl(r.image)
                        myForm.setFieldsValue(r)
                    }} />
                    <Popconfirm title="是否确认删除？" onConfirm={async()=>{
                      await  fetch('/api/admin/articles/'+r.id,{method:'DELETE'}).then((res)=>res.json())
                      setQuery({title:''})
                    }}>
                     <Button size='small' type='primary' icon={<DeleteOutlined />} danger />
                    </Popconfirm>
                    
                </Space>
            }
          }
        ]}
      />
      <Modal title='编辑' open={open} onCancel={()=>setOpen(false)} onOk={()=>{myForm.submit()}}>
        <Form layout='vertical' form={myForm} onFinish={async(v)=>{
            // 这里通过currentId来判断编辑还是新增
            if(currentId){
            await fetch('/api/admin/articles/'+currentId,{
            method:'PUT',
            body:JSON.stringify({...v,image:imageUrl})
            }).then((res)=>res.json())
            }else{
            await fetch('/api/admin/articles',{
            method:'POST',
            body:JSON.stringify({...v,image:imageUrl})
            }).then((res)=>res.json())
            
            }
            setOpen(false)
      
            setQuery({title:''})
        }}>
            <Form.Item label='标题' name='title' rules={[{required:true,message:"标题不能为空"}]}>
                <Input placeholder='请输入名字' / >
            </Form.Item>
            <Form.Item label='简介' name='desc'>
                <Input.TextArea placeholder='请输入简介' />
            </Form.Item>
            <Form.Item label='封面'>
              <MyUpload imageUrl={imageUrl} setImageUrl={setImageUrl}/>
            </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}

export default ArticlePage;