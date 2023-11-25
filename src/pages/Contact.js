import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import { NavLink, Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
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
      <Meta title="Contact Us" />
      <BreadCrumb title="Contact Us" />
      <div className="contact-wrapper py-5 home-wrapper-2 mainPart">
        <div className="container-xxl">
          <div className="row">
            <div className="col-8 map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3274.717521190115!2d10.752881576230433!3d34.83819417582226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d19d7d347b8b%3A0xca1fc87ce9d5f37b!2sEcole%20Nationale%20d&#39;Electronique%20et%20des%20T%C3%A9l%C3%A9communications%20de%20Sfax%20(ENET&#39;Com)!5e0!3m2!1sfr!2stn!4v1700772511429!5m2!1sfr!2stn"
                width="100%"
                height="450"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-4">
              <img
                src={require("../assets/vr1.jpg")}
                height="200px"
                width="400px"
                alt="local"
              />
              <img
                style={{ marginTop: "11%" }}
                src={require("../assets/vr2.jpg")}
                height="200px"
                width="400px"
                alt="local"
              />
            </div>
            <div className="col-12 mt-5 formContact px-0">
              <div className="contact-inner-wrapper d-flex justify-content-between ">
                <div>
                  <h3 className="contact-title mb-4">Contact</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Name"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        className="form-control custom-input"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        className="form-control custom-input"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div>
                      <textarea
                        className="w-100 form-control custom-input"
                        name=""
                        id=""
                        cols="30"
                        rows="4"
                        placeholder="Comments"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul className="ps-0">
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineHome className="fs-5" />
                        <address className="mb-0">
                          Route teniour Km 1.5 rue 115 numéro 1 Sfax
                        </address>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiPhoneCall className="fs-5" />
                        <a href="www"> 21241414</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <AiOutlineMail className="fs-5" />
                        <a href="www"> chaari.ayoub7@gmail.com</a>
                      </li>
                      <li className="mb-3 d-flex gap-15 align-items-center">
                        <BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday -Friday 10AM - 8PM</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
