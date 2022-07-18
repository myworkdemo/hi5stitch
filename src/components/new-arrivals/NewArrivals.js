import React from 'react';
import './new-arrivals.css';

const NewArrivals = () => {
    return (
      <div className="new-arrivals">

      <div> <img className="new-arrivals-logo" src={process.env.PUBLIC_URL +'/assets/img/new-arrivals-logo.png'}/> </div>

      <div className="new-arrivals-card">
        <div className="card"> 
        <img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-1.jpg'} /> 
        <div className="price">₹ 10,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-2.jpg'} />
        <div className="price">₹ 15,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-3.jpg'} />
        <div className="price">₹ 30,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-4.jpg'} />
        <div className="price">₹ 18,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-5.jpg'} />
        <div className="price">₹ 13,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-6.jpg'} />
        <div className="price">₹ 25,000</div>
        <button className="btn-buy">BUY</button>
        </div>

        <div className="card"> 
        <img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-1.jpg'} /> 
        <div className="price">₹ 10,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-2.jpg'} />
        <div className="price">₹ 15,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-3.jpg'} />
        <div className="price">₹ 30,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-4.jpg'} />
        <div className="price">₹ 18,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-5.jpg'} />
        <div className="price">₹ 13,000</div>
        <button className="btn-buy">BUY</button>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/new-arrivals/col-6.jpg'} />
        <div className="price">₹ 25,000</div>
        <button className="btn-buy">BUY</button>
        </div>

        
      </div>
    </div>
    )
}

export default NewArrivals
