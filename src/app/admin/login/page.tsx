'use client';
import { Card, Form, Button, Input } from 'antd';

function LoginPage() {
  return (
    <div className='login-form pt-20 mx-auto w-full max-w-md'>
      <Card title='Next全栈管理后台' className='w-4/5 mx-auto mt-20'>
        <Form labelCol={{span:3}} onFinish={(v)=>{
            console.log(v)
        }}>
        <Form.Item name="userName" label='用户名'>
          <Input placeholder='请输入用户名' />
        </Form.Item>
        <Form.Item name="password" label='密码'>
          <Input.Password placeholder='请输入密码' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit' className='mx-auto w-full max-w-md'>
            登陆
          </Button>
        </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default LoginPage;
