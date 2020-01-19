import React, { Component } from "react";
import "../components/styles/landing-page.css";
import kbbqImage from "../components/images/kbbq.jpg";
import Footer from "../components/footer";
import Header from '../components/header'
class LandingPage extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="landing-page-container">
          <img
            src={kbbqImage}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="korean-bbq-pic"
          />
          <div className="restaurant-title-container">
            <h1 className="restaurant-title">Generic Korean BBQ</h1>
            <h1 className="restaurant-description">
              Delicious meat grilled on the finest coals. Lorem ipsum nomen a
              cla
            </h1>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default LandingPage;
