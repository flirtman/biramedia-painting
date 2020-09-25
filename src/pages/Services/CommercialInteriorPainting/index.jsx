import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

const CommercialInteriorPainting = () => {
    const setStyle={
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    };
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Commercial Interior Painting</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2>Commercial Interior Painting services Greater Toronto and Montreal Areas</h2>
                                    <p>At Alpha Painters, we provide a wide variety of commercial painting services costumed to the needs of our customers.
                                        This includes everything from one-room offices to apartment complexes to city warehouses.</p>
                                    <ul>
                                        <li>Commercial and retail painting</li>
                                        <li>Graffiti removal</li>
                                        <li>Industrial and warehouse painting</li>
                                        <li>Medical, hospital and school painting</li>
                                        <li>Office painting</li>
                                        <li>Residential Complex painting</li>
                                        <li>Epoxy and concrete floor painting</li>
                                        <li>Anti-slip floor painting for restaurants</li>
                                    </ul>
                                    <p>We understand the challenges of commercial painting projects, in that day-to-day operations cannot be obstructed.
                                        That is why at Alpha Painters, we are available during weekends and off-hours. As well, we assemble large work teams to complete a project as fast as possible, so that you can back to operating your business.
                                        Remember, we always come up with work strategies that are always accustomed to the needs of our clients.
                                    </p>
                                    <p>
                                        <strong>Let Alpha Painters assist you today!</strong><br/>
                                        Call us at 647-882-5454 and let's talk about your project needs and how we can assist you.
                                    </p>
                                </Fade>
                            </Col>
                            <Col md={4}>
                                <Fade>
                                    <ServicesSider/>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <BlueQuoteStripe/>
                <Footer/>
            </div>
        </div>
    );
};

export default CommercialInteriorPainting;
