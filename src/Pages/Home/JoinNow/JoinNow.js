import React from 'react';
import { Link } from 'react-router-dom';

const JoinNow = () => {
    return (
        <div className='mx-3'>
            <div className="container bg-color-sm my-5 py-5 border-radius">
            <div className="container p-lg-5">
                <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center text-light">
                    <div className="col-lg-6 col-12 text-start">
                        <h2 className="fw-bold fs-1">LET'S JOIN WITH US</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="col-lg-6 col-12">
                        <Link to="/about" className="btn btn-light rounded-pill px-5 py-3 text-color fw-bold" type='submit'>JOIN NOW</Link>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default JoinNow;