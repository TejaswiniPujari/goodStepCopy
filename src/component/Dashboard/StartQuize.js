

import React, { useState } from 'react';
import { Form, Input, Modal, Row, Col, notification, Spin, Select } from 'antd';
import PrimaryBtn from '../PrimaryBtn';
import './levelPage.css';
import { baseUrl } from '../../request';
import { useNavigate } from 'react-router-dom';

const StartQuize = ({ questions, levelID, userId }) => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const showModal = () => {
        form.resetFields();
        setOpen(true);
    };

    const userDetails = JSON.parse(localStorage.getItem("userDetails"));

    const onFinish = async (val) => {
        setLoading(true);
        const payload = {
            levelID: levelID,
            email: userDetails.email,
            answers: Object.values(val)
        }
        const response = await fetch(`${baseUrl}/levelsubmit`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload),
        }).then(res => res.json()) || {};

        if (response.message === "Level Not Completed") {
            Modal.error({
                title: 'Incorrect answers!',
                content: 'please try again...',
            });
        }
        else if (response.message === "Server error") {
            Modal.info({
                title: 'Server Error',
                content: 'please try again...',
            });
        }
        else if (response.message === "Level Completed") {
            notification.success({
                message: 'Level completed successfully',
            })
            navigate(`/dashboard`);
        }
        setOpen(false);
        setLoading(false);
    }
    return (
        <div className='quizemodal'>
            <PrimaryBtn
                title={'Start Quiz'}
                colorh={'white'}
                backgroundh={'#386AA3'}
                background={'#386AA3'}
                color={'white'}
                border={'2px solid #386AA3'}
                onClick={showModal}
            />
            <Modal
                open={open}
                title={`Level ${levelID} Quiz`}
                footer={null}
                onCancel={() => { setOpen(false); }}
            >
                <Spin spinning={loading}>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >

                        {questions.map((item) => {
                            if (item.type === "keyword check") {
                                return (<Form.Item name={item.question} label={item.question}
                                    rules={[
                                        {
                                            required: true,
                                            message: '',
                                        },
                                    ]} tooltip="This is a required field">
                                    <Input placeholder="enter answer..." />
                                </Form.Item>);
                            }
                            else if (item.type === 'option') {
                                return (<Form.Item name={item.question} label={item.question}
                                    rules={[
                                        {
                                            required: true,
                                            message: '',
                                        },
                                    ]} tooltip="This is a required field">
                                    <Select placeholder='I identify as'>
                                        {item.options.map(val => <Select.Option value={val}>{val}</Select.Option>)}
                                    </Select>
                                </Form.Item>)
                            }
                            else if (item.type === "charlength") {
                                return (<Form.Item name={item.question} label={item.question}
                                    rules={[
                                        {
                                            required: true,
                                            message: '',
                                        },
                                    ]} tooltip="This is a required field">
                                    <Input placeholder="enter answer..." />
                                </Form.Item>);
                            }
                        }
                        )}

                        <Form.Item>
                            <Row justify={'center'}>
                                <Col span={12}>
                                    <PrimaryBtn
                                        title={'Submit'}
                                        colorh={'white'}
                                        backgroundh={'#386AA3'}
                                        background={'#386AA3'}
                                        color={'white'}
                                        border={'2px solid #386AA3'}
                                    />
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </Spin>
            </Modal>
        </div>
    );
};
export default StartQuize;