import React from "react";
import "./collections.css";

const Collections = () => {
  return (
    <div className="collections">

      {/* <div className="logo">Hi5<font>Stitch</font></div> */}
      <div> <img className="collections-logo" src={process.env.PUBLIC_URL +'/assets/img/collections-logo.png'}/> </div>

      <div className="collections-card">
        <div className="card"> <img src={process.env.PUBLIC_URL +'/assets/img/collections/col-1.jpg'} /> </div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/collections/col-2.jpg'} /></div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/collections/col-3.jpg'} /></div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/collections/col-4.jpg'} /></div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/collections/col-5.jpg'} /></div>
        <div className="card"><img src={process.env.PUBLIC_URL +'/assets/img/collections/col-6.jpg'} /></div>
      </div>
    </div>
  );
};

export default Collections;
