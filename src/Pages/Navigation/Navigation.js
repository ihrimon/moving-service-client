import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignInAlt, faSignOutAlt, faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    const { user, logOut } = useAuth();

    const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />
    const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />

    const activeStyle = {
        fontWeight: "bold",
        color: "#17c6aa"
    };
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container py-3">
                <NavLink to="/">
                    <img src={logo} width="150px" alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeStyle={activeStyle} to="about">About Us</NavLink>
                        </li>
                        {((user.displayName) && (user.photoURL) || (user.email)) &&
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="myOrders">Orders</NavLink>
                            </li>
                        }
                        {
                            ((user.displayName) && (user.photoURL) || (user.email)) &&
                            <li className="nav-item">
                                <NavLink className="nav-link" activeStyle={activeStyle} to="review">Add Review</NavLink>
                            </li>
                        }
                    </ul>

                    <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            {
                                ((user.displayName) && (user.photoURL) || (user?.email)) &&
                                
                                    <NavLink to="myOrders"><h5 className='text-color align-items-center justify-content-center text-center'>{cartIcon}</h5></NavLink>
                                
                            }
                        </li>
                        <li className="nav-item">
                            {
                                ((user.displayName) && (user.photoURL) || (user?.email)) &&
                                <div className="user justify-content-center rounded-pill mx-lg-0  py-1 px-2 mt-1 d-flex align-items-center">
                                    <img src={user.photoURL} style={{ width: '30px' }} className="bg-light rounded-pill user-img" alt="" />
                                    <p className="ms-2 my-2 fw-bold">{user.displayName}</p>
                                </div>
                            }
                        </li>

                        <li className="nav-item">
                            {(user.displayName) && (user.photoURL) || (user?.email) ?
                                <button onClick={logOut} className="nav-link btn badge bg-color px-3 text-light">{logoutIcon}</button> :
                                // <NavLink className="nav-link btn bg-color-sm px-5 fw-bold text-light" to="login">Login</NavLink>
                                <NavLink to="login" className='text-decoration-none'><button className="nav-link btn bg-color-sm px-3 fw-bold text-light" type="submit" >{loginIcon}<span className="ms-2">Login</span></button></NavLink>
                            }
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;


