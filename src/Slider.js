import React from "react"
import img2 from "./Images/bg9-1.png"
import img3 from "./Images/bg2-1.png"
import img4 from "./Images/bg2-2.png"
const Slider = () => {
    return(
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid ">
                 <div className="col-8 mx-auto">

                 <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={img4} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
                 </div>
                </div>
            </section>
        </>
    );
};
export default Slider;