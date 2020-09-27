import React, {useEffect} from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';
import configs from "../../../assets/configs";

const AirConditioning = () => {
    const setStyle={
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    };
    useEffect( () =>{
        document.title = `${configs.companyName} | Painters in ${configs.greatCity} and surrounding areas`;
    });
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Residential Interior Painting</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2>Residential Interior services in Greater Toronto and Montreal Areas</h2>
                                    <p>
                                        Our main business in the Greater Toronto and Montreal Areas is residential interior painting services.
                                        We are there every step of the way, from color choices to planning to a spotless clean up of the work site after the contract is completed.
                                        We bring a freshness and life to worn out interior spaces.
                                        We use only the top quality line of paints and best materials to create magic to your indoor space.
                                        Our following services are:
                                    </p>
                                    <ul>
                                        <li>Paint color and design consultation</li>
                                        <li>Furniture protection</li>
                                        <li>Gap caulking</li>
                                        <li>Wall washing and preparation</li>
                                        <li>Wall and ceiling painting</li>
                                        <li>Crown molding and trim painting</li>
                                        <li>Texture addition or removal</li>
                                        <li>Kitchen and bathroom painting</li>
                                    </ul>
                                    <p>
                                        We all know that nothing like a fresh coat of paint improves the feeling of your home.
                                        Not only does it improve the aesthetic appeal of your home, but there are other positive aspects as well.
                                        Good quality paints in the bathroom and kitchen can help to reduce humidity and thus reduce the chances of accumulation mold and mildew.
                                    </p>
                                    <p>
                                        <strong>Newly painted interior walls can also decrease utility costs.</strong><br/>
                                        Give us a call today 647-882-5454
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

export default AirConditioning;
