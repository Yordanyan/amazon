import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProducts from './CheckoutProducts';

function Orders() {
    const [{basket , user}, dispatch] = useStateValue();
    return (
        <div className="orders">
             <h2 className="checkout__title">Your Orders</h2>
                 
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
        
    )
}

export default Orders;
