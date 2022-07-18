import React from 'react'
import './qualities.css';

const Qualities = () => {
    return (
        <div className="qualities">

        {/* <div className="logo">Hi5<font>Stitch</font></div> */}
        <div className="title"> Our Qualities </div>
  
        <div className="qualities-card">
        <div className="card"> <img src={process.env.PUBLIC_URL +'/assets/img/qualities/doller-icon.png'} />
        <label>Value for Money</label>
         </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/qualities/quality-icon.png'} />
        <label>100% Quality</label>
        </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/qualities/delivery-van-icon.png'} />
        <label>We deliver all over india</label>
        </div>
       
        </div>
      </div>
    )
}

export default Qualities
