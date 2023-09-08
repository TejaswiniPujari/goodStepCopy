
import React, { useRef } from 'react';
import { LeftCircleFilled, RightCircleFilled } from '@ant-design/icons';
import { Col, Row, Card, Carousel } from 'antd';
import './dashboard.css';
import profileImg from '../../img/step-1.png';
import Level1Img from '../../img/level1.jpg';
import newEvent from '../../img/newevent.jpg';
import DashboardHeader from './DashboardHeader.js';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    const slider = useRef(null);

    const LevelCard = ({ imgLink, title, description, number }) => {
        return (
            <NavLink to={`/dashboard/level/${number}`}>
                <Card
                    hoverable
                    cover={<img alt="example" src={imgLink} height={'50%'} />}
                >
                    <div className='all-level-list-title'> {title}</div>
                    <div className='all-level-list-des'>{description}</div>
                </Card>
            </NavLink>)
    }

    return (
        <div>
            <DashboardHeader />
            <div className='dashboard-content'>
                <div className='dashboard-welcome-section'>
                    <Row align={'middle'}>
                        <Col xs={6} md={4} lg={2}>
                            <img src={profileImg} alt='' width={'80%'}></img>
                        </Col>
                        <Col xs={12} md={16} lg={20} className='dashboard-welcome-txt'>
                            Hello Saloni, Welcome!
                        </Col>
                        <Col xs={6} md={4} lg={2} className='current-level-number'>
                            <div className='cln'>10</div>
                            Level
                        </Col>
                    </Row>
                </div>
                <div className='all-level-list'>
                    <div className='all-levels-txt'>All Levels</div>
                    <Row justify={'space-evenly'} gutter={[32, 32]}>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 1'}
                                description={'Install lightning fixtures'}
                                number={1}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 2'}
                                description={'Install lightning fixtures'}
                                number={2}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 3'}
                                description={'Install lightning fixtures'}
                                number={3}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 4'}
                                description={'Install lightning fixtures'}
                                number={4}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 5'}
                                description={'Install lightning fixtures'}
                                number={5}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 6'}
                                description={'Install lightning fixtures'}
                                number={6}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 7'}
                                description={'Install lightning fixtures'}
                                number={7}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 8'}
                                description={'Install lightning fixtures'}
                                number={8}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 9'}
                                description={'Install lightning fixtures'}
                                number={9}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 10'}
                                description={'Install lightning fixtures'}
                                number={10}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 11'}
                                description={'Install lightning fixtures'}
                                number={11}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 12'}
                                description={'Install lightning fixtures'}
                                number={12}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 13'}
                                description={'Install lightning fixtures'}
                                number={13}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 14'}
                                description={'Install lightning fixtures'}
                                number={14}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 15'}
                                description={'Install lightning fixtures'}
                                number={15}
                            />
                        </Col>
                        <Col xs={22} lg={6} className='all-level-list-card'>
                            <LevelCard
                                imgLink={Level1Img}
                                title={'Level 16'}
                                description={'Install lightning fixtures'}
                                number={16}
                            />
                        </Col>
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
        </div>
    );
};
export default Dashboard;