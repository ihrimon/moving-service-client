import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.photoUrl = `${user.photoURL}`
        axios.post('https://peaceful-bastion-73157.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Review Successfully Added')
                    reset();
                }
            })
    };

    return (
        <div className="container w-75 custom-shadow  my-5">
            <h4 className="text-center py-4">Add Review</h4>
            <div className="text-start">
                <form onSubmit={handleSubmit(onSubmit)} className="px-4 pb-5">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" {...register("name")} defaultValue={user.displayName} placeholder="reviewer name" required readOnly />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Comments</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" {...register("comment")} placeholder="Share your moment" rows="3" required></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Rating</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" {...register("rating")} placeholder="Out of 5" required />
                    </div>
                    
                    <span className='w-50 mx-auto' style={{ display: "block" }}>
                        <input type="submit" className="btn bg-color-sm w-100 text-center text-light " />
                    </span>
                </form>
            </div>
        </div>
    );
};

export default AddReview;