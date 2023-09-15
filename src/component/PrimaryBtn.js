import { ArrowRightOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import './primaryBtn.css';

const PrimaryBtn = ({ title, color, background, colorh, backgroundh, border ,onClick}) => {

    const primaryBtn = {
        background: background,
        border: border,
        borderRadius: '15px',
        color: color,
        padding: '11px',
        width: '100%',
        fontWeight: '600',
        fontFamily:'Jost'
    }
    const changeBackground = (e) => {
        e.target.style.backgroundColor = backgroundh;
        e.target.style.color = colorh;
    }
    const onBtnClick=()=>{

    }
    return (<div className='primary-btn'>
        <button style={primaryBtn} onMouseOver={changeBackground} onClick={onClick || onBtnClick}>
            <Row justify={'space-between'}>
                <Col>
                    {title}
                </Col>
                <Col>
                    <ArrowRightOutlined />
                </Col>
            </Row>
        </button>
    </div>)
}
export default PrimaryBtn;