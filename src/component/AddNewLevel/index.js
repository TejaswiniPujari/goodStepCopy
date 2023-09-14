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

    const onFinish = async (values) => {
        console.log(values)
        setLoading(true);
        let clevelQuiz = [];
        let klevelQuiz = [];
        let olevelQuiz = [];

        if (values.clevelQuiz) {
            clevelQuiz = (values.clevelQuiz).map(item => {
                return {
                    answer: item.answer,
                    question: item.question,
                    type: "charlength"
                }
            })
        }
        if (values.klevelQuiz) {
            klevelQuiz = (values.klevelQuiz).map(item => {
                return {
                    answer: item.answer,
                    question: item.question,
                    type: "keyword check"
                }
            })
        }
        if (values.olevelQuiz) {
            olevelQuiz = (values.olevelQuiz).map(item => {
                return {
                    answer: item.answer,
                    question: item.question,
                    type: "option",
                    options: item.options.split(",")
                }
            })
        }
        values.levelQuiz = [...clevelQuiz, ...klevelQuiz, ...olevelQuiz];

        // delete values[clevelQuiz];
        // delete values[klevelQuiz];
        // delete values[olevelQuiz];

        console.log(values)

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
            <h1 style={{textAlign:'center'}}>Add New Leavel</h1>
            <br/>
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
                                tooltip="if you want to enter level 1 details then enter 1 like wise for level2 details enter 2 "
                            >
                                <InputNumber />
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
                                tooltip="enter time in minute to complete level"
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
                                tooltip="if you want to enter level 1 bagde then enter 1 like wise for level2 badge enter 2 "
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item
                                name="levelRewards"
                                label="level Rewards"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                                tooltip="enter short statement related to rewards"
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
                                tooltip="please select active for level1 other levels as upcoming"
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
                                tooltip="please select Visible for level1 other levels as Not Visible"
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
                            <br />
                            <div>Add levelQuiz</div>
                            <br />
                            <div>Add Keyword Check Questions </div>
                            <br />
                            <Form.List name="klevelQuiz">
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
                                                <Form.Item label={"Enter Answer seperted by ,"} name={[field.name, 'answer']}>
                                                    <Input />
                                                </Form.Item>
                                            </Card>
                                        ))}

                                        <Button type="dashed" onClick={() => add()} block>
                                            + Add Question
                                        </Button>
                                    </div>
                                )}
                            </Form.List>
                            <br />
                            <div>Add Options Type Questions </div>
                            <br />
                            <Form.List name="olevelQuiz">
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
                                                <Form.Item label={"Enter Options list seperted by ,"} name={[field.name, 'options']}>
                                                    <Input />
                                                </Form.Item>
                                                <Form.Item label={"Enter correct option"} name={[field.name, 'answer']}>
                                                    <Input />
                                                </Form.Item>
                                            </Card>
                                        ))}

                                        <Button type="dashed" onClick={() => add()} block>
                                            + Add Question
                                        </Button>
                                    </div>
                                )}
                            </Form.List>
                            <br />
                            <div>Add Charlength Type Questions </div>
                            <br />
                            <Form.List name="clevelQuiz">
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
                                                <Form.Item label={"Enter min char length"} name={[field.name, 'answer']}>
                                                    <InputNumber />
                                                </Form.Item>
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