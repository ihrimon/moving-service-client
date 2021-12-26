import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Blog from '../../fakeData/blogs.json'
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { addToReadingList} from "../../redux/action/blogAction";

const Blogs = (props) => {
    // const [services, setServices] = useState([]);
    const { img, name, description } = props.blog;
    const dispatch = useDispatch();

    const addIcon = <FontAwesomeIcon icon={faPlus} />

    // useEffect(() => {
    //     fetch('./fakeData/blogs.json')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, []);

    return (
        <div>
            <div className="container p-5 my-5">
                <h2 className="mb-4 text-center theme-color fw-bold">OUR LATEST BLOG AND NEWS</h2>

                <div className="row row-cols-1 row-cols-md-3 g-5 mx-lg-5">
                    
                        <div className="col-lg-4 col-12">
                                <div className="card border-0 px-2 mb-3 custom-shadow hover border-radius">
                                    <div className="row align-items-center justify-content-center g-0 py-4">

                                        <div className="card-body px-4">
                                            <img src={img} className="img-fluid w-25" alt="..." />
                                            <h5 className="card-title mt-3">{name}</h5>

                                            <p>{description}</p>
                                            <Link to="home">
                                                <button className="btn bg-color-sm rounded-pill text-light" > <span className="ms-2">View Details</span></button>
                                            </Link>
                                            <p onClick={()=> dispatch(addToReadingList(props.blog))} title="Add to Reading" >{addIcon}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Blogs;

