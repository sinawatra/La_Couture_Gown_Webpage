import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../components/Slideshow.css";

const Slideshow = () => {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src="/images/cover1.jpg" className="d-block w-100  " alt="Slide 1" />
          <div className="carousel-caption">
            <button className="btn">Book a Consultation</button>
            <button className="btn">View Gallery</button>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="carousel-item">
          <img src="/images/cover2.png" className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption">
            <button className="btn">Book a Consultation</button>
            <button className="btn">View Gallery</button>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="carousel-item">
          <img src="/images/cover3.png" className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption">
            <button className="btn">Book a Consultation</button>
            <button className="btn">View Gallery</button>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slideshow;
