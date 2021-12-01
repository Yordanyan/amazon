import React from 'react';
import './Home.css';
import Product from './Product';
import { Helmet } from "react-helmet";


function Home() {
    
    return (
        
        <div className="home">
            <div className="home__containter">
                <img className="home__image" src="https://www.czechcrunch.cz/wp-content/uploads/2019/09/amazon-alexa-products.jpg"/>
            <div className="home__row">
                <Product 
                id="179779"
                title="Lenovo Chromebook S330 Laptop"
                price={200}
                image="https://m.media-amazon.com/images/I/61ViOMIUhmL._AC_UY218_.jpg"
                rating={5}
                />
                  <Product 
                id="179779"
                title="IMAC for sale"
                price={229}
                image="https://items.s1.citilink.ru/1436302_v01_b.jpg"
                rating={3}
                />
                  <Product 
                id="4684652"
                title="JBL "
                price={128}
                image="https://tehnoteca.ru/img/1199/1198445/jbl_boombox_1.jpg"
                rating={2}
                />
                <Product 
                id="129779"
                title="Book Harry Potter"
                price={159}
                image="https://www.infpol.ru/upload/iblock/bf6/bf6f93e519d1749d8972a01bfb4a58f0.jpeg"
                rating={5}
                />
               
                           
            </div>
            <div className="home__row">
            <Product 
                id="179779"
                title="IMAC for sale"
                price={229}
                image="https://items.s1.citilink.ru/1436302_v01_b.jpg"
                rating={3}
                />
            <Product 
                id="179779"
                title="AAA"
                price={29}
                image="https://images.ru.prom.st/629076392_w640_h640_chehol-dlya-airpods.jpg"
                rating={5}
                />
                  <Product 
                id="4684652"
                title="asdasdasd"
                price={28}
                image="https://iphone24.ru/dbpics/17896.JPG"
                rating={2}
                />
            </div>
            <div className="home__row">
            <Product 
                id="4684652"
                title="asdasdasd"
                price={282}
                image="https://a.allegroimg.com/original/1150af/6bf3ca9348e1bdd7acb13bf8f73c/Novation-Launchkey-49-MK3-KONTROLER-MIDI-i-USB"
                rating={2}
                />
                  <Product 
                id="179779"
                title="IMAC for sale"
                price={229}
                image="https://items.s1.citilink.ru/1436302_v01_b.jpg"
                rating={3}
                />
                  <Product 
                id="179779"
                title="IMAC for sale"
                price={229}
                image="https://items.s1.citilink.ru/1436302_v01_b.jpg"
                rating={3}
                />
                  <Product 
                id="179779"
                title="IMAC for sale"
                price={229}
                image="https://items.s1.citilink.ru/1436302_v01_b.jpg"
                rating={3}
                />
              
                
            </div>
            <div className="home__row">
            <Product 
                id="179779"
                title="IMAC for sale"
                price={229}
                image="https://items.s1.citilink.ru/1436302_v01_b.jpg"
                rating={3}
                />
                  <Product 
                id="179779"
                title="IMAC for sale"
                price={229}
                image="https://items.s1.citilink.ru/1436302_v01_b.jpg"
                rating={3}
                />
                  <Product 
                id="179779"
                title="IMAC for sale"
                price={229}
                image="https://items.s1.citilink.ru/1436302_v01_b.jpg"
                rating={3}
                />
                </div>
                <div className="home__row">
                <Product 
                id="179779"
                title="IMAC for sale"
                price={229}
                image="https://items.s1.citilink.ru/1436302_v01_b.jpg"
                rating={3}
                />
                </div>
            </div>
        </div>
    )
}

export default Home
