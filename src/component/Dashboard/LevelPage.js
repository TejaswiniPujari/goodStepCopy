import banner from '../../img/food-page-title.jpg';
import { Row, Col, Modal } from "antd";
import './levelPage.css';
import { useParams } from "react-router-dom";
import DashboardHeader from './DashboardHeader';
import StartQuize from './StartQuize';

const LevelPage = () => {
    const params = useParams();
    const levelNumber = params.levelNumber;


    
    const levelInfo = [{
        title: 'Support your household help and their families’ education ',
        descriptions: [
            {
                title: 'This one’s for your quite literal saviour at home - your house help!',
                content: 'Next time you’re talking to your help - take 10 minutes to understand their background and aspirations. A single conversation can go a long way in helping you understand how you can play a role to improve quality of life for your help and their family - and not surprisingly - education is an important one.'
            },
            {
                title: 'Why should you do this action?',
                content: 'We have a huge development opportunity - With 400 million people below the age of 18, India has the world’s largest child population. That we are not making the most of - 50% of India’s children aged 6-18  do not go to school. And this problem has a very clear gender bias as well - 60% of girls fail to enroll in school, and majority of those who do drop out by age 12.'
            }
        ],
        note: 'However, the good news is there’s a lot YOU can do here. A simple act of supporting education for your household staff can have a ripple effect across their economic well-being, healthcare, and overall standard of living. ',
        options: [
            {
                title: 'Enroll your househelp with Goodstep partners',
                imgUrl:'',
                videoUrl:'',
                description: 'We also have a vetted list of NGOs you can reach out to and get your staff and their families enrolled in school. '
            }
        ]
    }]
    const data = levelInfo[levelNumber - 1];

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
                                <div className="level-page-lno">Level {data.levelNumber}</div>
                                <div className="level-page-title">{data.title}</div>
                            </div>
                            <div className="level-page-info-box-bottom">
                                <div className="level-page-description">
                                    {data.descriptions.map(item => <>
                                        {item.title &&
                                            <div className="level-page-description-title">{item.title}</div>
                                        }
                                        {item.content &&
                                            <div className="level-page-description-content">{item.content}</div>
                                        }
                                    </>)}
                                </div>
                                {data.note &&
                                    <div className="level-page-note">{data.note}</div>
                                }
                            </div>
                        </div>
                        <div className="level-page-action-title">How can I do this action?</div>
                        <div className="level-page-action">
                            {data.options.map((item, index) => <>
                                <div className="level-page-action-option-number">Option: {index + 1}</div>
                                <div className="level-page-action-option-title">{item.title}</div>
                                <div className="level-page-action-option-description">{item.description}</div>
                            </>)}
                        </div>
                    </div>
                </Col>
                <Col xs={0} lg={8}>
                    <div className="level-page-right-part">
                        <div className="level-page-right-part-box">
                        </div>
                        <div className="level-page-right-part-box">
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
        <StartQuize/>
    </>)
}
export default LevelPage;