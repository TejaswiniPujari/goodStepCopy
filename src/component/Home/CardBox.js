import './home.css';
import { Card } from 'antd';

const CardBox = ({ starImg, title, description }) => {
    return (<Card className='cardBox' key={title}>
        <div className="center"><img src={starImg} width={'70%'} alt=''></img></div>
        <div className='card-title'>{title}</div>
        <div className='card-des'>{description.map(item => <>{item}<br /></>)}</div>
    </Card>)
}
export default CardBox;
