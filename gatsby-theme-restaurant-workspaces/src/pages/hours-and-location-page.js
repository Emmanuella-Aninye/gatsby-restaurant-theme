import React, { Component } from "react";
import "../components/styles/hours-and-location-page.css";
import kbbqImage from "../components/images/kbbq2.jpg";
import Footer from "../components/footer";

class HoursAndLocationPage extends Component {
  render() {
    return (
    <div>
      <div className="hours-and-location-page-container">
        <img
          src={kbbqImage}
          style={{ width: "100%", height: "250px", objectFit: "cover" }}
          alt="korean-bbq-pic"
        />
        <div className="hours-and-location-title-container">
          <h1 className="hours-and-location-title">{"Hours & Location"}</h1>
        </div>
      </div>
      <Footer/>
    </div>
    );
  }
}

export default HoursAndLocationPage;
