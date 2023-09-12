import banner from '../../img/food-page-title.jpg';
import { Row, Col, Modal, Image } from "antd";
import './levelPage.css';
import { useParams } from "react-router-dom";
import DashboardHeader from './DashboardHeader';
import StartQuize from './StartQuize';
import YoutubeEmbed from '../YoutubeEmbed';

const LevelPage = () => {
    const params = useParams();
    const levelNumber = params.levelNumber;
    const userDetails = localStorage.getItem("userDetails");
    const { levels } = JSON.parse(userDetails);

    const data = levels[levelNumber - 1];

    console.log(data, 'data');



    // {
    //     "levelID": 1,
    //     "levelName": "A New Perspective",
    //     "levelBadge": "1",
    //     "levelEstimateTime": 3,
    //     "levelRewards": "5% Discount on any product purchased using coupon code:GOODSTP0020",
    //     "levelDesc": [
    //         {
    //             "title": "A New Perspective",
    //             "descriptions": [
    //                 {
    //                     "title": "A New Perspective",
    //                     "content": "We often hear that climate change is about “saving the planet.” Not really. Dive into the right way to think about it."
    //                 }
    //             ],
    //             "note": ""
    //         }
    //     ],
    //     "levelStatus": "inactive",
    //     "levelVisibility": false,
    //     "levelSteps": [
    //         {
    //             "title": "",
    //             "imgUrl": "",
    //             "videoUrl": "https://www.youtube.com/watch?v=EbjKcHPmxKQ",
    //             "description": "Humans have been around for just .004% of Earth’s history. And in all of human history – the 200,000 years since our species began – we’ve had agriculture for just 5% of that time and  electricity for 0.07% of that time. "
    //         },
    //         {
    //             "title": "",
    //             "imgUrl": "",
    //             "videoUrl": "https://www.youtube.com/watch?v=EbjKcHPmxKQ",
    //             "description": "Earth has gone through immense climate changes many times before, in some cases leading to mass species extinction. Now, we’re living through the onset of human-caused climate change, and slowing it down isn’t about saving the Earth. It’s about saving ourselves. "
    //         }
    //     ],
    //     "levelQuiz": [],
    //     "_id": "64fe93d02d12d56d5190351b",
    //     "__v": 0
    // }




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
                                    <div className="level-page-lno">Level: {data.levelID}</div>
                                    </Col>
                                    <Col xs={24} md={13}><div className="level-page-lno">{data.levelName}</div></Col>
                                    <Col xs={24} md={6}>
                                        <div className="level-page-lno">Est-Min: {data.levelEstimateTime} </div>
                                    </Col>
                                </Row>
                                <div className="level-page-title">{data.levelDesc[0].title}</div>
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
                                <br/>
                                </div>)}
                                {data.levelQuiz.length>0 &&
                        <StartQuize questions={data.levelQuiz} levelID={data.levelID} />
}
                        </div>
                    </div>
                </Col>
                <Col xs={24} lg={8}>
                    <div className="level-page-right-part">
                            <div className="level-page-right-part-box">
                        </div>
                        <div className="level-page-right-part-box">
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    </>)
}
export default LevelPage;
