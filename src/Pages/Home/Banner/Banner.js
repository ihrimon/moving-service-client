import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import './Banner.css'

const Banner = () => {
    // const arrowIcon = <FontAwesomeIcon icon={faLongArrowAltRight} />

    return (
        <div className="img-banner">
            <div className="container bg-color-sm w-50 py-5">
                <div className="px-5">
                <h1 className="mt-3 fw-bold fs-1" >Fast & Secure Move Is Our Promise.</h1>
                        <p className="mb-4">Lumix is Panasonic's brand of digital cameras, ranging from pocket point and shoot models to digital SLRs. ... Some Lumix models are branded with Leica lenses although manufacture the lenses.
                        </p>
                        <Link to="/contact"><button className="btn btn-light bg-color text-light px-4 py-2 mb-3"> <span className="ms-2">Learn More</span></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;