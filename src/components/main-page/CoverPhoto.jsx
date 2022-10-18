import React from "react";
import { Link } from "react-router-dom";

function CoverPhoto() {
  return (
    <div className="cover_photo_main">
      <div>
        <h2>Mid-Seasons Sale</h2>
        <h4>Up to 50% Discount</h4>
      </div>
      <div className="cover_photo_button">
        <Link to="/Product">
          <button type="button" className="btn btn-outline-light">
            Buy now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CoverPhoto;
