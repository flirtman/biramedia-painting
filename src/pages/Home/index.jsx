import React, {useEffect} from 'react';
import {Fade, Slide} from 'react-reveal';
import './styles.scss';
import MainNav from "../../components/MainNav";
import {Col, Row} from 'react-bootstrap';

import Background from '../../assets/images/background_01.jpg';
import ImgSales1 from '../../assets/images/phone-ring.png';
import ImgSales2 from '../../assets/images/worenty.png';
import ImgSales3 from '../../assets/images/lisence.png';

import inner_blue_02 from '../../assets/images/inner_blue_02.jpg';



import Brands from "../../components/Brands";
import BlueQuoteStripe  from '../../components/BlueQuoteStripe';
import ServiceBoxes  from '../../components/ServiceBoxes';
import configs from "../../assets/configs";

import BestHVACImg from '../../assets/images/air-conditioner-installation-Best-HVAC.jpg';
import EcoFriendlyLogoImg from '../../assets/images/eco-friendly-logo.png';

import painting_specialists from '../../assets/images/painting_specialists.jpg';
import respecting_customers from '../../assets/images/respecting_customers.jpg';
import the_full_package from '../../assets/images/the_full_package.jpg';

import Footer from '../../components/Footer';

const Home = () => {
    const setStyle={
        backgroundImage: "url(" + Background + ")",
    };
    useEffect( () =>{
        document.title = `${configs.companyName} | Painters in ${configs.greatCity} and surrounding areas`;
    });
    return (
        <div className="page-wrapper">
            <div style={setStyle} className="page-wrapper-content">
                <MainNav/>
                <div className="container">
                    <div className="header-wrapper">
                        <div style={{maxWidth: '600px'}}>
                            <Fade left cascade>
                                <h1 className="">
                                    Professional <span className="blue-text">Painters</span> <br/>
                                    in <span className="blue-text">{configs.greatCity}</span>
                                </h1>
                            </Fade>
                            <Fade>
                                <p className="">{configs.companyName} is here when you need us to service both your residential and commercial properties.</p>
                                <div className="">
                                    <div className="button-blue">
                                        <a href={`${process.env.PUBLIC_URL}/get-a-quote`}>Request Service</a>
                                    </div>
                                    <div className="button-white">
                                        <a href={`${process.env.PUBLIC_URL}/about`}>About Us</a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <Fade left cascade>
                        <ServiceBoxes/>
                    </Fade>
                    <Fade bottom>
                        <div className="sales-line-section">
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales1} alt=""/>
                                </div>
                                <p>AVAILABLE 24 HOURS</p>
                            </div>
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales2} alt=""/>
                                </div>
                                <p>LICENSED & INSURED</p>
                            </div>
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales3} alt=""/>
                                </div>
                                <p>WARRANTY & MAINTENANCE</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <Fade bottom>
                    <div className="about-section">
                    <Slide left>
                        <div className="about-section-left">
                            <div className="about-section-left-content">
                                <h3>
                                    <span>Painting Service</span> in Greater Toronto and Montreal Areas
                                </h3>
                                <p>
                                    <img src={EcoFriendlyLogoImg} alt="" className={'ecoFriendlyLogo'}/>
                                    Welcome to {configs.companyName}, we are one of the top painting services companies in the Greater Toronto and Montreal Areas.
                                    After many years of experience in residential and commercial painting, interior and exterior,
                                    we have learned that what is most important to our customers is a good quality job at a reasonable and fair price.
                                    With every project our approach is always conducted with professionalism, quality and an attention to details.
                                    We strive to deliver top-notch painting services and we know this, because we bring smiles to the faces of our customers.
                                </p>
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="about-section-right" style={{backgroundImage: `url(${inner_blue_02})`}} >
                            <div className="about-section-right-content">
                                <h3>Trusted & Proud</h3>
                                <p>We have over 15 years of experience in providing painting services.</p>
                            </div>
                        </div>
                    </Slide>
                </div>
                </Fade>
                <div className="ac-section">
                    <Slide left>
                        <div className="ac-section-left" style={{backgroundImage: `url(${BestHVACImg})`}} >
                            <div className="ac-section-left-content">
                                {/*<h3>Trusted & Proud</h3>*/}
                                {/*<p>We have over 15 years experience in the air conditioning industry.</p>*/}
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="ac-section-right">
                            <div className="ac-section-right-content">
                                <h3><span>{configs.companyName}</span> - Professionalism and values</h3>
                                <p>{configs.companyName} core values are the pillars of our success.
                                    These values drive our daily decisions.</p>
                                <Row>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={painting_specialists} alt=""/>
                                            </span>
                                            <span>
                                                <h4>Painting Specialists</h4>
                                                <p>
                                                    A number of people think that painting is a simple job that does not require a lot of skills.
                                                    While this can be true of sub-standard contractors, {configs.companyName} delivers expert and professional services.
                                                    We have in-depth knowledge of various techniques and experience in residential,
                                                    commercial and industrial buildings. You can be guaranteed we will deliver high quality paint jobs.
                                                </p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={respecting_customers} alt=""/>
                                            </span>
                                            <span>
                                                <h4>Respecting Customers</h4>
                                                <p>
                                                    As contractors we instill trust and confidence when
                                                    it comes to being on your property and especially inside your home.
                                                    At {configs.companyName}, we always show respect for you and your property.
                                                    Our painters are well trained and they are always courteous and friendly.
                                                    We make sure that our work site is clean and maintained and that your premise
                                                    is always respected, whether it is residential, commercial or industrial. We are fully insured.
                                                </p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={the_full_package} alt=""/>
                                            </span>
                                            <span>
                                                <h4>The Full Package</h4>
                                                <p>
                                                    At {configs.companyName} we are your one-stop shop for all your painting needs.
                                                    We provide a full suite of painting services under one roof.
                                                    This consists of a variety and a diversity of painting and paint-related services.
                                                    When you hire us, there is only one single point of contact, which allows for a faster completion time.
                                                    We offer an efficient and quick service that builds an enhanced business relationship for your next future project.
                                                    We are always ready to lend a helping hand.
                                                </p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Slide>
                </div>
                <BlueQuoteStripe/>
                <Brands/>
                <Footer/>
            </div>
        </div>
    )
};

export default Home;
