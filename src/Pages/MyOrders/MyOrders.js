// import axios from 'axios';
import React from 'react';
// import useAuth from '../../../../hooks/useAuth';


const MyOrders = () => {
    // const [myOrders, setMyOrders] = useState([]);
    // const { user } = useAuth();

    // const email = user.email

    // useEffect(() => {
    //     axios.post("https://pure-wildwood-79743.herokuapp.com/orders/email", { email: `${email}` })
    //         .then(res => setMyOrders(res.data));
    // }, [])

    // // CANCEL ORDER
    // const handleCancelOrder = id => {
    //     const confirmation = window.confirm("Are you sure you want to cancel this item.")
    //     if (confirmation) {
    //         axios.delete(`https://pure-wildwood-79743.herokuapp.com/orders/${id}`)
    //             .then(res => {
    //                 if (res.data.deletedCount > 0) {
    //                     const restData = myOrders.filter(order => order._id !== id)
    //                     setMyOrders(restData);

    //                 }
    //                 else {
    //                     alert("Order Cancel Successfully!!")
    //                 }
    //             });
    //     }
    // }

    return (
        <div className="container">
            <h2 className="mt-5 mb-3 text-center">My Orders</h2>
            <div className="table-responsive">
                <table className="table border table-hover">
                    <thead className="bg-color text-light">
                        <tr>
                            <th className="text-start ">SL.</th>
                            <th className="text-start">Name</th>
                            <th className="text-start">Email</th>
                            <th className="text-start">Address</th>
                            <th className="text-start">Product Name</th>
                            <th className="text-start">Amount</th>
                            <th className="text-start">Status</th>
                            <th className="text-start">Manage</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;