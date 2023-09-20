import './myProfile.css'
import DashboardHeader from '../Dashboard/DashboardHeader'
import { Row, Col, Image } from 'antd'
import profileImg from '../../img/profileImg.jpg';
import YoutubeEmbed from '../YoutubeEmbed';
import { InstagramFilled, FacebookFilled, TwitterCircleFilled, MailFilled } from '@ant-design/icons';
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

const MyProfile = () => {
    const imgCollection = [badge1, badge2, badge3, badge4, badge5, badge6, badge7, badge8, badge9, badge10];
    const currentLevel = 5;
    const activity = [
        {
            title: 'Activity-based costing',
            content: 'Activity-based costing is a costing method that identifies activities in an organization and assigns the cost of each activity to all products and services according to the actual consumption by each. ',
            imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzvDUnACm-BmRm_1fdED4YE0s5ypzyobbVw&usqp=CAU`,
            videoUrl: 'https://www.youtube.com/watch?v=9YSbflKeOZQ'

        },
        {
            title: 'Activity-based costing',
            content: 'Activity-based costing is a costing method that identifies activities in an organization and assigns the cost of each activity to all products and services according to the actual consumption by each. ',
            imgUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEzvDUnACm-BmRm_1fdED4YE0s5ypzyobbVw&usqp=CAU`,
            videoUrl: 'https://www.youtube.com/watch?v=9YSbflKeOZQ'

        }
    ]
    const shortBio = ['Activity-based costing is a costing method that identifies activities in an organization and assigns the cost of each activity to all products and services according to the actual consumption by each', 'Activity-based costing is a costing method that identifies activities in an organization and assigns the cost of each activity to all products and services according to the actual consumption by each']
    return (
        <>
            <DashboardHeader />
            <div className='myprofile-page'>
                <Row gutter={[64, 32]}>
                    <Col xs={24} md={12} lg={6}>
                        <Image src={profileImg} width={'100%'}></Image>
                        <div className='profile-name'>Tejaswini Pujari</div>
                        <div className='profile-identity'>An interesting journey from micro-processors to micro-interactions!</div>
                        <div className='profile-gender'>Female <span className='profile-dob'>29-07-1998</span> </div>
                        <div className='social-media-links'>
                            <Row>
                                <Col span={4}>
                                    <button onClick={() => {

                                    }}>
                                        <InstagramFilled className='social-media-icon' />
                                    </button>
                                </Col>
                                <Col span={4}>
                                    <button onClick={() => {

                                    }}>
                                        <FacebookFilled className='social-media-icon' />
                                    </button>
                                </Col>
                                <Col span={4}>
                                    <button onClick={() => {

                                    }}>
                                        <TwitterCircleFilled className='social-media-icon' />
                                    </button>
                                </Col>
                                <Col span={4}>
                                    <button onClick={() => {

                                    }}>
                                        <MailFilled className='social-media-icon' />
                                    </button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={24} md={12} lg={18}>
                        <Row gutter={[64, 32]}>
                            <Col xs={24} lg={12}>
                                <div className='won-badges'>Won Badges</div>
                                <div className='badges-card'>
                                    <Row>
                                        {imgCollection.map((item, key) => {
                                            if (key + 1 > currentLevel) {
                                                return;
                                            }
                                            return (<Col span={4}>
                                                <img src={item} width={'100%'} alt=''></img>
                                            </Col>)
                                        })}
                                    </Row>
                                </div>
                                <br />
                                <div className='won-badges'>Short Bio</div>
                                <div className='badges-card'>
                                    <div className='short-bio'>
                                        {shortBio && shortBio.length && shortBio.map(item => <>{item}<br /></>)}
                                    </div>
                                </div>
                            </Col>
                            <Col xs={0} lg={12}>
                                <div className='won-badges'>Activity</div>
                                <div className='badges-card'>
                                    <Row gutter={[0, 16]}>
                                        {activity.map((item, key) => <Col span={24}>
                                            <Row gutter={[16, 8]}>
                                                <Col span={24}>
                                                    <div className='activity-title'>{key + 1}. {item.title}</div>
                                                </Col>
                                                <Col span={18}>
                                                    {item.content && <div className='activity-des'>{item.content}</div>}
                                                </Col>
                                                <Col span={6}>
                                                    {item.videoUrl ?
                                                        <YoutubeEmbed embedId={item.videoUrl.split("=")[1]} />
                                                        :
                                                        <Image src={item.imgUrl} preview={false} />
                                                    }
                                                </Col>
                                            </Row>
                                            {key + 1 < activity.length && <hr color='#6758F2' />}
                                        </Col>)}
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={24} lg={0}>
                        <div className='won-badges'>Activity</div>
                        <div className='badges-card'>
                            <Row gutter={[0, 16]}>
                                {activity.map((item, key) => <Col span={24}>
                                    <Row gutter={[16, 8]}>
                                        <Col span={24}>
                                            <div className='activity-title'>{key + 1}. {item.title}</div>
                                        </Col>
                                        <Col span={16}>
                                            {item.content && <div className='activity-des'>{item.content}</div>}
                                        </Col>
                                        <Col span={8}>
                                            {item.videoUrl ?
                                                <YoutubeEmbed embedId={item.videoUrl.split("=")[1]} />
                                                :
                                                <Image src={item.imgUrl} preview={false} />
                                            }
                                        </Col>
                                    </Row>
                                    {key + 1 < activity.length && <hr color='#6758F2' style={{ marginTop: '20px' }} />}
                                </Col>)}
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}
export default MyProfile;