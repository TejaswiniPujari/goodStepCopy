

import React, { useState } from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Button, Form, Input, Radio, Tag, Modal } from 'antd';
const customizeRequiredMark = (label, { required }) => (
    <>
        {required ? <Tag color="error">Required</Tag> : <Tag color="warning">optional</Tag>}
        {label}
    </>
);
const StartQuize = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState('optional');
    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue);
    };
    const showModal = () => {
        form.resetFields();
        setOpen(true);
    };
    const onFinish = (val) => {
        setOpen(false);
        console.log(val);
    }
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Open Quiz
            </Button>
            <Modal
                open={open}
                title="Level 1 Quiz"
                footer={null}
                onCancel={() => { setOpen(false); }}
            >
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={null}
                >
                    <Form.Item name="whats my name?" label="whats my name?"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter answer!',
                            },
                        ]} tooltip="This is a required field">
                        <Input placeholder="enter answer..." />
                    </Form.Item>
                    <Form.Item name="whats my last name?" label="whats my last name?"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter answer!',
                            },
                        ]} tooltip="This is a required field">
                        <Input placeholder="enter answer..." />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType='submit'>Submit</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
export default StartQuize;