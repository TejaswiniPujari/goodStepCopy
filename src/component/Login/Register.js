
import { Checkbox, Form, DatePicker, Spin, notification, Modal } from 'antd';
import './login.css';
import { useState } from 'react';
import { baseUrl } from '../../request';

const Register = ({ onFinish, onFinishFailed, loading }) => {
    const [steps, setSteps] = useState(Number(localStorage.getItem('stepNumber')));
    const [userInfo, setUserInfo] = useState({});
    const [acceptPolicy, setAcceptPolicy] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    const [step4FormLoading, setStep4FormLoading] = useState(false);

    const updateUserInfo = async (val, step) => {
        const data = userInfo;
        if (step === 5) {
            setStep4FormLoading(true);
            const response = await fetch(`${baseUrl}/register`, {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ ...data, ...val }),
            }).then(res => res.json());

            if (response.error === "Failed to create user") {
                Modal.error({
                    title: 'Failed to create user',
                    content: 'please try again...',
                });
            }
            else if (response.error === "User Already Existed") {
                Modal.info({
                    title: 'User Already Existed',
                    content: 'please login...',
                });
                setSteps(6);
            }
            else if (response.email) {
                notification.success({
                    message: 'You successfully complete registration process',
                })
                setSteps(5);
            }
            setStep4FormLoading(false);
        }
        setUserInfo({ ...data, ...val });
    }

    const savestep2Data = async (val) => {
        if (acceptPolicy) {
            const checked = await checkEmailAlreadyExitOrNot(val.email);
            if (checked) {
                updateUserInfo(val, 3);
                setSteps(3);
            }
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
    }
    const emailValidation = '/^[A-Za-z0-9+_.-]+@(.+)$/';

    const checkEmailAlreadyExitOrNot = async (email) => {
        setEmailCheck(true);
        const response = await fetch(`${baseUrl}/checkEmail`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email: email }),
        }).then(res => res.json());

        if (response.message === "User already exists..!! Try another Email Id ") {
            Modal.error({
                title: 'User already exists..!!',
                content: 'Try another Email Id...',
            });
        }
        else if (response.message === "Valid Email") {
        }
        setEmailCheck(false);
        return response.message === "Valid Email" ? true : false;
    }
    const onClickPreventDefault = (e) => {
        e.preventDefault();
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
                        <Spin spinning={emailCheck}>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                        // pattern: new RegExp(emailValidation),
                                    },
                                ]}
                            >
                                <input type='email' placeholder='Email ID' className='step2-inputBox' onClick={onClickPreventDefault} />
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
                                <input placeholder='Username' className='step2-inputBox' onClick={onClickPreventDefault} />
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
                                <input type='password' placeholder=' Password' className='step2-inputBox' onClick={onClickPreventDefault} />
                            </Form.Item>
                            <Form.Item>
                                <Checkbox onChange={(e) => { setAcceptPolicy(e.target.checked) }}> I understand and accept the Terms and Conditions and Privacy Policy</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <div className='center'>
                                    <button className='step2-primary-button' type="primary" htmlType="submit">Submit</button></div>
                            </Form.Item>
                        </Spin>
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
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your first name!',
                                },
                            ]}
                        >
                            <input placeholder='First Name' className='step3-inputBox' onClick={onClickPreventDefault} />
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your last Name!',
                                },
                            ]}
                        >
                            <input placeholder='Last Name' className='step3-inputBox' onClick={onClickPreventDefault} />
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
                    <Spin spinning={step4FormLoading}>
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
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                    <option value="Others">Others</option>
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
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Bengaluru">Bengaluru</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Pan-India">Pan-India</option>
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
                                    <option value="Student">Student</option>
                                    <option value="Self-Employed">Self-Employed</option>
                                    <option value="Saleried">Saleried</option>
                                    <option value="Social-Worker">Social-Worker</option>
                                </select>
                            </Form.Item>
                            <Form.Item>
                                <div className='center'>
                                    <button className='step2-primary-button' type="primary" htmlType="submit">Submit</button></div>
                            </Form.Item>
                        </Form>
                    </Spin>
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
            <Spin spinning={loading}>
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
                                <input type='password' placeholder='Password' className='step3-inputBox' />
                            </Form.Item>
                            <Form.Item>
                                <div className='center'><button className='step3-primary-button' type="primary" htmlType="submit">Log In</button></div>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Spin>
        }
    </>)
}

export default Register;