import React, { useEffect, useState } from 'react';
import { Spin } from 'antd';
import Login1 from './Login1';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState('false');
    const navigate = useNavigate();

    const onFinish = async (values) => {
        // const response = await fetch(`${BaseUrl}/login`, {
        //   method: "POST", 
        //   body: JSON.stringify(values), 
        // });
        // console.log(response,'response')
        setLoggedIn('true');
        localStorage.setItem("logged", 'true');
        navigate('/dashboard');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setLoggedIn('false');
        localStorage.setItem("logged", 'false');
    };

    // useEffect(() => {
    //   setTimeout(() => {
    //     setLoggedIn(localStorage.getItem('logged'));
    //     setLoading(false);
    //   }, [1000])
    // }, [])

    useEffect(() => {
        if (localStorage.getItem("logged") === 'true') {
            navigate('/dashboard');
        }
    }, [])

    return (
        <div className='app'>
            <Spin spinning={loading}>
                <Login1 onFinish={onFinish} onFinishFailed={onFinishFailed} />
            </Spin>
        </div>
    );
};

export default Login;