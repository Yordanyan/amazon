import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from './StateProvider';
import CheckoutProducts from './CheckoutProducts';


function Checkout() {
    const [{basket , user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://m.oaktorquetool.com/Content/uploads/2020615388/20200507142638d68f74e8e8c34b4caa3dad3445c9eec7.jpg"/>
             <div>
             <h3>
                    Hello, {user.email}
                 </h3>
                 <h2 className="checkout__title">Your Shopping Basket</h2>
                 
                 {basket.map(item =>(
                     <CheckoutProducts
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                     />
                 ))}
             </div>

            </div>
            <div className="checkout__right">
                <Subtotal/>
                <h2 >Subtotal Will go here</h2>
            </div>
        </div>
    )
}

export default Checkout
