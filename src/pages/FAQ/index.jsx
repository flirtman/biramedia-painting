import React from 'react';
import {Container, Row, Col, Accordion, Card} from 'react-bootstrap';
import './styles.scss';
import MainNav from "../../components/MainNav";
import BlueQuoteStripe from "../../components/BlueQuoteStripe";
import Footer from "../../components/Footer";
import ServicesSider from "../../components/ServicesSider";

import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const FAQ = (props) => {
    const setStyle={
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="faq-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <LiveHelpIcon/>When Can I Expect My Estimate?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> In most cases, we provide you with a printed proposal at the end of the on-site estimate, along with a price that includes all materials and labor.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <LiveHelpIcon/> What Should I Do to Prepare for the Estimate?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> It’s best for all decision-makers to be present at the time of the estimate. If not, make sure you discuss all work together ahead of time. We recommend that you: Make a list of all the work you want done for each room or on the exterior of your home. Choose colors and / or finishes. Make a list of what you did and did not like about your last paint job or painter. Identify your budget. We realize that painting your home is a major investment. We want to earn your business and can tailor a proposal for every budget. The estimate will take approximately 60-90 minutes.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            <LiveHelpIcon/> Can You Also Repair My Drywall or Rotten Wood?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> As a painting company that prides itself on quality and professionalism, we can repair holes and cracks in drywall before we start painting. We offer a variety of other services, too, including repair of rotted wood, wood siding replacement, windowsill repair, and other small carpentry jobs. If it's not listed, just ask! We want to earn your business.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3">
                                            <LiveHelpIcon/> What Type of Paint Do You Use?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Our professional painters work with multiple suppliers including Sherwin Williams®, BEHR®, and Benjamin Moore®, or can use any brand you prefer. We can recommend a variety of zero-VOC and low-VOC paints for low odor and toxicity. We always try to be eco-friendly. If you are interested in an exterior painting service, you may want to read about exterior color trends and about exterior prep tips. Learn more about our preferred home painting partners.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="4">
                                            <LiveHelpIcon/> What Should I Do to Prepare for the Painting After We Sign a Contract?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Prior to your painting service, we ask that you move fragile or breakable items-for example, pictures, glassware, and electronic devices-when possible. We can move furniture and even a wall-mounted TV if needed. Upon completion of the room, we move everything back into place.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="5">
                                            <LiveHelpIcon/> Do you offer commercial painting services?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                <QuestionAnswerIcon/> Yes, we offer commercial services all year long. We can paint interiors of buildings including new construction, multi-family units, apartment complexes, condos, and more.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col md={4}>
                                <ServicesSider/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <BlueQuoteStripe/>
            <Footer/>
        </div>
    )
};

export default FAQ;
