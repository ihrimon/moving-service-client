import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './Review.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-bastion-73157.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='review-banner'>
            <div className="container px-5">
                <h2 className="mb-4 text-color fw-bold">Customer Reviews</h2>
                <p className='text-light mb-5 w-75 mx-auto'>Good Quality Material are the two main strengths of our company. Packers use only high quality moving packing material so that we can assure you about the safety of your belongings.</p>
                <div className="row row-cols-2 row-cols-lg-4 g-5 g-lg-5 text-center mt-5">
                    {
                        reviews.map(review =>
                            <div className="col-lg-3 col-12" style={{ marginBottom: "70px" }} key={review._id}>
                                <div className="card h-100 d-flex flex-column align-items-center m-2 border-radius">
                                    <div  className="card bg-transparent border border-0">
                                        <div className='mx-auto' style={{ marginTop: "-70px" }}>
                                            {
                                                review.img === 'undefined' ? <img src="https://i.ibb.co/YNvNxpX/149071.png" alt="" className='img-fluid border border-3 shadow-sm' style={{ borderRadius: '50%' }} /> :
                                                    review.img === 'null' ? <img src="https://i.ibb.co/YNvNxpX/149071.png" alt="" className='img-fluid border border-3 shadow-sm' style={{ borderRadius: '50%' }} />
                                                        : <img src={review.img} alt="" className='img-fluid border border-3 shadow-sm' style={{ borderRadius: '50%', width: "120px" }} />
                                            }
                                        </div>
                                        <div className="card-body p-4 pt-0">
                                            <h6 className="card-title fw-bold text-color mt-2">{review.name}</h6>
                                            <small className="card-text">{review.comment}</small>
                                            <div className="mt-2">
                                                <Rating initialRating={review.rating} className="text-warning" emptySymbol="far fa-star" fullSymbol="fas fa-star" readonly />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Reviews;
