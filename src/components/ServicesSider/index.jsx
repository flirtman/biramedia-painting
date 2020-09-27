import React from "react";
import './styles.scss';
import configs from "../../assets/configs";
import {Nav} from "react-bootstrap";

const ServicesSider = () => {
  return (
      <div className="section-service-sider">
          <div className="services-sider-wrap">
              <h2>Services</h2>
              <ul>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/commercial-interior-painting`}>Commercial Interior Painting</Nav.Link></li>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/residential-interior-painting`}>Residential Interior Painting</Nav.Link></li>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/plaster-and-drywall-services`}>Plaster and Drywall Services</Nav.Link></li>
              </ul>
          </div>
          <a className="call-now" href={`tel:${configs.phone}`}><strong><big>{configs.phone}</big></strong></a>
          <a className="get-a-quote" href={`${process.env.PUBLIC_URL}/get-a-quote`}>GET A QUOTE</a>
      </div>
  )
};

export default ServicesSider;
