import {Button, Form, Input} from "antd";
import {useNavigate} from 'react-router-dom';
import {useCallback} from "react";

const Login = () => {
    const navigate = useNavigate();

    const onFinish = useCallback((values: any) => {
        navigate('/side-player');
    }, [navigate]);

    const onFinishFailed = useCallback((errorInfo: any) => {
        alert('Vui lòng nhập đầy đủ thông tin');
    }, []);

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <div className="text-center">
                <h1>Đấu trường X</h1>
            </div>
            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>

    );
};

export default Login;
