import './addNewLevel.css'
import React, { useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Card, Space, Modal, notification, Spin, Row, Col } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { baseUrl } from '../../request';
const { Option } = Select;

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const AddNewLevel = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [levelDescAdded, setlevelDescAdded] = useState(0);
    const [levelQuizType, setLevelQuizType] = useState('');
    const onFinish = async (values) => {
        setLoading(true);
        if (values.levelQuiz && values.levelQuiz.length) {
            const updatedLevelQuiz = values.levelQuiz.map(item => {
                if (item.type === "keyword check") {
                    return {
                        answer: item.answer.split(","),
                        question: "sgghsh",
                        type: "keyword check"
                    }
                }
                else {
                    return item;
                }
            })
            values.levelQuiz = updatedLevelQuiz;
        }
        const response = await fetch(`${baseUrl}/addLevel`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(values),
        }).then(res => res.json());

        if (response) {
            Modal.success({
                title: 'You successfully added level',
            });
            onReset();
        }
        else {
            Modal.error({
                title: 'Failed to create level',
                content: 'please try again...',
            });
        }
        setLoading(false);
    };
    const onReset = () => {
        form.resetFields();
    };
    return (
        <div className='all-level'>
            <Spin spinning={loading}>
                <Row justify={'center'} >
                    <Col span={14}>
                        <Form
                            {...layout}
                            form={form}
                            name="control-hooks"
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="levelID"
                                label="level ID"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="levelName"
                                label="level Name"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="levelEstimateTime"
                                label="Estimated time to complete"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item
                                name="levelBadge"
                                label="level Badge"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="levelRewards"
                                label="level Rewards"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="levelStatus"
                                label="levelStatus"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select level status"
                                    allowClear
                                >
                                    <Option value="Completed">Completed</Option>
                                    <Option value="Active">Active</Option>
                                    <Option value="inactive">Upcoming</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="levelVisibility"
                                label="level Visibility"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Select
                                    placeholder="Select a option and change input text above"
                                    allowClear
                                >
                                    <Option value={true}>Visible</Option>
                                    <Option value={false}>Not Visible</Option>
                                </Select>
                            </Form.Item>








                            <Form.List name="levelDesc">
                                {(fields, { add, remove }) => (
                                    <div
                                        style={{
                                            display: 'flex',
                                            rowGap: 16,
                                            flexDirection: 'column',
                                        }}
                                    >
                                        {fields.map((field) => (
                                            <Card
                                                size="small"
                                                title={`level Description`}
                                                key={field.key}
                                                extra={
                                                    <CloseOutlined
                                                        onClick={() => {
                                                            remove(field.name);
                                                            setlevelDescAdded(levelDescAdded - 1)
                                                        }}
                                                    />
                                                }
                                            >
                                                <Form.Item label="Title" name={[field.name, 'title']} required={true}>
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="Note" name={[field.name, 'note']} required={true}>
                                                    <Input />
                                                </Form.Item>
                                                {/* Nest Form.List */}
                                                <Form.Item label="Descriptions" required={true}>
                                                    <Form.List name={[field.name, 'descriptions']} >
                                                        {(subFields, subOpt) => (
                                                            <div
                                                                style={{
                                                                    display: 'flex',
                                                                    flexDirection: 'column',
                                                                    rowGap: 16,
                                                                }}
                                                            >
                                                                {subFields.map((subField) => (
                                                                    <Space key={subField.key}>
                                                                        <Form.Item noStyle name={[subField.name, 'title']} required={true}>
                                                                            <Input placeholder="title" />
                                                                        </Form.Item>
                                                                        <Form.Item noStyle name={[subField.name, 'content']} required={true}>
                                                                            <Input placeholder="content" />
                                                                        </Form.Item>
                                                                        <CloseOutlined
                                                                            onClick={() => {
                                                                                subOpt.remove(subField.name);
                                                                            }}
                                                                        />
                                                                    </Space>
                                                                ))}
                                                                <Button type="dashed" onClick={() => subOpt.add()} block>
                                                                    + Add Sub Description
                                                                </Button>
                                                            </div>
                                                        )}
                                                    </Form.List>
                                                </Form.Item>
                                            </Card>
                                        ))}
                                        {levelDescAdded === 0 &&
                                            <Button type="dashed" onClick={() => { add(); setlevelDescAdded(levelDescAdded + 1) }} block>
                                                + Add level Description
                                            </Button>
                                        }
                                    </div>
                                )}
                            </Form.List>

                            <br />
                            <Form.List name="levelSteps">
                                {(fields, { add, remove }) => (
                                    <div
                                        style={{
                                            display: 'flex',
                                            rowGap: 16,
                                            flexDirection: 'column',
                                        }}
                                    >
                                        {fields.map((field) => (
                                            <Card
                                                size="small"
                                                title={`level Step ${field.name + 1}`}
                                                key={field.key}
                                                extra={
                                                    <CloseOutlined
                                                        onClick={() => {
                                                            remove(field.name);
                                                        }}
                                                    />
                                                }
                                            >
                                                <Form.Item label="title" name={[field.name, 'title']} required={true}>
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="description" name={[field.name, 'description']} required={true}>
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="imgUrl" name={[field.name, 'imgUrl']} >
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="videoUrl" name={[field.name, 'videoUrl']}>
                                                    <Input />
                                                </Form.Item>
                                            </Card>
                                        ))}

                                        <Button type="dashed" onClick={() => add()} block>
                                            + Add level Step
                                        </Button>
                                    </div>
                                )}
                            </Form.List>
                            <br />
                            <Form.List name="levelQuiz">
                                {(fields, { add, remove }) => (
                                    <div
                                        style={{
                                            display: 'flex',
                                            rowGap: 16,
                                            flexDirection: 'column',
                                        }}
                                    >
                                        {fields.map((field) => (
                                            <Card
                                                size="small"
                                                title={`Question ${field.name + 1}`}
                                                key={field.key}
                                                extra={
                                                    <CloseOutlined
                                                        onClick={() => {
                                                            remove(field.name);
                                                        }}
                                                    />
                                                }
                                            >
                                                <Form.Item label="question" name={[field.name, 'question']}>
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label="type" name={[field.name, 'type']}>
                                                    <Select
                                                        placeholder="Select type"
                                                        allowClear
                                                        onChange={(type) => { setLevelQuizType(type); console.log(type) }}
                                                    >
                                                        <Option value="keyword check">keyword check</Option>
                                                        <Option value="option">options</Option>
                                                        <Option value="charlength">charlength</Option>
                                                    </Select>
                                                </Form.Item>
                                                {levelQuizType &&
                                                    <Form.Item label={levelQuizType === "charlength" ? "Enter min char length" : "Enter Answer seperted by ,"} name={[field.name, 'answer']}>
                                                        {(levelQuizType === "keyword check" || levelQuizType === "option") &&
                                                            <Input />
                                                        }
                                                        {(levelQuizType === "charlength") &&
                                                            <InputNumber />
                                                        }
                                                    </Form.Item>
                                                }
                                            </Card>
                                        ))}

                                        <Button type="dashed" onClick={() => add()} block>
                                            + Add Question
                                        </Button>
                                    </div>
                                )}
                            </Form.List>

                            <br />
                            <Form.Item {...tailLayout}>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                                <Button htmlType="button" onClick={onReset}>
                                    Reset
                                </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </Spin>
        </div>
    );
};
export default AddNewLevel;