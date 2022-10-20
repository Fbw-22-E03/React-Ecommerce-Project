import React from "react";
import { Link } from "react-router-dom";

function ChooseCollection() {
  return (
    <div>
      <h2 className="homes_h2">Our Mid-Seasons Collections:</h2>
      <section className="homes">
        <Link to="/Product" className="homes_link">
          <div className="home home_man">
            <div className="home_womans_cover">
              <div>Man collection</div>
            </div>
            <div className="go_to go_to_red">
              {" "}
              <i className="bi bi-arrow-bar-right"></i>
            </div>
          </div>
        </Link>
        <Link to="/Product" className="homes_link">
          <div className="home home_woman">
            <div className="home_womans_cover">
              <div>Woman collection</div>
            </div>
            <div className="go_to">
              <i className="bi bi-arrow-bar-right"></i>
            </div>
          </div>
        </Link>
        <Link to="/Product" className="homes_link">
          <div className="home home_kid">
            <div className="home_womans_cover">
              <div>Kids collection</div>
            </div>
            <div className="go_to">
              <i className="bi bi-arrow-bar-right"></i>
            </div>
          </div>
        </Link>
      </section>
    </div>
  );
}

export default ChooseCollection;
