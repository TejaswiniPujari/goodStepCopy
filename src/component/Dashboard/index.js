
import React, { useEffect, useRef, useState } from 'react';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { Col, Row, Card, Carousel, Modal, Spin, Tabs, Image, Tooltip } from 'antd';
import './dashboard.css';
import userImg from '../../img/profileImg.jpg';
import Level1Img from '../../img/level1.jpg';
import newEvent from '../../img/newevent.jpg';
import badge1 from '../../img/badge/1.png';
import badge2 from '../../img/badge/2.png';
import badge3 from '../../img/badge/3.png';
import badge4 from '../../img/badge/4.png';
import badge5 from '../../img/badge/5.png';
import badge6 from '../../img/badge/6.png';
import badge7 from '../../img/badge/7.png';
import badge8 from '../../img/badge/8.png';
import badge9 from '../../img/badge/9.png';
import badge10 from '../../img/badge/10.png';
import DashboardHeader from './DashboardHeader.js';
import { NavLink, useNavigate } from 'react-router-dom';
import { baseUrl } from '../../request';
const cardColorCode = ['#6758F2', '#71A2D9', '#707CD8', '#6758F2', '#845ED2', '#A47CF8'];

const Dashboard = () => {
    const slider = useRef(null);
    const alllevelsCarousel = useRef(null);
    const completedlevelsCarousel = useRef(null);
    const activelevelsCarousel = useRef(null);
    const upcominglevelsCarousel = useRef(null);
    const sliderxs = useRef(null);
    const [loading, setLoading] = useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const [status, setStatus] = useState('All');
    const [lcount, setLcount] = useState(0);
    const imgCollection = [badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8, badge9, badge10];
    const navigate = useNavigate();



    const LevelCard = ({ imgLink, title, description, number, visibility }) => {
        console.log(cardColorCode[Math.round((number - 1) % 6)], (number - 1) / 6, number)
        return (
            <>
                {visibility ?
                    // <NavLink to={`/dashboard/level/${number}`}>
                    //     <Card
                    //         hoverable
                    //         cover={<img alt="example" src={imgLink} height={'50%'} />}
                    //         style={{ width: '100%' }}

                    //     >
                    //         <div className='all-level-list-title'> {title}</div>
                    //         <div className='all-level-list-des'>{description}</div>
                    //     </Card>
                    // </NavLink>
                    <NavLink to={`/dashboard/level/${number}`}>
                        <Card
                            hoverable
                            style={{ width: '100%', background: cardColorCode[Math.round((number - 1) % 6)], color: 'white' }}
                            className='levelCard'
                        >
                            <div className='all-level-list-title'> {title}</div>
                            <div className='all-level-list-des'>{description}</div>
                        </Card>
                    </NavLink>
                    :
                    // <Card
                    //     hoverable
                    //     cover={<img alt="example" src={imgLink} height={'50%'} />}
                    //     style={{ filter: "grayscale(1)" }}
                    // >
                    //     <div className='all-level-list-title'> {title}</div>
                    //     <div className='all-level-list-des'>{description}</div>
                    // </Card>
                    <Card
                        hoverable
                        style={{ background: cardColorCode[Math.round((number - 1) % 6)], color: 'white' }}
                        className='levelCard'
                    >
                        <div className='all-level-list-title'> {title}</div>
                        <div className='all-level-list-des'>{description}</div>
                    </Card>
                }
            </>
        )
    }

    const onChange = (key) => {
        console.log(key);
        setStatus(key)
    };


    const fetchData = async () => {
        setLoading(true);
        const response = await fetch(`${baseUrl}/getUserInfo`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email: localStorage.getItem("email") }),
        }).then(res => res.json());

        if (response.error === "User Session Expired") {
            Modal.error({
                title: 'User Session Expired',
                content: 'Please try again...',
            });
        }
        else if (response.error === "Server error") {
            Modal.info({
                title: 'Server Error',
                content: 'please try again...',
            });
        }
        else if (response) {
            localStorage.setItem("userDetails", JSON.stringify(response));
            setUserDetails(JSON.parse(localStorage.getItem("userDetails")));
        }
        const levelCount = await fetch(`${baseUrl}/getLevelNumber`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email: localStorage.getItem("email") }),
        }).then(res => res.json());

        if (levelCount.message === "user not found") {
            Modal.error({
                title: 'User not found',
            });
            navigate('/');
            localStorage.setItem("logged", 'false');
        }
        else if (levelCount.count) {
            setLcount(levelCount.count);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
        setStatus("All")
    }, [])

    const items = [
        {
            key: 'All',
            label: 'All',
        },
        {
            key: 'Completed',
            label: 'Completed',
        },
        {
            key: 'Active',
            label: 'Active',
        },
        {
            key: 'inactive',
            label: 'Upcoming'
        },
    ];

    return (
        <div className='dashboard'>
            <Spin spinning={loading}>
                {userDetails && userDetails.email &&
                    <>
                        <DashboardHeader />
                        <div className='dashboard-content'>
                            <div className='dashboard-welcome-section'>
                                <Row align={'middle'}>
                                    <Col xs={6} md={4} lg={2}>
                                        {/* <img src={userImg} alt='' width={'80%'} style={{ borderRadius: '50%' }}></img> */}
                                        <div className='profileName'>{(userDetails.firstName.split("")[0]).toUpperCase()}{(userDetails.lastName.split("")[0]).toUpperCase()}</div>
                                    </Col>
                                    <Col xs={12} md={16} lg={20} className='dashboard-welcome-txt'>
                                        Hello {userDetails ? userDetails.firstName : ''}, Welcome!
                                    </Col>
                                    <Col xs={6} md={4} lg={2} className='current-level-number'>
                                        <div className='cln'>{lcount === 0 ? 1 : lcount}</div>
                                        Level
                                    </Col>
                                </Row>
                            </div>
                            <div className='all-level-list'>
                                <div className='all-levels-txt'>Badges You Have Won</div>
                                <Row>
                                    {userDetails.levels && userDetails.levels.map((element, key) => {
                                        return (
                                            <Col xs={4} md={2}>
                                                <Image src={imgCollection[key]} className={element.levelStatus === "Completed" ? '' : 'grayscale'}></Image>
                                            </Col>)
                                    })}
                                </Row>
                            </div>
                            <div className='all-level-list'>
                                <div className='all-levels-txt'>All Levels</div>
                                <Tabs defaultActiveKey={status} items={items} onChange={onChange} />
                                {status === 'All' &&
                                    <Row>
                                        <Col xs={24} md={0}>
                                            <Row justify={'space-between'} align={'middle'}>
                                                <Col span={2}>
                                                    <LeftCircleFilled onClick={() => alllevelsCarousel.current.prev()} className='left-right-arrow' />
                                                </Col>
                                                <Col span={19}>
                                                    <Carousel ref={alllevelsCarousel} dots={null}>
                                                        {userDetails.levels.length ? userDetails.levels.map((item, key) => {
                                                            return (<div className='all-level-list-card'>
                                                                <LevelCard
                                                                    imgLink={Level1Img}
                                                                    title={`Level ${Number(item.levelID)}`}
                                                                    description={item.levelName}
                                                                    number={Number(item.levelID)}
                                                                    visibility={item.levelVisibility}
                                                                />

                                                            </div>)
                                                        }) : <div className="no-data-found">No Data Found</div>}
                                                    </Carousel>
                                                </Col>
                                                <Col span={2}>
                                                    <RightCircleFilled onClick={() => alllevelsCarousel.current.next()} className='left-right-arrow' style={{ textAlign: 'end' }} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={0} md={24}>
                                            <Row gutter={[32, 32]}>
                                                {userDetails.levels.length ? userDetails.levels.map((item, key) => {
                                                    return (<Col span={6} className='all-level-list-card'>
                                                        <LevelCard
                                                            imgLink={Level1Img}
                                                            title={`Level ${Number(item.levelID)}`}
                                                            description={item.levelName}
                                                            number={Number(item.levelID)}
                                                            visibility={item.levelVisibility}
                                                        />
                                                    </Col>)
                                                }) : <div className="no-data-found">No Data Found</div>}
                                            </Row>
                                        </Col>
                                    </Row>
                                }
                                {status === 'Completed' &&
                                    <Row>
                                        <Col xs={24} md={0}>
                                            <Row justify={'space-between'} align={'middle'}>
                                                <Col span={2}>
                                                    <LeftCircleFilled onClick={() => completedlevelsCarousel.current.prev()} className='left-right-arrow' />
                                                </Col>
                                                <Col span={19}>
                                                    <Carousel ref={completedlevelsCarousel} dots={null}>
                                                        {userDetails.levels.filter(item => item.levelStatus === "Completed").length ? userDetails.levels.filter(item => item.levelStatus === "Completed").map((item, key) => {
                                                            return (<div className='all-level-list-card'>
                                                                <LevelCard
                                                                    imgLink={Level1Img}
                                                                    title={`Level ${Number(item.levelID)}`}
                                                                    description={item.levelName}
                                                                    number={Number(item.levelID)}
                                                                    visibility={item.levelVisibility}
                                                                />
                                                            </div>)
                                                        }) : <div className="no-data-found">No Data Found</div>}
                                                    </Carousel>
                                                </Col>
                                                <Col span={2}>
                                                    <RightCircleFilled onClick={() => completedlevelsCarousel.current.next()} className='left-right-arrow' style={{ textAlign: 'end' }} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={0} md={24}>
                                            <Row gutter={[32, 32]}>
                                                {userDetails.levels.filter(item => item.levelStatus === "Completed").length ? userDetails.levels.filter(item => item.levelStatus === "Completed").map((item, key) => {
                                                    return (<Col span={6} className='all-level-list-card'>
                                                        <LevelCard
                                                            imgLink={Level1Img}
                                                            title={`Level ${Number(item.levelID)}`}
                                                            description={item.levelName}
                                                            number={Number(item.levelID)}
                                                            visibility={item.levelVisibility}
                                                        />
                                                    </Col>)
                                                }) : <div className="no-data-found">No Data Found</div>}
                                            </Row>
                                        </Col>
                                    </Row>
                                }
                                {status === 'Active' &&
                                    <Row>
                                        <Col xs={24} md={0}>
                                            <Row justify={'space-between'} align={'middle'}>
                                                <Col span={2}>
                                                    <LeftCircleFilled onClick={() => activelevelsCarousel.current.prev()} className='left-right-arrow' />
                                                </Col>
                                                <Col span={19}>
                                                    <Carousel ref={activelevelsCarousel} dots={null}>
                                                        {userDetails.levels.filter(item => item.levelStatus === "Active").length ? userDetails.levels.filter(item => item.levelStatus === "Active").map((item, key) => {
                                                            return (<div className='all-level-list-card'>
                                                                <LevelCard
                                                                    imgLink={Level1Img}
                                                                    title={`Level ${Number(item.levelID)}`}
                                                                    description={item.levelName}
                                                                    number={Number(item.levelID)}
                                                                    visibility={item.levelVisibility}
                                                                />
                                                            </div>)
                                                        }) : <div className="no-data-found">No Data Found</div>}
                                                    </Carousel>
                                                </Col>
                                                <Col span={2}>
                                                    <RightCircleFilled onClick={() => activelevelsCarousel.current.next()} className='left-right-arrow' style={{ textAlign: 'end' }} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={0} md={24}>
                                            <Row gutter={[32, 32]}>
                                                {userDetails.levels.filter(item => item.levelStatus === "Active").length ? userDetails.levels.filter(item => item.levelStatus === "Active").map((item, key) => {
                                                    return (<Col span={6} className='all-level-list-card'>
                                                        <LevelCard
                                                            imgLink={Level1Img}
                                                            title={`Level ${Number(item.levelID)}`}
                                                            description={item.levelName}
                                                            number={Number(item.levelID)}
                                                            visibility={item.levelVisibility}
                                                        />
                                                    </Col>)
                                                }) : <div className="no-data-found">No Data Found</div>}
                                            </Row>
                                        </Col>
                                    </Row>
                                }
                                {status === 'inactive' &&
                                    <Row>
                                        <Col xs={24} md={0}>
                                            <Row justify={'space-between'} align={'middle'}>
                                                <Col span={2}>
                                                    <LeftCircleFilled onClick={() => upcominglevelsCarousel.current.prev()} className='left-right-arrow' />
                                                </Col>
                                                <Col span={19}>
                                                    <Carousel ref={upcominglevelsCarousel} dots={null}>
                                                        {userDetails.levels.filter(item => item.levelStatus === "inactive").length ? userDetails.levels.filter(item => item.levelStatus === "inactive").map((item, key) => {
                                                            return (<div className='all-level-list-card'>
                                                                <LevelCard
                                                                    imgLink={Level1Img}
                                                                    title={`Level ${Number(item.levelID)}`}
                                                                    description={item.levelName}
                                                                    number={Number(item.levelID)}
                                                                    visibility={item.levelVisibility}
                                                                />
                                                            </div>)
                                                        }) : <div className="no-data-found">No Data Found</div>}
                                                    </Carousel>
                                                </Col>
                                                <Col span={2}>
                                                    <RightCircleFilled onClick={() => upcominglevelsCarousel.current.next()} className='left-right-arrow' style={{ textAlign: 'end' }} />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={0} md={24}>
                                            <Row gutter={[32, 32]}>
                                                {userDetails.levels.filter(item => item.levelStatus === "inactive").length ? userDetails.levels.filter(item => item.levelStatus === "inactive").map((item, key) => {
                                                    return (<Col span={6} className='all-level-list-card'>
                                                        <LevelCard
                                                            imgLink={Level1Img}
                                                            title={`Level ${Number(item.levelID)}`}
                                                            description={item.levelName}
                                                            number={Number(item.levelID)}
                                                            visibility={item.levelVisibility}
                                                        />
                                                    </Col>)
                                                }) : <div className="no-data-found">No Data Found</div>}
                                            </Row>
                                        </Col>
                                    </Row>
                                }
                            </div>
                            {/* <div>
                                <div className='all-levels-txt'>What’s new on Goodstep</div>
                                <Row>
                                    <Col xs={24} md={0}>
                                        <Row className='new-goodstep' align={'middle'} justify={'space-between'}>
                                            <Col span={2}>
                                                <LeftCircleFilled onClick={() => sliderxs.current.prev()} className='left-right-arrow' />
                                            </Col>
                                            <Col span={16}>
                                                <Carousel dots={null} ref={sliderxs} >
                                                    <div>
                                                        <img src={newEvent} alt='' width={'100%'}></img>
                                                    </div>
                                                    <div>
                                                        <img src={newEvent} alt='' width={'100%'}></img>
                                                    </div>
                                                    <div>
                                                        <img src={newEvent} alt='' width={'100%'}></img>
                                                    </div>
                                                </Carousel>
                                            </Col>
                                            <Col span={2}>
                                                <RightCircleFilled onClick={() => sliderxs.current.next()} className='left-right-arrow' />
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xs={0} md={24}>
                                        <Row className='new-goodstep' align={'middle'}>
                                            <Col xs={2} lg={1}>
                                                <LeftCircleFilled onClick={() => slider.current.prev()} className='left-right-arrow' />
                                            </Col>
                                            <Col xs={20} lg={22}>
                                                <Carousel dots={null} ref={slider} >
                                                    <div>
                                                        <Row justify={'space-evenly'}>
                                                            <Col span={7}>
                                                                <img src={newEvent} alt='' width={'100%'}></img>
                                                            </Col>
                                                            <Col span={7}>
                                                                <img src={newEvent} alt='' width={'100%'}></img>
                                                            </Col>
                                                            <Col span={7}>
                                                                <img src={newEvent} alt='' width={'100%'}></img>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                    <div>
                                                        <Row justify={'space-evenly'}>
                                                            <Col span={7}>
                                                                <img src={newEvent} alt='' width={'100%'}></img>
                                                            </Col>
                                                            <Col span={7}>
                                                                <img src={newEvent} alt='' width={'100%'}></img>
                                                            </Col>
                                                            <Col span={7}>
                                                                <img src={newEvent} alt='' width={'100%'}></img>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </Carousel>
                                            </Col>
                                            <Col xs={2} lg={1}>
                                                <RightCircleFilled onClick={() => slider.current.next()} className='left-right-arrow' />
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div> */}
                        </div>
                    </>
                }
            </Spin>
        </div>
    );
};
export default Dashboard;