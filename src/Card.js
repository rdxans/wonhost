import React from "react"
import {NavLink} from "react-router-dom";
import img4 from "./Images/bg2-2.png"
const Card = (props) => {
    return(
        <>
           <div className="col-md-4 col-10 mx-auto">
           <div className="card">
  <img className="card-img-top" src={props.imageSrc} alt="Card image cap" />
  <div className="card-body float-end">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Strong Space {props.space}</p>
    <p className="card-text">Monthly Bandwidth {props.bandwidth}</p>
    <p className="card-text">Addon Domain {props.domain}</p>
    <p className="card-text">Email {props.email}</p>
    <p className="card-text">MySQL DBs {props.sql}</p>
    <p className="card-text">Free Domain {props.freedom}</p>
    <NavLink to="#" className="btn btn-primary">{props.btnname}</NavLink>
  </div>
</div>
</div>
        </>
    );
};
export default Card;