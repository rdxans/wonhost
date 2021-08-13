import React from "react";

import {NavLink} from "react-router-dom";
import img from "../src/Images/bg1-1.png"
const Coman = (props) =>  {
    return (
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid ">
                 <div className="row">
                  <div className="col-10 mx-auto">
                  <div className="row">
                   <div className="col-md-6 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                        {props.header} <strong className="brand-name">Wonhost</strong>
                    </h1>
                    <h2 className="">
                        Make your Dreem Domain
                    </h2>
                    <div className="">
                    <NavLink to={props.visit} className="btn btn-get-srart">{props.btnname}</NavLink>
                    </div>
                   </div>
                   <div className="col-lg-6 order-1 order-lg-2 card-header-pills">
                        <img src= {props.img} className="img-fluid animated" alt="home img"></img>
                   </div>
                   </div>
                  </div>
                 </div>
                </div>
             </section>
        </>
    );
};
export default Coman;
