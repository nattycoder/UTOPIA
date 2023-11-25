import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";


export default function ProductDetail() {
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
                    <p className="mb-0 side">Log in</p>
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
      <Meta title="Catalogue" />
      <BreadCrumb title="Available Course  / Course detail" />

      <div className="store-wrapper home-wrapper-2 py-5 mainPart">
        <div className="container-fluid">
          <div className="row justify-content-around ">
            <div className="col-11 prod-card d-flex align-items-center">
              <img
                src={require("../assets/Virtual_Chemistry_Lab_vr_3d_render.jpg")}
                alt="parfum"
                width="380px"
                height="380px"
                style={{
                  display: "block",
                  marginLeft: "5%",
                  marginTop: "2%",
                  borderRadius: "10px",
                }}
              />
              <div
                style={{
                  marginLeft: "5%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <h2
                  style={{
                    color: "#c56e95",
                    fontWeight: "600",
                    margin: "0",
                    marginBottom: "15px",
                    textAlign: "center",
                  }}
                >
                  Virtual Chemistry Lab{" "}
                </h2>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h4 className="firstIn">Catégorie:</h4>
                  <h4 className="secondIn"> Science</h4>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h4 className="firstIn">Type:</h4>
                  <h4 className="secondIn"> Fundamental Course</h4>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h4 className="firstIn">Skill level:</h4>
                  <h4 className="secondIn"> Intermediate</h4>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h4 className="firstIn">Price:</h4>
                  <h4 className="secondIn"> 15 DT</h4>
                </div>
                <div>
                  <h4 className="firstIn">Description:</h4>
                  <p style={{ fontSize: "16px", textAlign: "justify" }}>
                    {" "}
                    Conduct chemistry experiments in a risk-free virtual
                    environment. This lab simulation course provides students
                    with hands-on experience in conducting various chemical
                    experiments, understanding reactions, and practicing lab
                    techniques using VR technology.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h4 className="firstIn">Enrolled:</h4>
                  <h4 className="secondIn"> Yes</h4>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <h4 className="firstIn">Progress:</h4>
                  <div id="progress-container">
                    <div id="progress-bar"></div>
                    <div id="progress-text">100%</div>
                  </div>{" "}
                  <div>
                    <button disabled className="buttonEnr border-0">
                      Enroll
                    </button>
                    <button className="buttonCer border-0">
                      Get certificate
                    </button>
                    <img
                      style={{
                        position: "absolute",
                        top: "300px",
                        right: "200px",
                      }}
                      alt="qr"
                      width="200px"
                      height="200px"
                      src={require("../assets/scan-me-qr-code-design-qr-code-payment-text-transfer-with-scan-me-button-vector-illustration_499431-1152.avif")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
