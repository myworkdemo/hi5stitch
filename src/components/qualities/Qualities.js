import React from 'react'
import './qualities.css';

const Qualities = () => {
    return (
        <div className="qualities">

        {/* <div className="logo">Hi5<font>Stitch</font></div> */}
        <div> Our Qualities </div>
  
        <div className="qualities-card">
          <div className="card"> <img src={process.env.PUBLIC_URL +'/assets/img/qualities/col-1.jpg'} /> </div>
          <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/qualities/col-2.jpg'} /></div>
          <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/qualities/col-3.jpg'} /></div>
          <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/qualities/col-4.jpg'} /></div>
          <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/qualities/col-5.jpg'} /></div>
          <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/qualities/col-6.jpg'} /></div>
        </div>
      </div>
    )
}

export default Qualities
