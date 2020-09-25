import React from 'react';
import {Container, Row, Col, Fade} from 'react-bootstrap';

import './styles.scss';
import MainNav from "../../components/MainNav";
import BlueQuoteStripe from "../../components/BlueQuoteStripe";
import Footer from "../../components/Footer";

import Img1 from '../../assets/images/gallery_about-us.png';
import Img2 from '../../assets/images/guarantee-customer-satisfaction.png';
import configs from "../../assets/configs";


import ServiceBoxes  from '../../components/ServiceBoxes';

const About = (props) => {
    return (
        <div className="page-wrapper">
            <MainNav/>
            <Container style={{'margin' : '50px  auto'}}>
                <div className="main-title">
                    <h1>About Us</h1>
                </div>
                <Row>
                    <Col md={4} className={'sm-hidden'}>
                        <div className="image-wrap-right">
                            <img src={Img1} style={{'width' : '100%'}}/>
                        </div>
                    </Col>
                    <Col md={8}>
                        <h2>{configs.companyName}</h2>
                        <p className="p-large">
                            Alpha Painters PAINTING IN THE Greater Toronto and Montreal Areas
                        </p>
                        <p>At Alpha Painters, professional and expert painting is our business. Whether your project is small or large,
                            residential or commercial, interior or exterior, we cover it all. Not only, do we provide highly skilled painting services,
                            but our emphasis is on a high and unparalleled level of customer service. Customer satisfaction is our main priority that
                            is how we've grown from a small business to one of the most well known painting companies in the Toronto and Montreal Greater Areas.
                        </p>

                        <p className="p-large">
                            WHO WE SERVE
                        </p>
                        <p>Our clients come from every region of the Toronto and Montreal Greater Areas, since we have completed a wide
                            variety of painting projects throughout the region. There is a good chance that you have met someone who has used our services.
                            We attract a wide range of cliental since we provide a variety of painting services such as: interior home,
                            exterior home, commercial and repairing drywall and plaster. Even though our main clients are residential
                            home and apartment owners, commercial clients are a growing percentage of our business.
                            We realize the challenges that large-scale commercial clients face. That is why we provide customized packages of
                            services that enhance the appearance of your retail, industrial, or institutional property,
                            while making sure your existing operations are not disrupted.
                        </p>
                        <p className="p-large">WHY US</p>
                        <p>With any business, we all have our competitors. When it comes time to choosing a painting company in the Toronto and Montreal Greater areas,
                            we have learned how to stand out from the competition. So why would you choose us over other contenders? So let’s
                            identify our three key features of service that we follow at all times and that make us the best choice.</p>

                        <p><strong>Professionalism:</strong> We know very well that all communications with our clients matter and that they require absolute and complete professionalism.
                            From that first call to your quote, we guarantee that our employees will provide you with.</p>

                        <p><strong>Expert Skills:</strong> Clear communication and respect do not carry a lot of weight unless the expert painting skills
                            are in place to do the job efficiently and professionally. The principals of Alpha Painting are constantly
                            keeping themselves up to date on the new advances and developments in the painting and construction industry.</p>

                        <p><strong>Carefulness:</strong> To provide expert and efficient painting services requires an attention to details.
                            Each day as we enter into your homes and businesses, and we make sure that all furniture and items
                            are protected and the work area is always kept clean. We work hard to insure the final result is beautiful.</p>

                        <p>At Alpha Painting, we know and understand that the right combination of professionalism,
                            expert skills and carefulness is what makes us stand out from the competition.
                            So if want to know more, feel free to contact us by phone or email. Our hard work shows you how we appreciate your business.</p>

                        <img src={Img2} alt="" className="customer-satisfaction"/>
                        <div className="button-blue">
                            <a href={`${process.env.PUBLIC_URL}/get-a-quote`}>Request Service</a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container style={{margin: '50px auto'}}>
                <div className="main-title">
                    <h2>Our Services</h2>
                </div>
                <ServiceBoxes/>
            </Container>

            <BlueQuoteStripe/>
            <Footer/>
        </div>
    )
};

export default About;
