import React from "react";
import './styles.scss';


import {Fade} from "react-reveal";

import paint1 from '../../assets/images/brands/benjamin-moore-regal-select.jpg';
import paint2 from '../../assets/images/brands/valspar-interior-paints.jpg';
import paint3 from '../../assets/images/brands/benjamin-moore-ben-interior-paints.jpg';
import paint4 from '../../assets/images/brands/interior-paint-glidden-premium.jpg';
import paint5 from '../../assets/images/brands/benjamin-moore-natura-interior-paints.jpg';
import paint6 from '../../assets/images/brands/behr-interior-paints.jpg';
import paint7 from '../../assets/images/brands/pratt-and-lambert-interior-paints.jpg';
import paint8 from '../../assets/images/brands/sherwin-williams-interior-paints.jpg';
import paint9 from '../../assets/images/brands/benjamin-moore-aura-interior-paints.jpg';
import paint10 from '../../assets/images/brands/behr-marquee-interior-paint.jpg';





const Brands = () => {
    return (
        <div className="brands-section">
                <Fade>
                        <h2>The Best Interior <span>Paints</span> and Color <span>Trends</span> </h2>
                </Fade>
                <Fade>
                        <ul className="brands-list">
                            <li>
                                <div>
                                    <img src={paint1} alt=""/>
                                    <span className="color-name">Regal Select</span>
                                    <span className="brand-name">BENJAMIN MOORE</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={paint2} alt=""/>
                                    <span className="color-name">Signature</span>
                                    <span className="brand-name">VALSPAR</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={paint3} alt=""/>
                                    <span className="color-name">ben</span>
                                    <span className="brand-name">BENJAMIN MOORE</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={paint4} alt=""/>
                                    <span className="color-name">Interior Premium</span>
                                    <span className="brand-name">GLIDDEN</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={paint5} alt=""/>
                                    <span className="color-name">Natura</span>
                                    <span className="brand-name">BENJAMIN MOORE</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={paint6} alt=""/>
                                    <span className="color-name">Paint & Primer In One</span>
                                    <span className="brand-name">BEHR PREMIUM PLUS</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={paint7} alt=""/>
                                    <span className="color-name">Accolade</span>
                                    <span className="brand-name">PRATT AND LAMBERT</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={paint8} alt=""/>
                                    <span className="color-name">Duration Home</span>
                                    <span className="brand-name">SHERWIN-WILLIAMS</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={paint9} alt=""/>
                                    <span className="color-name">Aura</span>
                                    <span className="brand-name">BENJAMIN MOORE</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={paint10} alt=""/>
                                    <span className="color-name">Marquee</span>
                                    <span className="brand-name">BEHR</span>
                                </div>
                            </li>
                        </ul>
                </Fade>
        </div>
    )
};

export default Brands;
