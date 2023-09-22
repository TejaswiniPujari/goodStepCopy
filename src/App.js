import { useRef } from 'react';
import HeaderImg from "./img/footer-logo1.png";
import './component/Home/home.css';
import Marquee from "react-fast-marquee";
import SliderImg from './img/home-slides-banner2.png'
import { Row, Col, Carousel, Space, Input, Button } from "antd";
import PrimaryBtn from './component/PrimaryBtn';
import Step1Img from './img/step-1.png';
import Step2Img from './img/step-2.png';
import Step3Img from './img/step-3.png';
import Step1Action from './img/step1.png';
import HalfCircleImg from './img/half-circle.png';
import star1 from './img/review-star1.png';
import star2 from './img/review-star2.png';
import star3 from './img/review-star3.png';
import CardBox from './component/Home/CardBox';
import arrow from './img/about-arrow.png';
import PaymentImg from './img/payments.png';
import firstSlider from './img/home page slider/1.png';
import { CopyrightOutlined, UserOutlined, AudioOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';
import './component/Login/login.css';
import { baseUrl } from './request';

const App = () => {
  const slider = useRef(null);
  const navigate = useNavigate();
  //   const zoomElement = document.querySelector("#zoom");
  //   let zoom = 1;
  //   const ZOOM_SPEED = 0.1;
  //   document.addEventListener("mouseover", function(e) {  
  //     zoomElement.style.transform = `scale(${zoom += ZOOM_SPEED})`;  
  //   });
  //   document.addEventListener("mouseout", function(e) {  
  //     zoomElement.style.transform = `scale(${zoom -= ZOOM_SPEED})`;
  // });

  const goToLoginRegisterPage = (flag) => {
    localStorage.setItem("stepNumber", flag);
    navigate('/login-register');
  }

  const onSearch = async (e) => {

    const response = await fetch(`${baseUrl}/subscribe`, {
      method: "POST",
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ email: e }),
    }).then(res => res.json());

    console.log(e)
  };

  return (<>
    <div className="header-bar">
      <Row align={'middle'} justify={'space-between'}>
        <Col xs={12} md={18} lg={20}>
          <NavLink to={localStorage.getItem("logged") === 'true' ? '/dashboard' : '/'}>
            <img src={HeaderImg} alt="" className="Headerlogo"></img>
          </NavLink>
        </Col>
        <Col xs={8} md={6} lg={4}>
          <Row>
            {localStorage.getItem("logged") === 'true' ?
              <Col span={24}>
                <NavLink to={'/dashboard'}>
                  <button className='l-r'>Go To Dashboard</button>
                </NavLink>
              </Col>
              :
              <>
                <Col span={12}>
                  <button onClick={() => goToLoginRegisterPage(6)} className='l-r'>Login</button>
                </Col>
                <Col span={12}>
                  <button onClick={() => goToLoginRegisterPage(1)} className='l-r'>Register</button>
                </Col>
              </>
            }
          </Row>
        </Col>
      </Row>
    </div>
    <Marquee speed={200}>
      <div className="home-slides-banner"><img src={SliderImg} alt="" height={'350px'} width={'100%'}></img></div>
    </Marquee>
    <div className="s1">
      <Row justify={'space-between'}>
        <Col xs={24} md={15}>
          <div className='homePage-title'>All your climate questions answered </div>
        </Col>
        <Col xs={24} md={9}>
          <div className='homePage-des'>Ace your climate basics, access a curated ecosystem of resources, and find your climate community. 
</div>
          <Row>
            <Col xs={22} md={22} lg={15}>
              <PrimaryBtn
                title={'Get started'}
                color={'#6758F2'}
                background={'white'}
                backgroundh={'#6758F2'}
                colorh={'white'}
                border={'2px solid #6758F2'}
                onClick={()=>{
                  navigate('/login-register')
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <br/>
    {/* <div className="s2">
      <Row justify={'space-between'}>
        <Col xs={24} md={12}>
          <div className='homePage-title-s2'>50%</div>
        </Col>
        <Col xs={24} md={12}>
          <div className='homePage-des'>All product prices directly cut into half, so that you can donate 50% to a cause that positively impacts climate change.</div>
          <Row>
            <Col xs={20} md={18}>
              <PrimaryBtn
                title={'Learn more'}
                color={'#6758F2'}
                background={'white'}
                backgroundh={'#6758F2'}
                colorh={'white'}
                border={'2px solid #6758F2'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div> */}
    {/* <div className="half-circle" id="zoom">
      <img src={HalfCircleImg} alt="" width={'100%'}></img>
    </div> */}
    {/* <div className="s3">
      <Row justify={'space-between'}>
        <Col span={1}>
        </Col>
        <Col span={7}>
          <img alt="" className="steps-action" src={Step1Action}></img>
        </Col>
        <Col span={12} className="s3-steps-info">
          <div className="s3-step1">
            <Row>
              <Col span={3}>
                <img alt="" width={'100%'} src={Step1Img}></img>
              </Col>
              <Col span={1}></Col>
              <Col span={15}>
                <div className="s3-step-title">Choose your impact</div>
                <div className="s3-step-des">Select from a verified list of impacts that are transforming distinct parts of India.</div>
                <a className="s3-step-link" href="#">Learn More</a>
              </Col>
            </Row>
          </div>
          <div className="s3-step2">
            <Row>
              <Col span={3}>
                <img alt="" width={'100%'} src={Step2Img}></img>
              </Col>
              <Col span={1}></Col>
              <Col span={15}>
                <div className="s3-step-title">Make a donation</div>
                <div className="s3-step-des">Before you place your purchase, donate 50% of the product value directly to your chosen organisation.</div>
                <a className="s3-step-link" href="#">How does this work?</a>
              </Col>
            </Row>
          </div>
          <div className="s3-step3">
            <Row>
              <Col span={3}>
                <img alt="" width={'100%'} src={Step3Img}></img>
              </Col>
              <Col span={1}></Col>
              <Col span={15}>
                <div className="s3-step-title">Purchase the product</div>
                <div className="s3-step-des">Once you've donated, you will be redirected back to the page where you can complete your purchase.</div>
                <a className="s3-step-link" href="#">Shop Now</a>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div> */}
     <div className="s4">
      <div className="s4-des">How does it work?</div>
      <div className="s4-title">3 Steps on GoodStep </div>
    </div>
    <div className="s4-c">
      <Carousel ref={slider} autoplay dots={null} effect={'fade'}>
        <div >
          <div className='contentStyle1'>
          <div className='contentStyle'>
            <Row justify={'space-between'} align={'middle'}>
              <Col xs={24} md={12} >
                <img src={firstSlider} width={'100%'} alt=''></img>
              </Col>
              <Col xs={24} md={10} className="s4-c-left-section">
                <div className="s4-c-title">Create your account in under 2 minutes</div>
                {/* <div className="s4-c-des">Select from a verified list of impacts that are transforming distinct parts of India.</div> */}
                {/* <Row>
                    <Col xs={18} md={10} lg={15}>
                      <PrimaryBtn
                        title={'Learn more'}
                        color={'white'}
                        background={'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}
                        backgroundh={'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 35%, rgba(9,9,121,1) 100%)'}
                        colorh={'white'}
                        border={'none'}
                      />
                    </Col>
                  </Row> */}
                <Row className="s4-c-dots" justify={'center'}>
                  <Col span={6}><img src={Step1Img} alt="" width={'80%'} onClick={() => slider.current.goTo(0)}></img></Col>
                  <Col span={6}><img src={Step2Img} alt="" width={'80%'} onClick={() => slider.current.goTo(1)}></img></Col>
                  <Col span={6}><img src={Step3Img} alt="" width={'80%'} onClick={() => slider.current.goTo(2)}></img></Col>
                </Row>
              </Col>
            </Row>
          </div>
          </div>
        </div>
        <div>
          <div className='contentStyle2'>
          <div className='contentStyle'>
            <Row justify={'space-between'} align={'middle'}>
              <Col xs={24} md={12} >
                <img src={firstSlider} width={'100%'} alt=''></img>
              </Col>
              <Col xs={24} md={10} className="s4-c-left-section">
                <div className="s4-c-title">Up your climate knowledge, one level at a time</div>
                {/* <div className="s4-c-des">Before you place your purchase, donate 50% of the product value directly to your chosen organisation.</div> */}
                {/* <Row>
                    <Col xs={18} md={10} lg={15}>
                      <PrimaryBtn
                        title={'Learn more'}
                        color={'white'}
                        background={'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}
                        backgroundh={'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 35%, rgba(9,9,121,1) 100%)'}
                        colorh={'white'}
                        border={'none'}
                      />
                    </Col>
                  </Row> */}
                <Row className="s4-c-dots" justify={'center'}>
                  <Col span={6}><img src={Step1Img} alt="" width={'80%'} onClick={() => slider.current.goTo(0)}></img></Col>
                  <Col span={6}><img src={Step2Img} alt="" width={'80%'} onClick={() => slider.current.goTo(1)}></img></Col>
                  <Col span={6}><img src={Step3Img} alt="" width={'80%'} onClick={() => slider.current.goTo(2)}></img></Col>
                </Row>
              </Col>
            </Row>
          </div>
          </div>
        </div>
        <div>
          <div className='contentStyle3'>
            <div className='contentStyle'>
            <Row justify={'space-between'} align={'middle'} >
              <Col xs={24} md={12} >
                <img src={firstSlider} width={'100%'} alt=''></img>
              </Col>
              <Col xs={24} md={10} className="s4-c-left-section">
                <div className="s4-c-title">Get your climate card - your one stop profile for all things you and your climate action </div>
                {/* <div className="s4-c-des">Once you've donated, you will be redirected back to the page where you can complete your purchase.</div> */}
                {/* <Row>
                    <Col xs={18} md={10} lg={15}>
                      <PrimaryBtn
                        title={'Learn more'}
                        color={'white'}
                        background={'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)'}
                        backgroundh={'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 35%, rgba(9,9,121,1) 100%)'}
                        colorh={'white'}
                        border={'none'}
                      />
                    </Col>
                  </Row> */}
                <Row className="s4-c-dots" justify={'center'}>
                  <Col span={6}><img src={Step1Img} alt="" width={'80%'} onClick={() => slider.current.goTo(0)}></img></Col>
                  <Col span={6}><img src={Step2Img} alt="" width={'80%'} onClick={() => slider.current.goTo(1)}></img></Col>
                  <Col span={6}><img src={Step3Img} alt="" width={'80%'} onClick={() => slider.current.goTo(2)}></img></Col>
                </Row>
              </Col>
            </Row>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
    <div className='s5'>

      <Row>
        <Col xs={24} md={0} lg={0} xl={0} xxl={0}>
          <Carousel>
            <div><CardBox
              starImg={star1}
              title='Manish Patel'
              description={[`GoodStep has become my go-to for understanding what's up with India's climate scene. It's not all bad news – they're showing me the real deal about India's climate scene. Their style is super refreshing, and the whole gamified thing makes it way less intimidating. It's like an adventure!" Kudos!`]}
            /></div>
            <div>
              <CardBox
                starImg={star2}
                title='Jyoti Shetty'
                description={[`GoodStep's videos are a game-changer! They've made climate information so much more consumable and engaging. I used to think climate change was a distant issue, but GoodStep made it personal. Their content on finding your climate role showed me that I have the power to make a difference right where I am. It's not just about big goals; it's about the small actions we take every day.`]}
              />
            </div>
            <div>
              <CardBox
                starImg={star3}
                title='Karthik Shah'
                description={[`GoodStep's approach to climate roles in different industries is spot on. They've shown me that every job can be a climate job. Now, I feel empowered to make a change within my workplace, no matter what industry I'm in.`]}
              />
            </div>
            <div><CardBox
              starImg={star1}
              title={`Joshua D'souza`}
              description={[`Talking about climate change used to be daunting, but GoodStep's guidance made it easier. Their tips on getting people to care are invaluable. I've learned that every conversation matters, no matter how small.`]}
            /></div>
            <div>
              <CardBox
                starImg={star2}
                title='Aanchal Punjabi'
                description={[`Real India's Real Climate Stories by GoodStep gave me a fresh perspective. It's not just about EVs and carbon goals; it's about climate justice. I've learned about the missing piece of the puzzle that's often overlooked.`]}
              />
            </div>
            <div>
              <CardBox
                starImg={star3}
                title='Hitesh mehta'
                description={[`GoodStep's breakdown of the 1.5-degree Celsius goal was eye-opening. I now understand why every tenth of a degree matters. It's visionary content for anyone who wants to be a part of the solution, not just a bystander.`]}
              />
            </div>
          </Carousel>
        </Col>
        <Col xs={0} md={24} lg={0} xl={0} xxl={0}>
          <Carousel>
            <div>
              <Row gutter={[32, 32]}>
                <Col span={12}>
                  <div><CardBox
                    starImg={star1}
                    title='Manish Patel'
                    description={[`GoodStep has become my go-to for understanding what's up with India's climate scene. It's not all bad news – they're showing me the real deal about India's climate scene. Their style is super refreshing, and the whole gamified thing makes it way less intimidating. It's like an adventure!" Kudos!`]}
                  /></div>
                </Col>
                <Col span={12}>
                  <div>
                    <CardBox
                      starImg={star2}
                      title='Jyoti Shetty'
                      description={[`GoodStep's videos are a game-changer! They've made climate information so much more consumable and engaging. I used to think climate change was a distant issue, but GoodStep made it personal. Their content on finding your climate role showed me that I have the power to make a difference right where I am. It's not just about big goals; it's about the small actions we take every day.`]}
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={[32, 32]}>
                <Col span={12}>
                  <div>
                    <CardBox
                      starImg={star3}
                      title='Karthik Shah'
                      description={[`GoodStep's approach to climate roles in different industries is spot on. They've shown me that every job can be a climate job. Now, I feel empowered to make a change within my workplace, no matter what industry I'm in.`]}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <div><CardBox
                    starImg={star1}
                    title={`Joshua D'souza`}
                    description={[`Talking about climate change used to be daunting, but GoodStep's guidance made it easier. Their tips on getting people to care are invaluable. I've learned that every conversation matters, no matter how small.`]}
                  /></div>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={[32, 32]}>
                <Col span={12}>
                  <div>
                    <CardBox
                      starImg={star2}
                      title='Aanchal Punjabi'
                      description={[`Real India's Real Climate Stories by GoodStep gave me a fresh perspective. It's not just about EVs and carbon goals; it's about climate justice. I've learned about the missing piece of the puzzle that's often overlooked.`]}
                    />
                  </div>
                </Col>
                <Col span={12}>
                  <div>
                    <CardBox
                      starImg={star3}
                      title='Hitesh mehta'
                      description={[`GoodStep's breakdown of the 1.5-degree Celsius goal was eye-opening. I now understand why every tenth of a degree matters. It's visionary content for anyone who wants to be a part of the solution, not just a bystander.`]}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Carousel>
        </Col>
        <Col xs={0} md={0} lg={24} xl={24} xxl={24}>
          <Carousel>
            <div>
              <Row gutter={[32, 32]}>
                <Col span={8}>
                  <div><CardBox
                    starImg={star1}
                    title='Manish Patel'
                    description={[`GoodStep has become my go-to for understanding what's up with India's climate scene. It's not all bad news – they're showing me the real deal about India's climate scene. Their style is super refreshing, and the whole gamified thing makes it way less intimidating. It's like an adventure!" Kudos!`]}
                  /></div>
                </Col>
                <Col span={8}>
                  <div>
                    <CardBox
                      starImg={star2}
                      title='Jyoti Shetty'
                      description={[`GoodStep's videos are a game-changer! They've made climate information so much more consumable and engaging. I used to think climate change was a distant issue, but GoodStep made it personal. Their content on finding your climate role showed me that I have the power to make a difference right where I am. It's not just about big goals; it's about the small actions we take every day.`]}
                    />
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <CardBox
                      starImg={star3}
                      title='Karthik Shah'
                      description={[`GoodStep's approach to climate roles in different industries is spot on. They've shown me that every job can be a climate job. Now, I feel empowered to make a change within my workplace, no matter what industry I'm in.`]}
                    />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <Row gutter={[32, 32]}>
                <Col span={8}>
                  <div><CardBox
                    starImg={star1}
                    title={`Joshua D'souza`}
                    description={[`Talking about climate change used to be daunting, but GoodStep's guidance made it easier. Their tips on getting people to care are invaluable. I've learned that every conversation matters, no matter how small.`]}
                  /></div>
                </Col>
                <Col span={8}>
                  <div>
                    <CardBox
                      starImg={star2}
                      title='Aanchal Punjabi'
                      description={[`Real India's Real Climate Stories by GoodStep gave me a fresh perspective. It's not just about EVs and carbon goals; it's about climate justice. I've learned about the missing piece of the puzzle that's often overlooked.`]}
                    />
                  </div>
                </Col>
                <Col span={8}>
                  <div>
                    <CardBox
                      starImg={star3}
                      title='Hitesh mehta'
                      description={[`GoodStep's breakdown of the 1.5-degree Celsius goal was eye-opening. I now understand why every tenth of a degree matters. It's visionary content for anyone who wants to be a part of the solution, not just a bystander.`]}
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
    <div className='s6'>
      <div className='s6-title center'>Ready to Level Up? </div>
      <div className='s6-des center'>We want to empower people to do their bit for the climate through causes that responds to India’s mostclimate-vulnerable communities</div>
      <button className='ready-arrow center' onClick={()=>{
        localStorage.setItem('stepNumber',1)
        navigate('/login-register')
      }}>
        <img src={arrow} alt='' width={'3.5%'}></img>
      </button>
    </div>
    <div className='footer'>
      <div className='footer-s1'>
        {/* <div className='footer-title center'>Enter email to subscribe</div>
        <Row justify={'center'}>
          <Col md={8} lg={7}>
            <Input.Search
              placeholder="Enter mail id"
              enterButton="Subscribe"
              size="large"
              onSearch={onSearch}
            />
          </Col>
        </Row> */}
        {/* <br /> */}
        <div className='footer-logo center'><img src={HeaderImg} alt='' width={'30%'}></img></div>
        <div className='footer-des center'> GoodStep is a game, where everyone wins - planet, people and you! The platform helps you make a gradual transition to a more sustainable and socially responsible lifestyle - and the best part? We make it easy, non-disruptive, and a fun game you can play with friends!</div>
        <Row justify={'center'}>
          <Col xs={0} md={2}></Col>
          <Col xs={24} md={5}>
            <div className='footer-title2'>Legal</div>
            <div className='footer-a'><a className="change-link-style" href='#' className='footer-link'>Terms of Service</a></div>
            <div className='footer-a' ><a className="change-link-style" href='#' className='footer-link'>Privacy Policy</a></div>
          </Col>
          <Col xs={24} md={8} className='footer-m'>
            <div className='footer-title2'>Contact Us</div>
            <div className='footer-a'><a className="change-link-style" href="mailto:hello@thegoodstep.com" className='footer-link'>hello@thegoodstep.com</a></div>
          </Col>
          <Col xs={0} md={2}></Col>
          <Col xs={24} md={6}>
            <div className='footer-title2'>Know More</div>
            <div className='footer-a'><a className="change-link-style" href='#' className='footer-link'>About Us</a></div>
            <div className='footer-a' ><a className="change-link-style" href='#' className='footer-link'>Partner with Us</a></div>
            <div className='footer-a'><a className="change-link-style" href='#' className='footer-link'>Blogs</a></div>
            <div className='footer-a' ><a className="change-link-style" href='#' className='footer-link'>FAQs</a></div>
          </Col>
        </Row>
      </div>
      <hr />
      <Row justify={'space-between'} className='footer-bottom'>
        <Col xs={24} md={12} lg={6} className='footer-title3'><a className="change-link-style" href='https://www.digitalbuzzers.com/'>GoodStep <span style={{ color: '#e1dbe8' }}><CopyrightOutlined /> 2023 DEVELOPED </span> BY Digital Buzzers</a></Col>
        <Col xs={24} md={8} lg={5} className='center'><img src={PaymentImg} width={'100%'} alt=''></img></Col>
      </Row>
    </div>
  </>)
}
export default App;

