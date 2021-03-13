import React from 'react'
import '../style/Payment.css'
import { useStateValue } from '../provider/StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className="payment">
            <div className="payment__container">
                <h1 className=""> Checkout (<Link to="/checkout">{basket?.length} items</Link> ) </h1>
                {/* Delivery Address */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Js</p>
                        <p>Lost Angeles, CA</p>
                    </div>
                </div>

                {/* Review Items */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment Method */}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__detail">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
