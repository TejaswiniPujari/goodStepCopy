
import React, { useState } from 'react';
import { HomeOutlined, InteractionOutlined, TeamOutlined, GlobalOutlined, LogoutOutlined } from '@ant-design/icons';
import { Menu, Col, Row } from 'antd';
import './dashboard.css';
import logo from '../../img/footer-logo1.png';
import { NavLink } from 'react-router-dom';

const items = [
    {
        label: <NavLink className="nav-link active" aria-current="page" to={'/dashboard'}>Home</NavLink>,
        key: '1',
        icon: <HomeOutlined />,
    },
    {
        label: <NavLink className="nav-link active" aria-current="page" to={'#'}>Impact</NavLink>,
        key: '2',
        icon: <InteractionOutlined />,
    },
    {
        label: <NavLink className="nav-link active" aria-current="page" to={'#'}>Community</NavLink>,
        key: '3',
        icon: <TeamOutlined />,
    },
    {
        label: <NavLink className="nav-link active" aria-current="page" to={'#'}>Explore</NavLink>,
        key: '4',
        icon: <GlobalOutlined />,
    },
    {
        label: <NavLink className="nav-link active" aria-current="page" to={'#'}>Leaderboard</NavLink>,
        key: '5',
        icon: <GlobalOutlined />,
    },
    {
        label: <NavLink className="nav-link active" aria-current="page" to={'/'} onClick={() => {
            localStorage.setItem("logged", 'false')
        }}>LogOut</NavLink>,
        key: '6',
        icon: <LogoutOutlined />,
    },
];

const DashboardHeader = () => {
    const [current, setCurrent] = useState('1');

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (<>
        <div className='dashboard-header'>
            <Row justify={'space-between'} align={'middle'}>
                <Col xs={8} md={6} lg={4}>
                    <img src={logo} alt='' className='dashboard-header-logo'></img>
                </Col>
                <Col xs={4} md={14} lg={13} style={{ textAlign: 'end' }}>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </Col>
            </Row>
        </div>
    </>)
}
export default DashboardHeader;