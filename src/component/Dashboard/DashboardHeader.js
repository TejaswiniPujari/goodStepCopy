
import React, { useState } from 'react';
import { HomeOutlined, LogoutOutlined, LayoutOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Col, Row } from 'antd';
import './dashboard.css';
import logo from '../../img/footer-logo1.png';
import { NavLink } from 'react-router-dom';

const items = [
    {
        label: <NavLink className="nav-link active" aria-current="page" to={'/'}>Home</NavLink>,
        key: '1',
        icon: <HomeOutlined />,
    },
    {
        label: <NavLink className="nav-link active" aria-current="page" to={'/dashboard'}>Dashboard</NavLink>,
        key: '2',
        icon: <LayoutOutlined />,
    },
    {
        label: <NavLink className="nav-link active" aria-current="page" to={'/myprofile'}>My Profile</NavLink>,
        key: '3',
        icon: <UserOutlined />,
    },
    {
        label: <NavLink className="nav-link active" aria-current="page" to={'/'} onClick={() => {
            localStorage.setItem("logged", 'false');
            localStorage.setItem("userDetails", null);
        }}>LogOut</NavLink>,
        key: '4',
        icon: <LogoutOutlined />,
    },
];

const DashboardHeader = () => {
    const [current, setCurrent] = useState('2');

    const onClick = (e) => {
        setCurrent(e.key);
    };
console.log(current)
    return (<>
        <div className='dashboard-header'>
            <Row justify={'space-between'} align={'middle'}>
                <Col xs={8} md={6} lg={4}>
                    <NavLink to={'/dashboard'}>
                        <img src={logo} alt='' className='dashboard-header-logo'></img>
                    </NavLink>
                </Col>
                <Col xs={4} md={14} lg={10}>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} align='end' />
                </Col>
            </Row>
        </div>
    </>)
}
export default DashboardHeader;