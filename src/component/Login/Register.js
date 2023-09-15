
import { Checkbox, Form, DatePicker, Spin, notification, Modal, Input } from 'antd';
import './login.css';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../img/footer-logo1.png';
import { baseUrl } from '../../request';

const Register = ({ onFinish, onFinishFailed, loading }) => {
    const [steps, setSteps] = useState(Number(localStorage.getItem('stepNumber')));
    const [userInfo, setUserInfo] = useState({});
    const [acceptPolicy, setAcceptPolicy] = useState(false);
    const [emailCheck, setEmailCheck] = useState(false);
    const [step4FormLoading, setStep4FormLoading] = useState(false);
    const identity = ['Male', 'Female', 'Prefer not to say', 'Transgender', 'Non-binary', 'Genderqueer', 'Genderfluid', 'Agender', 'Bigender', 'Androgynous'];
    const occupations = ['Employed (Salaried)', 'Professional', 'Self-employed', 'Student', 'Homemaker', 'Retired', 'Unemployed'];
    const cities = [
        "Port Blair",
        "Adoni",
        "Amaravati",
        "Anantapur",
        "Chandragiri",
        "Chittoor",
        "Dowlaiswaram",
        "Eluru",
        "Guntur",
        "Kadapa",
        "Kakinada",
        "Kurnool",
        "Machilipatnam",
        "Nagarjunakoṇḍa",
        "Rajahmundry",
        "Srikakulam",
        "Tirupati",
        "Vijayawada",
        "Visakhapatnam",
        "Vizianagaram",
        "Yemmiganur",
        "Itanagar",
        "Dhuburi",
        "Dibrugarh",
        "Dispur",
        "Guwahati",
        "Jorhat",
        "Nagaon",
        "Sivasagar",
        "Silchar",
        "Tezpur",
        "Tinsukia",
        "Ara",
        "Barauni",
        "Begusarai",
        "Bettiah",
        "Bhagalpur",
        "Bihar Sharif",
        "Bodh Gaya",
        "Buxar",
        "Chapra",
        "Darbhanga",
        "Dehri",
        "Dinapur Nizamat",
        "Gaya",
        "Hajipur",
        "Jamalpur",
        "Katihar",
        "Madhubani",
        "Motihari",
        "Munger",
        "Muzaffarpur",
        "Patna",
        "Purnia",
        "Pusa",
        "Saharsa",
        "Samastipur",
        "Sasaram",
        "Sitamarhi",
        "Siwan",
        "Chandigarh",
        "Ambikapur",
        "Bhilai",
        "Bilaspur",
        "Dhamtari",
        "Durg",
        "Jagdalpur",
        "Raipur",
        "Rajnandgaon",
        "Daman",
        "Diu",
        "Silvassa",
        "Delhi",
        "New Delhi",
        "Madgaon",
        "Panaji",
        "Ahmadabad",
        "Amreli",
        "Bharuch",
        "Bhavnagar",
        "Bhuj",
        "Dwarka",
        "Gandhinagar",
        "Godhra",
        "Jamnagar",
        "Junagadh",
        "Kandla",
        "Khambhat",
        "Kheda",
        "Mahesana",
        "Morbi",
        "Nadiad",
        "Navsari",
        "Okha",
        "Palanpur",
        "Patan",
        "Porbandar",
        "Rajkot",
        "Surat",
        "Surendranagar",
        "Valsad",
        "Veraval",
        "Ambala",
        "Bhiwani",
        "Chandigarh",
        "Faridabad",
        "Firozpur Jhirka",
        "Gurugram",
        "Hansi",
        "Hisar",
        "Jind",
        "Kaithal",
        "Karnal",
        "Kurukshetra",
        "Panipat",
        "Pehowa",
        "Rewari",
        "Rohtak",
        "Sirsa",
        "Sonipat",
        "Bilaspur",
        "Chamba",
        "Dalhousie",
        "Dharmshala",
        "Hamirpur",
        "Kangra",
        "Kullu",
        "Mandi",
        "Nahan",
        "Shimla",
        "Una",
        "Anantnag",
        "Baramula",
        "Doda",
        "Gulmarg",
        "Jammu",
        "Kathua",
        "Punch",
        "Rajouri",
        "Srinagar",
        "Udhampur",
        "Bokaro",
        "Chaibasa",
        "Deoghar",
        "Dhanbad",
        "Dumka",
        "Giridih",
        "Hazaribag",
        "Jamshedpur",
        "Jharia",
        "Rajmahal",
        "Ranchi",
        "Saraikela",
        "Badami",
        "Ballari",
        "Bengaluru",
        "Belagavi",
        "Bhadravati",
        "Bidar",
        "Chikkamagaluru",
        "Chitradurga",
        "Davangere",
        "Halebid",
        "Hassan",
        "Hubballi-Dharwad",
        "Kalaburagi",
        "Kolar",
        "Madikeri",
        "Mandya",
        "Mangaluru",
        "Mysuru",
        "Raichur",
        "Shivamogga",
        "Shravanabelagola",
        "Shrirangapattana",
        "Tumakuru",
        "Vijayapura",
        "Alappuzha",
        "Vatakara",
        "Idukki",
        "Kannur",
        "Kochi",
        "Kollam",
        "Kottayam",
        "Kozhikode",
        "Mattancheri",
        "Palakkad",
        "Thalassery",
        "Thiruvananthapuram",
        "Thrissur",
        "Kargil",
        "Leh",
        "Balaghat",
        "Barwani",
        "Betul",
        "Bharhut",
        "Bhind",
        "Bhojpur",
        "Bhopal",
        "Burhanpur",
        "Chhatarpur",
        "Chhindwara",
        "Damoh",
        "Datia",
        "Dewas",
        "Dhar",
        "Dr. Ambedkar Nagar (Mhow)",
        "Guna",
        "Gwalior",
        "Hoshangabad",
        "Indore",
        "Itarsi",
        "Jabalpur",
        "Jhabua",
        "Khajuraho",
        "Khandwa",
        "Khargone",
        "Maheshwar",
        "Mandla",
        "Mandsaur",
        "Morena",
        "Murwara",
        "Narsimhapur",
        "Narsinghgarh",
        "Narwar",
        "Neemuch",
        "Nowgong",
        "Orchha",
        "Panna",
        "Raisen",
        "Rajgarh",
        "Ratlam",
        "Rewa",
        "Sagar",
        "Sarangpur",
        "Satna",
        "Sehore",
        "Seoni",
        "Shahdol",
        "Shajapur",
        "Sheopur",
        "Shivpuri",
        "Ujjain",
        "Vidisha",
        "Ahmadnagar",
        "Akola",
        "Amravati",
        "Aurangabad",
        "Bhandara",
        "Bhusawal",
        "Bid",
        "Buldhana",
        "Chandrapur",
        "Daulatabad",
        "Dhule",
        "Jalgaon",
        "Kalyan",
        "Karli",
        "Kolhapur",
        "Mahabaleshwar",
        "Malegaon",
        "Matheran",
        "Mumbai",
        "Nagpur",
        "Nanded",
        "Nashik",
        "Osmanabad",
        "Pandharpur",
        "Parbhani",
        "Pune",
        "Ratnagiri",
        "Sangli",
        "Satara",
        "Sevagram",
        "Solapur",
        "Thane",
        "Ulhasnagar",
        "Vasai-Virar",
        "Wardha",
        "Yavatmal",
        "Imphal",
        "Cherrapunji",
        "Shillong",
        "Aizawl",
        "Lunglei",
        "Kohima",
        "Mon",
        "Phek",
        "Wokha",
        "Zunheboto",
        "Balangir",
        "Baleshwar",
        "Baripada",
        "Bhubaneshwar",
        "Brahmapur",
        "Cuttack",
        "Dhenkanal",
        "Kendujhar",
        "Konark",
        "Koraput",
        "Paradip",
        "Phulabani",
        "Puri",
        "Sambalpur",
        "Udayagiri",
        "Karaikal",
        "Mahe",
        "Puducherry",
        "Yanam",
        "Amritsar",
        "Batala",
        "Chandigarh",
        "Faridkot",
        "Firozpur",
        "Gurdaspur",
        "Hoshiarpur",
        "Jalandhar",
        "Kapurthala",
        "Ludhiana",
        "Nabha",
        "Patiala",
        "Rupnagar",
        "Sangrur",
        "Abu",
        "Ajmer",
        "Alwar",
        "Amer",
        "Barmer",
        "Beawar",
        "Bharatpur",
        "Bhilwara",
        "Bikaner",
        "Bundi",
        "Chittaurgarh",
        "Churu",
        "Dhaulpur",
        "Dungarpur",
        "Ganganagar",
        "Hanumangarh",
        "Jaipur",
        "Jaisalmer",
        "Jalor",
        "Jhalawar",
        "Jhunjhunu",
        "Jodhpur",
        "Kishangarh",
        "Kota",
        "Merta",
        "Nagaur",
        "Nathdwara",
        "Pali",
        "Phalodi",
        "Pushkar",
        "Sawai Madhopur",
        "Shahpura",
        "Sikar",
        "Sirohi",
        "Tonk",
        "Udaipur",
        "Gangtok",
        "Gyalshing",
        "Lachung",
        "Mangan",
        "Arcot",
        "Chengalpattu",
        "Chennai",
        "Chidambaram",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Dindigul",
        "Erode",
        "Kanchipuram",
        "Kanniyakumari",
        "Kodaikanal",
        "Kumbakonam",
        "Madurai",
        "Mamallapuram",
        "Nagappattinam",
        "Nagercoil",
        "Palayamkottai",
        "Pudukkottai",
        "Rajapalayam",
        "Ramanathapuram",
        "Salem",
        "Thanjavur",
        "Tiruchchirappalli",
        "Tirunelveli",
        "Tiruppur",
        "Thoothukudi",
        "Udhagamandalam",
        "Vellore",
        "Hyderabad",
        "Karimnagar",
        "Khammam",
        "Mahbubnagar",
        "Nizamabad",
        "Sangareddi",
        "Warangal",
        "Agartala",
        "Agra",
        "Aligarh",
        "Amroha",
        "Ayodhya",
        "Azamgarh",
        "Bahraich",
        "Ballia",
        "Banda",
        "Bara Banki",
        "Bareilly",
        "Basti",
        "Bijnor",
        "Bithur",
        "Budaun",
        "Bulandshahr",
        "Deoria",
        "Etah",
        "Etawah",
        "Faizabad",
        "Farrukhabad-cum-Fatehgarh",
        "Fatehpur",
        "Fatehpur Sikri",
        "Ghaziabad",
        "Ghazipur",
        "Gonda",
        "Gorakhpur",
        "Hamirpur",
        "Hardoi",
        "Hathras",
        "Jalaun",
        "Jaunpur",
        "Jhansi",
        "Kannauj",
        "Kanpur",
        "Lakhimpur",
        "Lalitpur",
        "Lucknow",
        "Mainpuri",
        "Mathura",
        "Meerut",
        "Mirzapur-Vindhyachal",
        "Moradabad",
        "Muzaffarnagar",
        "Partapgarh",
        "Pilibhit",
        "Prayagraj",
        "Rae Bareli",
        "Rampur",
        "Saharanpur",
        "Sambhal",
        "Shahjahanpur",
        "Sitapur",
        "Sultanpur",
        "Tehri",
        "Varanasi",
        "Uttarakhand",
        "Almora",
        "Dehra Dun",
        "Haridwar",
        "Mussoorie",
        "Nainital",
        "Pithoragarh",
        "Alipore",
        "Alipur Duar",
        "Asansol",
        "Baharampur",
        "Bally",
        "Balurghat",
        "Bankura",
        "Baranagar",
        "Barasat",
        "Barrackpore",
        "Basirhat",
        "Bhatpara",
        "Bishnupur",
        "Budge Budge",
        "Burdwan",
        "Chandernagore",
        "Darjeeling",
        "Diamond Harbour",
        "Dum Dum",
        "Durgapur",
        "Halisahar",
        "Haora",
        "Hugli",
        "Ingraj Bazar",
        "Jalpaiguri",
        "Kalimpong",
        "Kamarhati",
        "Kanchrapara",
        "Kharagpur",
        "Cooch Behar",
        "Kolkata",
        "Krishnanagar",
        "Malda",
        "Midnapore",
        "Murshidabad",
        "Nabadwip",
        "Palashi",
        "Panihati",
        "Purulia",
        "Raiganj",
        "Santipur",
        "Shantiniketan",
        "Shrirampur",
        "Siliguri",
        "Siuri",
        "Tamluk",
        "Titagarh"
    ]
    const navigate = useNavigate();

    const updateUserInfo = async (val, step) => {
        const data = userInfo;
        if (step === 5) {
            setStep4FormLoading(true);
            const response = await fetch(`${baseUrl}/register`, {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({ ...data, ...val }),
            }).then(res => res.json());

            if (response.error === "Failed to create user") {
                Modal.error({
                    title: 'Failed to create user',
                    content: 'please try again...',
                });
            }
            else if (response.error === "User Already Existed") {
                Modal.info({
                    title: 'User Already Existed',
                    content: 'please login...',
                });
                setSteps(6);
            }
            else if (response.email) {
                notification.success({
                    message: 'You successfully complete registration process',
                })
                localStorage.setItem("email", data.email);
                localStorage.setItem("logged", 'true');
                navigate('/dashboard');
            }
            setStep4FormLoading(false);
            console.log(data, 'val.email')
        }
        setUserInfo({ ...data, ...val });
    }

    const savestep2Data = async (val) => {
        if (acceptPolicy) {
            const checked = await checkEmailAlreadyExitOrNot(val.email);
            if (checked) {
                updateUserInfo(val, 3);
                setSteps(3);
            }
        }
        else {
            alert('select checkbox')
        }
    }

    const savestep3Data = (val) => {
        updateUserInfo(val, 4);
        setSteps(4);
    }

    const savestep4Data = (val) => {
        updateUserInfo(val, 5);
    }
    const emailValidation = '/^[A-Za-z0-9+_.-]+@(.+)$/';

    const checkEmailAlreadyExitOrNot = async (email) => {
        setEmailCheck(true);
        const response = await fetch(`${baseUrl}/checkEmail`, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ email: email }),
        }).then(res => res.json());

        if (response.message === "User already exists..!! Try another Email Id ") {
            Modal.error({
                title: 'User already exists..!!',
                content: 'Try another Email Id...',
            });
        }
        else if (response.message === "Valid Email") {
        }
        setEmailCheck(false);
        return response.message === "Valid Email" ? true : false;
    }
    const onClickPreventDefault = (e) => {
        e.preventDefault();
    }
    return (<>
        {steps === 1 &&
            <div className='step1-page'>
                <div className='logo-img-top'>
                    <NavLink to={'/'}>
                        <img src={logo} alt='' width={'100%'} />
                    </NavLink>
                </div>
                <div className='login-form'>
                    <div className='step1-title center'>Hey there! </div>
                    <div className='step1-des center'>We have curated a 3 minute survey to get you started on your GoodStep journey</div>
                    <div className='center'><button className='step1-primary-button' onClick={() => { setSteps(2) }}>Let’s go</button></div>
                </div>
            </div>
        }
        {steps === 2 &&
            <div className='step2-page'>
                <div className='logo-img-top'>
                    <NavLink to={'/'}>
                        <img src={logo} alt='' width={'100%'} />
                    </NavLink>
                </div>
                <div className='login-form'>
                    <div className='step2-title center'>Sign up to take action!</div>
                    <div className='step2-des center'>Create your account while we put together do-good actions specially for you!</div>

                    <Form
                        onFinish={savestep2Data}
                        autoComplete="off"
                    >
                        <Spin spinning={emailCheck}>
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                        // pattern: new RegExp(emailValidation),
                                    },
                                ]}
                            >
                                <input type='email' placeholder='Email ID' className='step2-inputBox' onClick={onClickPreventDefault} />
                            </Form.Item>
                            <Form.Item
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <input placeholder='Username' className='step2-inputBox' onClick={onClickPreventDefault} />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <input type='password' placeholder=' Password' className='step2-inputBox' onClick={onClickPreventDefault} />
                            </Form.Item>
                            <Form.Item>
                                <Checkbox onChange={(e) => { setAcceptPolicy(e.target.checked) }}> I understand and accept the Terms and Conditions and Privacy Policy</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <div className='center'>
                                    <button className='step2-primary-button' type="primary" htmlType="submit">Submit</button></div>
                            </Form.Item>
                        </Spin>
                    </Form>
                </div>
            </div>
        }
        {steps === 3 &&
            <div className='login-box'>
                <div className='logo-img-top'>
                    <NavLink to={'/'}>
                        <img src={logo} alt='' width={'100%'} />
                    </NavLink>
                </div>
                <div className='login-form'>
                    <div className='login-title center'>Let's get started! </div>
                    <Form
                        onFinish={savestep3Data}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="firstName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your first name!',
                                },
                            ]}
                        >
                            <input placeholder='First Name' className='step3-inputBox' onClick={onClickPreventDefault} />
                        </Form.Item>
                        <Form.Item
                            name="lastName"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your last Name!',
                                },
                            ]}
                        >
                            <input placeholder='Last Name' className='step3-inputBox' onClick={onClickPreventDefault} />
                        </Form.Item>

                        <Form.Item
                            name="dob"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your date of birth!',
                                },
                            ]}
                        >
                            <DatePicker className='step3-inputBox' />
                        </Form.Item>
                        <Form.Item>
                            <div className='center'><button className='step3-primary-button' type="primary" htmlType="submit">Next</button></div>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        }
        {steps === 4 &&
            <div className='step2-page'>
                <div className='logo-img-top'>
                    <NavLink to={'/'}>
                        <img src={logo} alt='' width={'100%'} />
                    </NavLink>
                </div>
                <div className='login-form'>
                    <div className='step4-title center'>Getting to know you better</div>
                    <Spin spinning={step4FormLoading}>
                        <Form
                            onFinish={savestep4Data}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="identity"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select identity!',
                                    },
                                ]}
                            >
                                <select
                                    placeholder='I identify as' className='step2-inputBox'
                                >
                                    <option value="">I identify as</option>
                                    {identity.map(item => <option value={item}>{item}</option>)}
                                    <option value="Others">Others</option>
                                </select>
                            </Form.Item>
                            <Form.Item
                                name="liveIn"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select location!',
                                    },
                                ]}
                            >
                                <select
                                    placeholder='I live in' className='step2-inputBox'
                                >
                                    <option value="">I live in</option>
                                    {cities.map(item => <option value={item}>{item}</option>)}
                                    <option value="Others">Others</option>
                                </select>
                            </Form.Item>
                            <Form.Item
                                name="occupation"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please select occupation!',
                                    },
                                ]}
                            >
                                <select
                                    placeholder='My occupation is' className='step2-inputBox'
                                >
                                    <option value="">My occupation is</option>
                                    {occupations.map(item => <option value={item}>{item}</option>)}
                                    <option value="Others">Others</option>
                                </select>
                            </Form.Item>
                            <Form.Item>
                                <div className='center'>
                                    <button className='step2-primary-button' type="primary" htmlType="submit">Submit</button></div>
                            </Form.Item>
                        </Form>
                    </Spin>
                </div>
            </div>
        }
        {steps === 5 &&
            <div className='step1-page'>
                <div className='logo-img-top'>
                    <NavLink to={'/'}>
                        <img src={logo} alt='' width={'100%'} />
                    </NavLink>
                </div>
                <div className='login-form'>
                    <div className='step1-title center'>Welcome!</div>
                    <div className='step1-des center'>You successfully complete registration process</div>
                    <div className='center'><button className='step1-primary-button' onClick={() => { setSteps(6) }}>Get started</button></div>
                </div>
            </div>
        }
        {steps === 6 &&
            <Spin spinning={loading}>
                <div className='login-box'>
                <div className='logo-img-top'>
                    <NavLink to={'/'}>
                        <img src={logo} alt='' width={'100%'} />
                    </NavLink>
                </div>
                    <div className='login-form'>
                        <div className='login-title center'>Login</div>
                        <Form
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <input type='email' placeholder='Email ID' className='step3-inputBox' />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <input type='password' placeholder='Password' className='step3-inputBox' />
                            </Form.Item>
                            <Form.Item>
                                <div className='center'><button className='step3-primary-button' type="primary" htmlType="submit">Log In</button></div>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Spin>
        }
    </>)
}

export default Register;