import banner from '../../img/food-page-title.jpg';
import { Row, Col, Image, Tag } from "antd";
import './levelPage.css';
import { NavLink, useParams } from "react-router-dom";
import DashboardHeader from './DashboardHeader';
import StartQuize from './StartQuize';
import YoutubeEmbed from '../YoutubeEmbed';
import PrimaryBtn from '../PrimaryBtn';

const LevelPage = () => {
    const params = useParams();
    const levelNumber = Number(params.levelNumber);
    const userDetails = localStorage.getItem("userDetails");
    const { levels } = JSON.parse(userDetails);

    const data = levels[levelNumber - 1];

    return (<>
        <DashboardHeader />
        <div>
            <img src={banner} alt="" width={'100%'}></img>
        </div>
        <div className="level-page-content">
            <Row>
                <Col xs={24} lg={16}>
                    <div className="level-page-left-part">
                        <div className="level-page-info-box">
                            <div className="level-page-info-box-top">
                                <Row gutter={[16, 16]}>
                                    <Col xs={24} md={4}>
                                        <div className="level-page-lno" style={{ background: 'darkcyan' }}>Level: {data.levelID}</div>
                                    </Col>
                                    <Col xs={24} md={13}><div className="level-page-lno" style={{ background: 'brown' }}>{data.levelName}</div></Col>
                                    <Col xs={24} md={6}>
                                        <div className="level-page-lno" style={{ background: 'chocolate' }}>Est-Min: {data.levelEstimateTime} </div>
                                    </Col>
                                </Row>
                                <Row justify={'space-between'} align={'middle'}>
                                    <Col md={20}>
                                        <div className="level-page-title">{data.levelDesc[0].title}</div>
                                    </Col>
                                    <Col md={4}>
                                        <Tag color={data.levelStatus === 'Completed' ? "green" : data.levelStatus === 'Active' ? "magenta" : "orange"}>{data.levelStatus}</Tag>
                                    </Col>
                                    <Col xs={24} md={0}>
                                        <br />
                                    </Col>
                                </Row>
                            </div>
                            <div className="level-page-info-box-bottom">
                                <div className="level-page-description">
                                    {data.levelDesc[0].descriptions && data.levelDesc[0].descriptions.map(item => <>
                                        {item.title &&
                                            <div className="level-page-description-title">{item.title}</div>
                                        }
                                        {item.content &&
                                            <div className="level-page-description-content">{item.content}</div>
                                        }
                                    </>)}
                                </div>
                                {data.levelDesc.note &&
                                    <div className="level-page-note">{data.levelDesc.note}</div>
                                }
                            </div>
                        </div>
                        <div className="level-page-action-title">How can I do this action?</div>
                        <div className="level-page-action">
                            {data.levelSteps && data.levelSteps.map((item, index) =>
                                <div>
                                    <Row justify={'space-around'} gutter={[64, 16]} align={'middle'}>
                                        <Col xs={24} md={12}>
                                            <div className='levelsteps'>
                                                <div className="level-page-action-option-number">Step: {index + 1}</div>
                                                <div className="level-page-action-option-title">{item.title}</div>
                                                <div className="level-page-action-option-description">{item.description}</div>
                                            </div>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            {item.videoUrl ?
                                                <YoutubeEmbed embedId={item.videoUrl.split("=")[1]} />
                                                :
                                                <Image src={item.imgUrl} width={100} preview={false} />
                                            }
                                        </Col>
                                    </Row>
                                    <br />
                                </div>)}
                            {data.levelQuiz.length > 0 && !(data.levelStatus === 'Completed') && ((levelNumber > 1 && levels[levelNumber - 2].levelStatus === "Completed") || levelNumber === 1) &&
                                <StartQuize questions={data.levelQuiz} levelID={data.levelID} />
                            }
                            {data.levelStatus === 'Completed' &&
                                <NavLink to={`/dashboard/level/${data.levelID + 1}`}>
                                    <PrimaryBtn
                                        title={'Start Next Level'}
                                        colorh={'white'}
                                        backgroundh={'rgb(58, 93, 206)'}
                                        background={'rgb(58, 93, 206)'}
                                        color={'white'}
                                        border={'2px solid rgb(58, 93, 206)'}
                                    />
                                </NavLink>
                            }
                        </div>
                    </div>
                </Col>
                <Col xs={24} lg={8}>
                    <div className="level-page-right-part">
                        {/* <div className="level-page-right-part-box">
                        </div>
                        <div className="level-page-right-part-box">
                        </div> */}
                    </div>
                </Col>
            </Row>
        </div>
    </>)
}
export default LevelPage;
