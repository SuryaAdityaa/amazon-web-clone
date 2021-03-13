import React from 'react'
import { useStateValue } from '../provider/StateProvider';
import '../style/Product.css'

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () => {
        // dispatch action to the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            }
        });
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$ </small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐️</p>
                    ))}
                </div>
            </div>
            <img className="product__image" src={image} alt="Product"/>
            <button className="addToProduct" onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
