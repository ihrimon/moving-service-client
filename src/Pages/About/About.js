import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../images/subscription.png';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShippingFast, faFileInvoiceDollar, faCog, faHeadset } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    // const shippingIcon = <FontAwesomeIcon icon={faShippingFast} />
    // const deliveryIcon = <FontAwesomeIcon icon={faFileInvoiceDollar} />
    // const GuaranteeIcon = <FontAwesomeIcon icon={faCog} />
    // const supportIcon = <FontAwesomeIcon icon={faHeadset} />



    return (
        <div>
            <div>
                <div className="border-radius bg-light py-3">
                    <div className="d-flex flex-lg-row flex-column align-items-center">
                        <div className="col-12 pt-5 pt-lg-0 text-light text-left color-theme">
                            <h1 className="mt-3 w-75 mx-auto text-color fw-bold" >About Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className="container d-flex flex-lg-row flex-column align-items-lg-center justify-content-between mt-5">
                    <div className="col-lg-6 col-12 me-5">
                        <img src={img} className="w-100" alt="" />
                    </div>
                    <div className=" col-lg-6 col-12 text-start mt-3">
                        <h5 className='text-color'>About Our Company</h5>
                        <h1>We are Top House and Office Shifting Company in the city.</h1>
                        <p>We utilize state-of-the-art moving equipment to ensure every move we take on begins and ends with the precious memories of your home remaining fully intact and pristine. Our professional movers located in South Florida have years of experience, incredible training, and amazing people skills. We eliminate the stress and hassle of having to move, whether it's down the road or in a different state.</p>
                    </div>
                </div>
            </div>

            {/* Delivery Service */}
            {/* <div className="container mx-auto row row-cols-2 row-cols-lg-4 g-3 g-lg-4 mt-3">
                <div className="col">
                    <div className="border-end">
                        <h1 className="text-color">{shippingIcon}</h1>
                        <h6>Free Shipping</h6>
                        <small>Free for first orders</small>
                    </div>
                </div>
                <div className="col">
                    <div className="border-end">
                        <h1 className="text-color">{deliveryIcon}</h1>
                        <h6>Payment On Delivery</h6>
                        <small>Cash on delivery option</small>
                    </div>
                </div>
                <div className="col">
                    <div className="border-end">
                        <h1 className="text-color">{GuaranteeIcon}</h1>
                        <h6>Free Guarantee</h6>
                        <small>30 Days Money Back</small>
                    </div>
                </div>
                <div className="col">
                    <div>
                        <h1 className="text-color">{supportIcon}</h1>
                        <h6>24/7 Online Support</h6>
                        <small>We have support 24/7</small>
                    </div>
                </div>
            </div> */}
        </div>

    );
};

export default About;
