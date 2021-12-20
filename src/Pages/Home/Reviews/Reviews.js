import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
// import Rating from 'react-rating';
import './Review.css';
// import Rating from 'react-rating';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://peaceful-bastion-73157.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='review-banner'>
            <div class="container px-5">
                <h2 className="mb-4 text-color fw-bold">Customer Reviews</h2>
                <p className='text-light mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto omnis pariatur sed labore ex magni, excepturi dolorum non minima, voluptatibus magnam, alias totam eius voluptate explicabo qui quas deleniti?</p>
                <div class="row row-cols-2 row-cols-lg-4 g-3 g-lg-5 text-center">
                    {
                        reviews.map(review =>
                            <div className="col-lg-3 col-12" key={review._id}>
                                <div className="card d-flex flex-column align-items-center m-2">
                                    <div style={{marginTop: "-65px"}} className="card h-100 bg-transparent border border-0">
                                        <img src={review.img} className="w-50 border border-light border-5 mx-auto shadow-lg card-img-top my-3 rounded-pill" alt="" />
                                        <div className="card-body p-4 pt-0">
                                            <h6 className="card-title fw-bold text-color mt-2">{review.name}</h6>
                                            <small className="card-text">{review.comment}</small>
                                            <div className="mt-2">
                                                <Rating initialRating={review.rating} className="text-warning" emptySymbol="far fa-star" fullSymbol="fas fa-star fa-2x" readonly></Rating>
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

export default Reviews;
