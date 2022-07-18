import React from 'react';
import './featured-products.css';

const FeaturedProducts = () => {
    return (
        <div className="featured-products">

      <div> <img className="featured-products-logo" src={process.env.PUBLIC_URL +'/assets/img/featured-products-logo.png'}/> </div>

      <div className="featured-products-card">
        <div className="card"> 
        <img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-1.jpg'} /> 
        <div className="price">₹ 10,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-2.jpg'} />
        <div className="price">₹ 15,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-3.jpg'} />
        <div className="price">₹ 30,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-4.jpg'} />
        <div className="price">₹ 18,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-5.jpg'} />
        <div className="price">₹ 13,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-6.jpg'} />
        <div className="price">₹ 25,000</div>
        <button className="btn-buy">BUY</button>
        </div>


        <div className="card"> 
        <img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-1.jpg'} /> 
        <div className="price">₹ 10,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-2.jpg'} />
        <div className="price">₹ 15,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-3.jpg'} />
        <div className="price">₹ 30,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-4.jpg'} />
        <div className="price">₹ 18,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-5.jpg'} />
        <div className="price">₹ 13,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/featured-products/col-6.jpg'} />
        <div className="price">₹ 25,000</div>
        <button className="btn-buy">BUY</button>
        </div>

        
      </div>
      
    </div>
    )
}

export default FeaturedProducts
