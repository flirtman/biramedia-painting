import React from 'react';
import ImgBox1 from "../../assets/images/inner_11.jpg";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ImgBox2 from "../../assets/images/inner_12.jpg";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import ImgBox3 from "../../assets/images/inner_13.jpg";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";



import './styles.scss'

const ServiceBoxes = () => {
    return (
        <div className="boxes-section">
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox1} alt=""/>
                </div>
                <div className="box-icon"><HomeOutlinedIcon/></div>
                <div className="box-content">
                    <h2>Residential Interior Painting</h2>
                    <p>
                        Looking to paint your home? We carry all the professional painting tools. Our painting supplies are in all kinds of colors and styles. We have something for everyone!
                    </p>
                    <div className="box-btn"><a href="">Read More</a></div>
                </div>
            </div>
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox2} alt=""/>
                </div>
                <div className="box-icon"><BusinessOutlinedIcon/></div>
                <div className="box-content">
                    <h2>Commercial Interior Painting</h2>
                    <p>
                        Are you considering painting the interior of your commercial property? No project is too big or small. Whether it is retail, industrial or institutional jobs, let us bring our fast and efficient painting services to you.
                    </p>
                    <div className="box-btn"><a href="">Read More</a></div>
                </div>
            </div>
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox3} alt=""/>
                </div>
                <div className="box-icon"><BuildOutlinedIcon/></div>
                <div className="box-content">
                    <h2>Plaster and Drywall Services</h2>
                    <p>
                        We treat plaster and drywall problems and not the symptoms. We repair and patch your drywall, so that your next coat of paint is beautiful and long lasting.
                    </p>
                    <div className="box-btn"><a href="/">Read More</a></div>
                </div>
            </div>
        </div>
    )
};

export default ServiceBoxes
