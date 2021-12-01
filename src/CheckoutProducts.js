import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProducts({id, image, title, price, rating}) {
   const [{ basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })

   }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image}/>
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkout__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_,i) => (
                      <img className="staricon" src="https://icon-library.com/images/yellow-star-icon/yellow-star-icon-16.jpg"/>
                    ))}
                   
                    
                </div>
                <button onClick={removeFromBasket}>Remove</button>
        </div>
        </div>
    )
}

export default CheckoutProducts
