
import { Checkbox, Form ,DatePicker} from 'antd';
import './login.css';
import { useState } from 'react';
import { BaseUrl } from '../../Constant';
import $ from 'jquery';
import App from '../../App';
import { register } from '../../request';

const Login1 = ({ onFinish, onFinishFailed }) => {
    const [steps, setSteps] = useState(1);
    const [userInfo, setUserInfo] = useState({});
    const [acceptPolicy, setAcceptPolicy] = useState(false);

    const updateUserInfo = async (val, step) => {
        const data = userInfo;
        if (step === 5) {
            register({ ...data, ...val });
        }
        setUserInfo({ ...data, ...val });
    }

    const savestep2Data = (val) => {
        if (acceptPolicy) {
            updateUserInfo(val, 3);
            setSteps(3);
        }
        else {
            alert('select checkbox')
        }
    }

    const savestep3Data = (val) => {
        updateUserInfo(val, 4);
        setSteps(4);
    }

    const savestep4Data = (val) => {
        updateUserInfo(val, 5);
        setSteps(5);
    }

    return (<>
        {steps === 1 &&
            <div className='step1-page'>
                <div className='login-form'>
                    <div className='step1-title center'>Hey there! </div>
                    <div className='step1-des center'>We have curated a 3 minute survey to get you started on your GoodStep journey</div>
                    <div className='center'><button className='step1-primary-button' onClick={() => { setSteps(2) }}>Let’s go</button></div>
                </div>
            </div>
        }
        {steps === 2 &&
            <div className='step2-page'>
                <div className='login-form'>
                    <div className='step2-title center'>Sign up to take action!</div>
                    <div className='step2-des center'>Create your account while we put together do-good actions specially for you!</div>

                    <Form
                        onFinish={savestep2Data}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <input type='email' placeholder='Email ID' className='step2-inputBox' />
                        </Form.Item>
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <input placeholder=' Username' className='step2-inputBox' />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <input type='password' placeholder=' Password' className='step2-inputBox' />
                        </Form.Item>
                        <Form.Item>
                            <Checkbox onChange={(e) => { setAcceptPolicy(e.target.checked) }}> I understand and accept the Terms and Conditions and Privacy Policy</Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <div className='center'>
                                <button className='step2-primary-button' type="primary" htmlType="submit">Submit</button></div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        }
        {steps === 3 &&
            <div className='login-box'>
                <div className='login-form'>
                    <div className='login-title center'>Let's get started! </div>
                    <Form
                        onFinish={savestep3Data}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your name!',
                                },
                            ]}
                        >
                            <input placeholder='Your name' className='step3-inputBox' />
                        </Form.Item>

                        <Form.Item
                            name="dob"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your date of birth!',
                                },
                            ]}
                        >
                            <DatePicker className='step3-inputBox' />
                            {/* <input placeholder=' Date of birth' /> */}
                        </Form.Item>
                        <Form.Item>
                            <div className='center'><button className='step3-primary-button' type="primary" htmlType="submit">Next</button></div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        }
        {steps === 4 &&
            <div className='step2-page'>
                <div className='login-form'>
                    <div className='step4-title center'>Getting to know you better</div>

                    <Form
                        onFinish={savestep4Data}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="identity"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select identity!',
                                },
                            ]}
                        >
                            <select
                                placeholder='I identify as' className='step2-inputBox'
                            >
                                <option value="">I identify as</option>
                                <option value="Salaried">Salaried</option>
                            </select>
                        </Form.Item>
                        <Form.Item
                            name="liveIn"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select location!',
                                },
                            ]}
                        >
                            <select
                                placeholder='I live in' className='step2-inputBox'
                            >
                                <option value="">I live in</option>
                                <option value="Maharashtra">Maharashtra</option>
                            </select>
                        </Form.Item>
                        <Form.Item
                            name="occupation"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select occupation!',
                                },
                            ]}
                        >
                            <select
                                placeholder='My occupation is' className='step2-inputBox'
                            >
                                <option value="">My occupation is</option>
                                <option value="BE">BE</option>
                            </select>
                        </Form.Item>
                        <Form.Item>
                            <div className='center'>
                                <button className='step2-primary-button' type="primary" htmlType="submit">Submit</button></div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        }
        {steps === 5 &&
            <div className='step1-page'>
                <div className='login-form'>
                    <div className='step1-title center'>Welcome!</div>
                    <div className='step1-des center'>You successfully complete registration process</div>
                    <div className='center'><button className='step1-primary-button' onClick={() => { setSteps(6) }}>Get started</button></div>
                </div>
            </div>
        }
        {steps === 6 &&
            <div className='login-box'>
                <div className='login-form'>
                    <div className='login-title center'>Login</div>
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                        >
                            <input type='email' placeholder='Email ID' className='step3-inputBox' />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <input placeholder='Password' className='step3-inputBox' />
                        </Form.Item>
                        <Form.Item>
                            <div className='center'><button className='step3-primary-button' type="primary" htmlType="submit">Log In</button></div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        }
    </>)
}

export default Login1;