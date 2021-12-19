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
        fetch('http://localhost:4000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleAddToCart = data => {
        fetch('http://localhost:4000/orders', {
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
                <h6 className="mb-4 text-center theme-color fw-bold">We offier differnt services</h6>
                <h2 className="mb-4 text-center theme-color fw-bold">OUR AWESOME SERVICES</h2>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        services.map(service =>
                            <div className="col-lg-4 col-12 text-start" key={service._id}>
                                <div class="card border-0 px-2 mb-3 custom-shadow" style={{maxWidth: "540px"}}>
                                    <div class="row align-items-center g-0">
                                        <div class="col-md-2">
                                            <img src={service.img} class="img-fluid" alt="..."/>
                                        </div>
                                        <div class="col-md-10">
                                            <div class="card-body">
                                                <h5 class="card-title text-color">{service.name}</h5>
                                                <ShowMoreText
                                                lines={2}
                                                more='Read more'
                                                less='Show less'
                                                anchorClass=''
                                                expanded={false}
                                                className='my-3'
                                            >
                                                <p>{service.description},</p>
                                         
                                                </ShowMoreText>
                                                <button onClick={handleAddToCart} service={service} className='btn btn-sm bg-color text-light' type='submit'>Add to Cart</button>
                                            </div>
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