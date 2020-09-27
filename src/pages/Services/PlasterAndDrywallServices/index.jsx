import React, {useEffect} from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';
import configs from "../../../assets/configs";

const PlasterAndDrywallServices = () => {
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
                            <h1>Plaster and Drywall</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2>Plaster and Drywall services in Greater Toronto and Montreal Areas</h2>
                                    <p>
                                        At Alpha Painters, we ensure that our plaster and drywall repair services are done properly and to construction codes.
                                        That way you can be confident that your new fresh coat of paint will not peel or bubble,
                                        but will have a long life and look great for many years to come.
                                    </p>
                                    <p><strong>We fix the following plaster and drywall problems:</strong></p>
                                    <ul>
                                        <li>Ceiling plaster repairs</li>
                                        <li>Crown molding and trim installation</li>
                                        <li>Drywall texturing or texture removal</li>
                                        <li>New drywall installation</li>
                                        <li>Plaster and drywall holes in walls</li>
                                        <li>Refinishing for electrical outlets and switches</li>
                                        <li>Stress cracks from property settling</li>
                                        <li>Water damage</li>
                                    </ul>
                                    <p>We know all the construction methods used in local homes and commercial sites.<br/>
                                        With our experience and knowledge we can work with each plaster problem and solve it quickly and efficiently.</p>
                                    <p>
                                        <strong>Need Assistance? We are here to help!</strong><br/>
                                        Contact us to today at 647-882-5454
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

export default PlasterAndDrywallServices;
