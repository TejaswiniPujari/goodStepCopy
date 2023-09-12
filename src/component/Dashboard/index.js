
import React, { useEffect, useRef, useState } from 'react';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { Col, Row, Card, Carousel, Modal, notification, Spin } from 'antd';
import './dashboard.css';
import profileImg from '../../img/step-1.png';
import Level1Img from '../../img/level1.jpg';
import newEvent from '../../img/newevent.jpg';
import DashboardHeader from './DashboardHeader.js';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../../request';

const Dashboard = () => {
    const slider = useRef(null);
    const [loading, setLoading] = useState(false);
    const[userDetails,setUserDetails] = useState(null);

    const LevelCard = ({ imgLink, title, description, number, visibility }) => {
        return (
            <>
                {visibility ?
                    <NavLink to={`/dashboard/level/${number}`}>
                        <Card
                            hoverable
                            cover={<img alt="example" src={imgLink} height={'50%'} />}

                        >
                            <div className='all-level-list-title'> {title}</div>
                            <div className='all-level-list-des'>{description}</div>
                        </Card>
                    </NavLink>
                    :
                    <Card
                        hoverable
                        cover={<img alt="example" src={imgLink} height={'50%'} />}
                        style={{ filter: "grayscale(1)" }}
                    >
                        <div className='all-level-list-title'> {title}</div>
                        <div className='all-level-list-des'>{description}</div>
                    </Card>
                }
            </>
        )
    }

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
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            <Spin spinning={loading}>
            {userDetails && userDetails.email &&
                <>
                    <DashboardHeader />
                    <div className='dashboard-content'>
                        <div className='dashboard-welcome-section'>
                            <Row align={'middle'}>
                                <Col xs={6} md={4} lg={2}>
                                    <img src={profileImg} alt='' width={'80%'}></img>
                                </Col>
                                <Col xs={12} md={16} lg={20} className='dashboard-welcome-txt'>
                                    Hello {userDetails ? userDetails.username : ''}, Welcome!
                                </Col>
                                <Col xs={6} md={4} lg={2} className='current-level-number'>
                                    <div className='cln'>10</div>
                                    Level
                                </Col>
                            </Row>
                        </div>
                        <div className='all-level-list'>
                            <div className='all-levels-txt'>All Levels</div>
                            <Row gutter={[32, 32]}>
                                {userDetails.levels && userDetails.levels.map((item, key) => <Col xs={22} lg={6} className='all-level-list-card'>
                                    <LevelCard
                                        imgLink={Level1Img}
                                        title={`Level ${Number(item.levelID)}`}
                                        description={item.levelName}
                                        number={Number(item.levelID)}
                                        visibility={item.levelVisibility}
                                    />
                                </Col>)}
                            </Row>
                        </div>
                        <div>
                            <div className='all-levels-txt'>What’s new on Goodstep</div>
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
                        </div>
                    </div>
                </>
}
            </Spin>
        </div>
    );
};
export default Dashboard;