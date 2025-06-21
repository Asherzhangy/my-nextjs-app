'use client';
import { Card, Form, Button, Input } from 'antd';
import { useRouter } from 'next/navigation';
function LoginPage() {
  const nav = useRouter();
  return (
    <div className='login-form pt-20 mx-auto w-full max-w-md'>
      <Card title='Nextフルスタック管理バックエンド' className='w-4/5 mx-auto mt-20'>
        <Form labelCol={{span:3}} onFinish={ async (v)=>{
            // console.log(v)
            const res = await fetch('/api/admin/login',{
              method:'POST',
              body:JSON.stringify(v),
            }).then((res)=>res.json());
            console.log(res)
            nav.push('/admin/dashboard');
        }}>
        <Form.Item name="userName" label='ユーザー名'>
          <Input placeholder='ユーザー名を入力してください' />
        </Form.Item>
        <Form.Item name="password" label='パスワード'>
          <Input.Password placeholder='パスワードを入力してください' />
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
