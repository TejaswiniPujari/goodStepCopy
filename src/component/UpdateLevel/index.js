import './UpdateNewLevel.css'
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Select, Card, Space, Modal, Spin, Row, Col } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { baseUrl } from '../../request';
import { useParams } from "react-router-dom";
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

const UpdateNewLevel = () => {
    const params = useParams();
    const levelNumber = Number(params.levelNumber);
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [levelDescAdded, setlevelDescAdded] = useState(0);
    const [initialValues, setInitialValues] = useState({});

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
        const payload = {
            values: values,
            level: levelNumber,
        }
        const response = await fetch(`${baseUrl}/updateLevel`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload),
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
    const data = {
        "levelID": 1,
        "levelName": "my first level",
        "levelEstimateTime": 10,
        "levelBadge": 1,
        "levelRewards": "A 15 min calendly call to get your Qs answered by experts",
        "levelStatus": "Completed",
        "levelVisibility": true,
        "levelDesc": [
            {
                "title": "Your Real Role: Consumer vs Citizen",
                "note": "Level design has evolved a great deal over the past few decades. Today, it is an exercise in teamwork requiring the input from multiple designers, artists, programmers and engineers, who have to work together to create a consistent and immersive experience."
            }
        ],
        "levelSteps": [
            {
                "title": "onewgdsgdh",
                "description": "dhsbjhjdkjkj ghdsdjakjs dgshdajshad bdjhdajkjkas  dgdhajsjnad xashadjajjadhsbjhjdkjkj ghdsdjakjs dgshdajshad bdjhdajkjkas  dgdhajsjnad xashadjajjadhsbjhjdkjkj ghdsdjakjs dgshdajshad bdjhdajkjkas  dgdhajsjnad xashadjajja",
                "imgUrl": "https://www.nuclino.com/img/articles/level-design-dragon-age.jpg",
                "videoUrl": "https://www.youtube.com/watch?v=09gj5gM4V98"
            }
        ],
        "klevelQuiz": [
            {
                "question": "name?",
                "answer": "tejaswini,teju"
            }
        ],
        "olevelQuiz": [
            {
                "question": "song?",
                "options": "a,b,c",
                "answer": "a"
            }
        ],
        "clevelQuiz": [
            {
                "question": "write a story?",
                "answer": 12
            }
        ],
        "levelQuiz": [
            {
                "answer": 12,
                "question": "write a story?",
                "type": "charlength"
            },
            {
                "answer": "tejaswini,teju",
                "question": "name?",
                "type": "keyword check"
            },
            {
                "answer": "a",
                "question": "song?",
                "type": "option",
                "options": [
                    "a",
                    "b",
                    "c"
                ]
            }
        ]
    }
    const getLevlDetails = async () => {
        setLoading(true);
        const response = await fetch(`${baseUrl}/getLevelDetails`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ level: levelNumber }),
        }).then(res => res.json());

        if (response) {
            setInitialValues(response)
        }
        else {
            Modal.error({
                title: 'Failed to fetch level details',
                content: 'please try again...(refersh page)',
            });
        }
        setInitialValues(data)
        setLoading(false);
    }

    useEffect(() => {
        getLevlDetails();
    }, [])

    console.log(initialValues, 'initialValues')
    return (
        <div className='all-level'>
            <h1 style={{ textAlign: 'center' }}>Update Level {levelNumber} Details</h1>
            <br />
            <Spin spinning={loading}>
                <Row justify={'center'} >
                    <Col span={14}>
                        {initialValues.levelID === levelNumber &&
                            <Form
                                {...layout}
                                form={form}
                                name="control-hooks"
                                onFinish={onFinish}
                                initialValues={initialValues}
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
                        }
                    </Col>
                </Row>
            </Spin>
        </div>
    );
};
export default UpdateNewLevel;