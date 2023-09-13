import { useRef } from 'react';
import HeaderImg from "./img/footer-logo1.png";
import './component/Home/home.css';
import Marquee from "react-fast-marquee";
import SliderImg from './img/home-slides-banner2.png'
import { Row, Col, Carousel } from "antd";
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
import { CopyrightOutlined, UserOutlined } from '@ant-design/icons';
import { NavLink, useNavigate } from 'react-router-dom';

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

  return (<>
    <div className="header-bar">
      <Row align={'middle'} justify={'space-between'}>
        <Col xs={12} md={20}>
          <NavLink to={localStorage.getItem("logged") === 'true' ? '/dashboard' : '/'}>
            <img src={HeaderImg} alt="" className="Headerlogo"></img>
          </NavLink>
        </Col>
        <Col xs={8} md={4}>
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
          <div className='homePage-title'>Climate impact just got easier</div>
        </Col>
        <Col xs={24} md={9}>
          <div className='homePage-des'>GoodStep helps you choose a verified impact, make a donation and purchase sustainable products, all in one go.</div>
          <Row>
            <Col xs={22} md={22} lg={15}>
              <PrimaryBtn
                title={'Explore our products'}
                color={'rgb(58, 93, 206)'}
                background={'white'}
                backgroundh={'rgb(58, 93, 206)'}
                colorh={'white'}
                border={'2px solid rgb(58, 93, 206)'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    <div className="s2">
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
                color={'rgb(58, 93, 206)'}
                background={'white'}
                backgroundh={'rgb(58, 93, 206)'}
                colorh={'white'}
                border={'2px solid rgb(58, 93, 206)'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
    {/* <div className="half-circle" id="zoom">
      <img src={HalfCircleImg} alt="" width={'100%'}></img>
    </div> */}
    <div className="s3">
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
    </div>
    <div className="s4">
      <div className="s4-des">Why choose GoodStep?</div>
      <div className="s4-title">Reaching most vulnerable communities, first.</div>
      <div className="s4-c">
        <Carousel ref={slider} autoplay dots={null} effect={'fade'}>
          <div >
            <div className='contentStyle1'>
              <Row>
                <Col xs={24} lg={9} className="s4-c-left-section">
                  <div className="s4-c-title">Impact where its needed.</div>
                  <div className="s4-c-des">We ensure programs have a strong human angle that responds to india's most climate-vulneravle communities</div>
                  <Row>
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
                  </Row>
                  <Row className="s4-c-dots">
                    <Col span={8}><img src={Step1Img} alt="" width={'80%'} onClick={() => slider.current.goTo(0)}></img></Col>
                    <Col span={8}><img src={Step2Img} alt="" width={'80%'} onClick={() => slider.current.goTo(1)}></img></Col>
                    <Col span={8}><img src={Step3Img} alt="" width={'80%'} onClick={() => slider.current.goTo(2)}></img></Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <div className='contentStyle2'>
              <Row>
                <Col xs={24} lg={9} className="s4-c-left-section">
                  <div className="s4-c-title">Impact you can see.</div>
                  <div className="s4-c-des">We ensure the organisation has tangible
                    work on the ground that you can physically see and research.</div>
                  <Row>
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
                  </Row>
                  <Row className="s4-c-dots">
                    <Col span={8}><img src={Step1Img} alt="" width={'80%'} onClick={() => slider.current.goTo(0)}></img></Col>
                    <Col span={8}><img src={Step2Img} alt="" width={'80%'} onClick={() => slider.current.goTo(1)}></img></Col>
                    <Col span={8}><img src={Step3Img} alt="" width={'80%'} onClick={() => slider.current.goTo(2)}></img></Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
          <div>
            <div className='contentStyle3'>
              <Row>
                <Col xs={24} lg={9} className="s4-c-left-section">
                  <div className="s4-c-title">Impact where its needed.</div>
                  <div className="s4-c-des">We ensure programs have a strong human angle that responds to india's most climate-vulneravle communities.</div>
                  <Row>
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
                  </Row>
                  <Row className="s4-c-dots">
                    <Col span={8}><img src={Step1Img} alt="" width={'80%'} onClick={() => slider.current.goTo(0)}></img></Col>
                    <Col span={8}><img src={Step2Img} alt="" width={'80%'} onClick={() => slider.current.goTo(1)}></img></Col>
                    <Col span={8}><img src={Step3Img} alt="" width={'80%'} onClick={() => slider.current.goTo(2)}></img></Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
    <div className='s5'>

      <Row>
        <Col xs={24} md={0} lg={0} xl={0} xxl={0}>
          <Carousel>
            <div><CardBox
              starImg={star1}
              title='Floyd Miles'
              description={['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
            /></div>
            <div>
              <CardBox
                starImg={star2}
                title='Ronald Richards'
                description={['ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
              />
            </div>
            <div>
              <CardBox
                starImg={star3}
                title='Savannah Nguyen'
                description={['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ', 'Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
              />
            </div>
          </Carousel>
        </Col>
        <Col xs={0} md={24} lg={0} xl={0} xxl={0}>
          <Carousel>
          <div>
            <Row gutter={[32,32]}>
              <Col span={12}>
                <CardBox
                  starImg={star1}
                  title='Floyd Miles'
                  description={['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
                />
              </Col>
              <Col span={12}>
                <CardBox
                  starImg={star2}
                  title='Ronald Richards'
                  description={['ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
                />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[32,32]}>
              <Col span={12}>
                <CardBox
                  starImg={star2}
                  title='Ronald Richards'
                  description={['ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
                />
              </Col>
              <Col span={12}>
                <CardBox
                  starImg={star3}
                  title='Savannah Nguyen'
                  description={['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ', 'Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
                />
              </Col>
            </Row>
          </div>
          </Carousel>
        </Col>
        <Col xs={0} md={0} lg={24} xl={24} xxl={24}>
          <Carousel>
          <div>
            <Row gutter={[32,32]}>
              <Col span={8}>
                <CardBox
                  starImg={star1}
                  title='Floyd Miles'
                  description={['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
                />
              </Col>
              <Col span={8}>
                <CardBox
                  starImg={star2}
                  title='Ronald Richards'
                  description={['ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
                />
              </Col>
              <Col span={8}>
                <CardBox
                  starImg={star3}
                  title='Savannah Nguyen'
                  description={['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ', 'Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
                />
              </Col>
            </Row>
          </div>
          <div>
            <Row gutter={[32,32]}>
              <Col span={8}>
                <CardBox
                  starImg={star2}
                  title='Ronald Richards'
                  description={['ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
                />
              </Col>
              <Col span={8}>
                <CardBox
                  starImg={star3}
                  title='Savannah Nguyen'
                  description={['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ', 'Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
                />
              </Col>
              <Col span={8}>
                <CardBox
                  starImg={star1}
                  title='Floyd Miles'
                  description={['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.']}
                />
              </Col>
            </Row>
          </div>
          </Carousel>
        </Col>
      </Row>
    </div>
    <div className='s6'>
      <div className='s6-title center'>Ready to make your climate impact?</div>
      <div className='s6-des center'>We want to empower people to do their bit for the climate through causes that responds to India’s mostclimate-vulnerable communities</div>
      <button className='ready-arrow center'>
        <img src={arrow} alt='' width={'3.5%'}></img>
      </button>
    </div>
    <div className='footer'>
      <div className='footer-s1'>
        <div className='footer-title center'>Enter email to subscribe</div>
        <div className='footer-logo center'><img src={HeaderImg} alt='' width={'30%'}></img></div>
        <div className='footer-des center'> GoodStep is a game, where everyone wins - planet, people and you! The platform helps you make a gradual transition to a more sustainable and socially responsible lifestyle - and the best part? We make it easy, non-disruptive, and a fun game you can play with friends!</div>
        <Row justify={'center'}>
          <Col xs={0} md={2}></Col>
          <Col xs={24} md={5}>
            <div className='footer-title2'>Legal</div>
            <div className='footer-a'><a href='#' className='footer-link'>Terms of Service</a></div>
            <div className='footer-a' ><a href='#' className='footer-link'>Privacy Policy</a></div>
          </Col>
          <Col xs={24} md={8} className='footer-m'>
            <div className='footer-title2'>Contact Us</div>
            <div className='footer-a'><a href="mailto:hello@thegoodstep.com" className='footer-link'>hello@thegoodstep.com</a></div>
          </Col>
          <Col xs={0} md={2}></Col>
          <Col xs={24} md={6}>
            <div className='footer-title2'>Know More</div>
            <div className='footer-a'><a href='#' className='footer-link'>About Us</a></div>
            <div className='footer-a' ><a href='#' className='footer-link'>Partner with Us</a></div>
            <div className='footer-a'><a href='#' className='footer-link'>Blogs</a></div>
            <div className='footer-a' ><a href='#' className='footer-link'>FAQs</a></div>
          </Col>
        </Row>
      </div>
      <hr />
      <Row justify={'space-between'} className='footer-bottom'>
        <Col xs={24} md={12} lg={6} className='footer-title3'><a href='https://www.digitalbuzzers.com/'>GoodStep <span style={{ color: '#e1dbe8' }}><CopyrightOutlined /> 2023 DEVELOPED </span> BY Digital Buzzers</a></Col>
        <Col xs={24} md={8} lg={5} className='center'><img src={PaymentImg} width={'100%'} alt=''></img></Col>
      </Row>
    </div>
  </>)
}
export default App;

