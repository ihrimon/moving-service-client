import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShowMoreText from 'react-show-more-text';
import useAuth from '../../hooks/useAuth';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';


const Services = () => {
    const [services, setServices] = useState([]);
    // const cartIcon = <FontAwesomeIcon icon={faCartArrowDown} />

    useEffect(() => {
        fetch('https://peaceful-bastion-73157.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleAddToCart = data => {
        fetch('https://peaceful-bastion-73157.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => result.data)
    };

    const { isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center spinner-style">
                <div className="d-flex justify-content-center spinner-grow" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="container p-5 my-3">
                <h2 className="mb-4 text-center theme-color fw-bold">OUR AWESOME SERVICES</h2>

                <div className="row row-cols-1 row-cols-md-3 g-5 mx-lg-5">
                    {
                        services.map(service =>
                            <div className="col-lg-4 col-12" key={service._id}>
                                <div className="card border-0 px-2 mb-3 custom-shadow hover border-radius">
                                    <div className="row align-items-center justify-content-center g-0 py-4">

                                        <div className="card-body px-4">
                                            <img src={service.icon} className="img-fluid w-25" alt="..." />
                                            <h5 className="card-title mt-3">{service.name}</h5>

                                            <p>{service.description}</p>
                                            <Link to={`/addCart/${service._id}`}>
                                                <button className="btn bg-color-sm rounded-pill text-light" service={service}> <span className="ms-2">View Details</span></button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;