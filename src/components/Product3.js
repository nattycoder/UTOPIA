import { MarginTwoTone } from "@mui/icons-material";
import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

export default function Product3(props) {
  const { grid } = props;
  let location = useLocation();
  return (
    <>
      <div
        style={{ marginBottom: "2%" }}
        className={`${
          location.pathname == "/catalogue" ||
          location.pathname == "/promos" ||
          location.pathname == "/wishlist"
            ? `gr-${grid}`
            : "col-3"
        }`}
      >
        <div className="product-card position-relative ">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="https://i.ibb.co/L1rNDP0/wish.jpg" alt="wishlist" />
            </Link>
          </div>
          <div
            className="product-image"
            style={{ height: "70%", width: "82%", marginLeft: "7%" }}
          >
            <img
              src={require("../assets/Mechanical_Engineering_lab_3d_render.jpg")}
              alt="product"
              className="img-fluid prodimg"
              style={{ marginBottom: "20px" }}
            />
            {/* <img
            width="255px"
            height="269px"
            src="https://i.ibb.co/Rjgprkv/gsmarena-006.jpg"
            alt="product"
          /> */}
          </div>
          <div
            className={`description ${
              grid === 3 ? "product-details" : "product-details12"
            }`}
          >
            <h5 className="product-title">Mechanical Engineering</h5>
            {/* <ReactStars
              count={5}
              value="3"
              // onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            /> */}
            <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
              Très jeune mammifère (ex. un bébé lapin.) · Petit de l'homme ou
              des animaux supérieurs. · Carte du jeu de tarot correspondant au
              plus faible
            </p>
            <p className="price">700.00 DT</p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15">
              {/* <Link>
                <img
                  src="https://i.ibb.co/djC3QSX/prodcompare.jpg"
                  alt="compare"
                />
              </Link> */}
              <Link to="/product-detail">
                <img src="https://i.ibb.co/KGqXTz5/view.jpg" alt="view" />
              </Link>
              <Link>
                <img
                  src="https://i.ibb.co/1rPDgjY/add-cart.jpg"
                  alt="addcart"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
