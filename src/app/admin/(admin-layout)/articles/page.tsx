'use client';
import React,{ useEffect, useState } from 'react';
import { Button, Card, Form, Input, Table,Modal, Space,Popconfirm } from 'antd';
import { SearchOutlined,PlusOutlined,EditOutlined,DeleteOutlined} from '@ant-design/icons';
import MyUpload from '../../_components/MyUpload';
// import { title } from 'process';
import MyEditor from '../../_components/MyEditor';

type Article = {
    id:string,
    title:string,
    desc:string,
    image:string,
    content:string 
}
function ArticlePage() {
    const [open,setOpen] = useState(false)
    const [list,setList] = useState<Article[]>([])
    const [query,setQuery] = useState({title:''})
    const [currentId,setCurrentId] = useState('')
    const [myForm] = Form.useForm()
    const [imageUrl, setImageUrl] = useState<string>('');
      // 编辑器内容
    const [html, setHtml] = useState('<p>hello</p>')
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
        setHtml('')
      }
    },[open])
  return (
    <Card title='記事管理' extra={<Button type='primary' icon={<PlusOutlined />} onClick={()=>{
        myForm.resetFields()
        setOpen(true)}} />}>
      <Form layout='inline' onFinish={(v)=>{
        setQuery({title:v.title})
      }}>
        <Form.Item label='タイトル' name='title'>
          <Input placeholder='キーワードを入力してください' />
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
            title: 'タイトル',
            dataIndex:'title',
            width:150
          },
          {
            title: 'カバー',
            width:100,
            // dataIndex:'title'
            render(v,r){
              return (
                <img 
                src={r.image}
                style={{width:'100px',maxHeight:'80px'}}
                alt={r.title}
                />
              )
            }
          },
          {
            title: '说明',
            dataIndex:'desc'
          },
          {
            title: '操作',
            render(v,r){
                return <Space>
                    <Button size='small' type='primary' icon={<EditOutlined />} onClick={()=>{
                        setOpen(true)
                        setCurrentId(r.id)
                        // 这里是编辑回显
                        setImageUrl(r.image)
                        setHtml(r.content)
                        myForm.setFieldsValue(r)
                    }} />
                    <Popconfirm title="削除を確認" onConfirm={async()=>{
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
      <Modal title='編集' width={'75vw'} open={open} onCancel={()=>setOpen(false)} onOk={()=>{myForm.submit()}}>
        <Form layout='vertical' form={myForm} onFinish={async(v)=>{
            // 这里通过currentId来判断编辑还是新增
            if(currentId){
            await fetch('/api/admin/articles/'+currentId,{
            method:'PUT',
            body:JSON.stringify({...v,image:imageUrl,content:html})
            }).then((res)=>res.json())
            }else{
            await fetch('/api/admin/articles',{
            method:'POST',
            body:JSON.stringify({...v,image:imageUrl,content:html})
            }).then((res)=>res.json())
            
            }
            setOpen(false)
      
            setQuery({title:''})
        }}>
            <Form.Item label='タイトル' name='title' rules={[{required:true,message:"タイトルは空欄にできません"}]}>
                <Input placeholder='タイトルを入力してください' / >
            </Form.Item>
            <Form.Item label='说明' name='desc'>
                <Input.TextArea placeholder='説明を入力してください' />
            </Form.Item>
            <Form.Item label='カバー'>
              <MyUpload imageUrl={imageUrl} setImageUrl={setImageUrl}/>
            </Form.Item>
            <Form.Item label='詳細'>
              <MyEditor html={html} setHtml={setHtml}/>
            </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
}

export default ArticlePage;