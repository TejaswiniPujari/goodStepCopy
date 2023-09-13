import React, { useEffect, useState } from 'react';
import { Modal, notification } from 'antd';
import Register from './Register';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../request';

export const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('called')
        setLoading(true);
        const response = await fetch(`${baseUrl}/login`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
            body: JSON.stringify(values),
        }).then(res => res.json());

        if (response.message === "Invalid credentials") {
            Modal.error({
                title: 'Invalid Credentials',
                content: 'You have entered invalid credentials. please try again...',
            });
        }
        else if (response.message === "Server error") {
            Modal.info({
                title: 'Server Error',
                content: 'please try again...',
            });
        }
        else if (response==="Logged In Successfully") {
            notification.success({
                message: 'You logged in Successfully',
            })
            localStorage.setItem("email",  values.email);
            // localStorage.setItem("userDetails",  JSON.stringify(response));
            localStorage.setItem("logged", 'true');
            navigate('/dashboard');
        }
        setLoading(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        localStorage.setItem("logged", 'false');
    };

    useEffect(() => {
        if (localStorage.getItem("logged") === 'true') {
            navigate('/dashboard');
        }
    }, [])

    return (
        <div className='app'>
            <Register onFinish={onFinish} onFinishFailed={onFinishFailed} loading={loading} />
        </div>
    );
};

// export default Login;