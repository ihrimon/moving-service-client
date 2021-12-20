import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Services from '../Services/Services';


const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    const email = user.email

    useEffect(() => {
        axios.post("https://peaceful-bastion-73157.herokuapp.com/orders/email", { email: `${email}` })
            .then(res => setMyOrders(res.data));
    }, [])

    // CANCEL ORDER
    const handleCancelOrder = id => {
        const confirmation = window.confirm("Are you sure you want to cancel this item.")
        if (confirmation) {
            axios.delete(`https://peaceful-bastion-73157.herokuapp.com/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const restData = myOrders.filter(order => order._id !== id)
                        setMyOrders(restData);

                    }
                    else {
                        alert("Order Cancel Successfully!!")
                    }
                });
        }
    }

    return (
        <div className="container">
            <h2 className="mt-5 mb-3 text-center">My Orders</h2>
            <div className='row justify-content-center '>
                <div className="table-responsive col-lg-8 col-12 me-3">
                    <table className="table border table-hover">
                        <thead className="bg-color text-light py-5">
                            <tr>
                                <th className="text-center w-25">Image</th>
                                <th className="text-start">Service Name</th>
                                <th className="text-start">Address</th>
                                <th className="text-start">Amount</th>
                                <th className="text-start">Manage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrders.map((myOrder, index) =>
                                    <tr className='align-items-center justify-content-center' key={myOrder._id}>
                                        <td className="text-start text-center"><img className='w-50' src={myOrder.img} alt="" /></td>
                                        <td className="text-start py-4">{myOrder.productTitle}</td>
                                        <td className="text-start py-4">{myOrder.address}</td>
                                        <td className="text-start py-4">${myOrder.price}</td>
                                        <td className='py-4'><button onClick={() => handleCancelOrder(myOrder._id)} className="btn btn-sm btn-danger">Cancel</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;