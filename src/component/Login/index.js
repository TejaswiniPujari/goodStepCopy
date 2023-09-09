import React, { useEffect, useState } from 'react';
import { Modal, notification } from 'antd';
import Login1 from './Login1';
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../../request';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        const response = await fetch(`${baseUrl}/login`, {
            method: "POST",
            mode: 'no-cors',
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(values),
        }).then(res => res.json()) || {};

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
        else if (response.email) {
            notification.success({
                message: 'You logged in Successfully',
            })
            setLoading(false);
            localStorage.setItem("logged", 'true');
            navigate('/dashboard');
        }
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
            <Login1 onFinish={onFinish} onFinishFailed={onFinishFailed} loading={loading} />
        </div>
    );
};

export default Login;