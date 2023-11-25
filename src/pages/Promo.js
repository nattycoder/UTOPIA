import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Promo() {
  const [grid, setGrid] = useState(3);

  return (
    <div>
      <header
        className="header-upper py-4"
        style={{ backgroundColor: "#192033" }}
      >
        <div className="">
          <div className="row align-items-center justify-content-around">
            <div
              className="col-2 d-flex column align-items-center"
              style={{ maxHeight: "60px" }}
            >
              <img
                height="130px"
                width="100%"
                src={require("../assets/aa.png")}
                alt="logo"
                style={{ borderRadius: "10px" }}
              />
              <h2
                style={{
                  color: "white",
                  textAlign: "center",
                  marginTop: "10px",
                  marginLeft: "-30px",
                }}
              >
                Utopia Academy
              </h2>
            </div>
            <div className="col-6">
              <div className="horizontal-bar">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/catalogue">Available courses</NavLink>
                <NavLink to="/promos">Create course</NavLink>
                <NavLink to="/contact">Contact us</NavLink>
              </div>
            </div>
            <div className="col-2">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    style={{ fontWeight: 600 }}
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img
                      src={require("../assets/whiteAcc.png")}
                      alt="compare"
                    />
                    <p className="mb-0 side">Ayoub</p>
                  </Link>
                </div>
                <div>
                  <Link
                    style={{ fontWeight: 600 }}
                    to="/login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img
                      src={require("../assets/icons8-favourite-48.png")}
                      alt="compare"
                    />
                  </Link>
                </div>
                <div>
                  <Link
                    style={{ fontWeight: 600 }}
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-dark"
                  >
                    <img src={require("../assets/whiteCart.png")} alt="shop" />
                    <div className="d-flex flex-column gap-10">
                      <span
                        className="badge bg-white text-black"
                        style={{ fontWeight: 600 }}
                      >
                        0
                      </span>
                      <p className="mb-0 side text-white"> 0 DT</p>
                    </div>
                    {/* <p className="mb-0">Panier</p> */}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Meta title="Promos" />
      <BreadCrumb title="Create Course" />

      <div className="store-wrapper home-wrapper-2 py-5 mainPart">
        <div className="container-fluid">
          <div className="row justify-content-around ">
            <div className="col-12">
              <div className="form-container">
                <h2 style={{ textAlign: "center" }}>
                  Welcome to Our Academy's VR Course Creation Service!
                </h2>
                <p>
                  At Our Academy, we believe in empowering individuals and
                  enterprises to create their own VR courses. Fill out the form
                  below to submit a request for creating your VR course on our
                  platform.
                </p>

                <form>
                  <label htmlFor="entrepriseName">
                    Name of the Enterprise:
                  </label>
                  <input
                    type="text"
                    id="entrepriseName"
                    name="entrepriseName"
                    required
                  />

                  <label htmlFor="courseCategory">
                    Category of the Course:
                  </label>
                  <input
                    type="text"
                    id="courseCategory"
                    name="courseCategory"
                    required
                  />

                  <label htmlFor="courseType">Type of Course:</label>
                  <input
                    type="text"
                    id="courseType"
                    name="courseType"
                    required
                  />

                  <label htmlFor="siteDescription">
                    Description of the Course:
                  </label>
                  <textarea
                    id="siteDescription"
                    name="siteDescription"
                    rows="4"
                    required
                  ></textarea>

                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />

                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" required />

                  <button type="submit">Submit Request</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
