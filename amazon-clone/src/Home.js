import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />



                <div className="home__row">
                    <Product
                        id='123213341'
                        title='The Lean Startup: How Constant Innovation Creates Radically Successful Buisnesses Paperback'
                        price={11.86}
                        image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                        rating={3}


                    />
                    <Product
                        id='49538094'
                        title='Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl'
                        price={239.00}
                        image='https://i.ebayimg.com/images/g/ZXAAAOSw-19fB~El/s-l400.jpg'
                        rating={4}
                    />

                </div>

                <div className="home__row">
                    <Product
                        id='4903850'
                        title='Apple Watch Silver Aluminum Case with White Sport Band'
                        price={199.00}
                        image='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/38-alu-silver-sport-white-nc-s3-1up?wid=1673&hei=1353&fmt=jpeg&qlt=95&.v=1594318675000'
                        rating={3}
                    />
                    <Product
                        id='23445930'
                        title='Amazon Echo (3rd Generation | Smart Speaker with Alexa, Charcoal Fabric'
                        price={89.99}
                        image='https://mobileimages.lowes.com/productimages/1bd5e292-b68d-4877-8400-b983034381ec/12025270.jpg?size=pdhi'
                        rating={5}

                    />
                    <Product
                        id='3254354345'
                        title='New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)'
                        price={598.99}
                        image='https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SL1500_.jpg'
                        rating={5}
                    />
                </div>

                <div className="home__row">
                    <Product
                        id='90829332'
                        title='Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor- Super Ultra Wide Dual WQHD 5120 X 1440'
                        price={1084.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'
                        rating={5}

                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
