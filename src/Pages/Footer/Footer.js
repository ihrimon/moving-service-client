import React from 'react';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faMapMarkerAlt, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    const phoneIcon = <FontAwesomeIcon icon={faPhone} />
    const addressIcon = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const emailIcon = <FontAwesomeIcon icon={faEnvelopeOpen} />


    return (
        <div className="bg-color pb-5 mt-5 text-color">
            <div class="container">
                <div class="row row-cols-4 row-cols-lg-3 g-5 g-lg-5 py-5 text-light">
                    <div class="col">
                        <div class="p-3 d-flex justify-content-center text-start">
                            <h4 className='bg-color-sm rounded-circle me-4 p-4 m-0'>{phoneIcon}</h4>
                            <div>
                                <h4>Phone Call: </h4>
                                <p>+880184057846</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 d-flex justify-content-center text-start">
                            <h4 className='bg-color-sm rounded-circle me-4 p-4 m-0'>{addressIcon}</h4>
                            <div>
                                <h4>Address:</h4>
                                <p>City-14, Banani, Dhaka</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="p-3 d-flex justify-content-center text-start">
                            <h4 className='bg-color-sm rounded-circle me-4 p-4 m-0'>{emailIcon}</h4>
                            <div>
                                <h4>Email Us:</h4>
                                <p>home147@moving.com </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ border: "1px solid white" }} className='mt-5 ' />
            <div className="container mt-5 pt-5 pb-3">
                <div>
                    <div className="row text-light">
                        <div className="col-6 col-lg-3 mb-lg-0 mb-4 text-start">
                            <ul className="important-list p-0 px-lg-4" style={{ listStyleType: "none" }}>
                                <li className="text-start fw-bold mb-2">Quick Links</li>
                                <li className="text-start">Home</li>
                                <li className="text-start">About us</li>
                                <li className="text-start">Contact</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4" style={{ listStyleType: "none" }}>
                                <li className="text-start fw-bold mb-2">Other pages</li>
                                <li className="text-start">My orders</li>
                                <li className="text-start">Manage all orders</li>
                                <li className="text-start">Add services</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4" style={{ listStyleType: "none" }}>
                                <li className="text-start fw-bold mb-2">Contact Info</li>
                                <li className="text-start my-1">123 street, California</li>
                                <li className="text-start my-1">+8801322810867</li>
                                <li className="text-start my-1">website@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-6 col-lg-3">
                            <ul className="important-list p-0 px-lg-4" style={{ listStyleType: "none" }}>
                                <li className="text-start mb-1 fw-bold mb-2">Get Customer Support</li>
                                <li className="text-start mt-1 mb-2" style={{ lineHeight: 1.6 }}>Our team is always available 24/7 to answer your queries</li>
                                <li className="text-start mt-1">
                                    <button className="rounded-pill btn bg-color-sm text-light my-2 px-3" type="tel">{phoneIcon}<span className="ms-2">+88012345678</span></button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="me-3">
                            <NavLink to="/">
                                <img src={logo} width="100px" alt="" />
                            </NavLink>
                        </div>
                        <div>
                            <p className="mt-5 mb-0 pb-5 text-start text-light">Copyright ©moving-service-2021 | This website is made by Imam Hassan Rimon</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;