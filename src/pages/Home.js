import React, { useRef, useState } from "react";


import { NavLink, Link } from "react-router-dom";

export default function Home() {
  const categories = [
    {
      id: 1,
      name: "Maquillage",
      imageUrl: require("../assets/maquillage.webp"),
    },
    {
      id: 2,
      name: "Parfum",
      imageUrl: require("../assets/parfum.jfif"),
    },
    {
      id: 2,
      name: "Soin visage",
      imageUrl: require("../assets/soin.jfif"),
    },
    {
      id: 2,
      name: "Cheveux",
      imageUrl: require("../assets/cheveux.png"),
    },
    {
      id: 2,
      name: "Catégorie 5",
      imageUrl: require("../assets/cosmaLogo-removebg.png"),
    },
    {
      id: 2,
      name: "Catégorie 6",
      imageUrl: require("../assets/cosmaLogo-removebg.png"),
    },
    {
      id: 2,
      name: "Catégorie 7",
      imageUrl: require("../assets/cosmaLogo-removebg.png"),
    },
    {
      id: 2,
      name: "Catégorie 8",
      imageUrl: require("../assets/cosmaLogo-removebg.png"),
    },
    {
      id: 2,
      name: "Catégorie 9",
      imageUrl: require("../assets/cosmaLogo-removebg.png"),
    },

    // Ajoutez plus de catégories ici
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const carouselRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToPrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  const goToNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <>
      <div className="homeBack">
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
                      <img
                        src={require("../assets/whiteCart.png")}
                        alt="shop"
                      />
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
      </div>

      <section id="apropos" className="home-wrapper-2 pb-5  pt-5">
        <div className="container-xxl">
          <div className="row">
            <h1 className="titre">About Us</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={require("../assets/aa.png")}
                alt="logo"
                height="150px"
                style={{
                  display: "block",
                  margin: "0px auto",
                  marginTop: "-30px",
                }}
              />
              <p className="propos">
                Welcome to{" "}
                <b>
                  <i>Utopia Academy</i>
                </b>{" "}
                , where we redefine education by merging the power of virtual
                reality with hands-on learning experiences. We believe in
                unlocking the full potential of individuals by providing
                immersive, practical training for real-world skills. <br />
                <br />
                Our mission is to democratize access to high-quality vocational
                education. We strive to empower individuals, vocational schools,
                and businesses by offering a revolutionary VR learning
                experience that goes beyond traditional methods. <br />
                <br />
                Explorez nos ensembles de parfums, trousses de maquillage ou
                kits de soins pour trouver le cadeau qui fera plaisir à coup sûr
                ! De plus, découvrez une sélection exceptionnelle des marques de
                beauté les plus renommées.
              </p>
            </div>
          </div>
          <br></br>
          <div className="row">
            <h1 className="titre">Why Choose Us</h1>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <p className="propos">
                Innovative Learning: Immerse yourself in a new era of education.
                Our VR learning platform brings subjects like plumbing,
                mechanics, and other hands-on skills to life, allowing you to
                learn by doing in a risk-free virtual environment. <br />
                <br />
                NFT Certification: Stand out with our industry-recognized
                certificates issued as NFTs on the blockchain. Each certificate
                is unique, verifiable, and a testament to your practical skills.
                <br />
                <br />
                Join a community of like-minded learners, educators, and
                industry professionals. Connect, collaborate, and grow together
                as you embark on your journey to mastering hands-on skills.
              </p>
              <button className="buttonRev border-0">Discover</button>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="home-wrapper-1 py-5">
        <div className="container -xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-3">
                <img
                  className="img-fluid rounded-3"
                  src="https://i.ibb.co/tsL7L0T/main-banner-1.jpg"
                  alt="main banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Supercharged for pros</h4>
                  <h5>iPad S13+ Pro</h5>
                  <p>From $999.00 or $41.62/mo </p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center pb-0">
                <div className="small-banner position-relative p-3">
                  <img
                    className="img-fluid rounded-3"
                    src="https://i.ibb.co/XWpNcnY/catbanner-01.jpg"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Best Sale</h4>
                    <h5>Laptops Max</h5>
                    <p>
                      From $1699.00 <br /> or $64.62/mo{" "}
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative p-3">
                  <img
                    className="img-fluid rounded-3"
                    src="https://i.ibb.co/zVbHHjT/catbanner-03.jpg"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>New Arrival</h4>
                    <h5>Buy IPAD Air</h5>
                    <p>
                      From $599 or <br /> $49.62/mo fr 12 mo
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative p-3">
                  <img
                    className="img-fluid rounded-3"
                    src="https://i.ibb.co/jWJsGKF/catbanner-02.jpg"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>15% OFF</h4>
                    <h5>Smartwatch 7</h5>
                    <p style={{ maxWidth: "60%" }}>
                      Shop the latest band styles and colors
                    </p>
                  </div>
                </div>

                <div className="small-banner position-relative p-3">
                  <img
                    className="img-fluid rounded-3"
                    src="https://i.ibb.co/YjPyDhG/catbanner-04.jpg"
                    alt="main banner"
                  />
                  <div className="small-banner-content position-absolute">
                    <h4>Free Engraving</h4>
                    <h5>AirPods Max</h5>
                    <p style={{ maxWidth: "60%" }}>
                      High-fidelity playback& ultra-low distortion
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="servies d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="https://i.ibb.co/yfbnXT0/service.png"
                    alt="services"
                  />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orders over 5$</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="https://i.ibb.co/FhR9Xbm/service-02.png"
                    alt="services"
                  />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="https://i.ibb.co/34SLRv6/service-03.png"
                    alt="services"
                  />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="https://i.ibb.co/hfYBf70/service-04.png"
                    alt="services"
                  />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get factory</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    src="https://i.ibb.co/HKbckhr/service-05.png"
                    alt="services"
                  />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex justify-content-between flex-wrap align-items-center">
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://i.ibb.co/5LDvCD0/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://i.ibb.co/9tkmMFq/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex gap align-items-center">
                  <div>
                    <h6>Speakers </h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="https://i.ibb.co/SR7x1YG/speaker.jpg"
                    alt="speaker"
                  />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="https://i.ibb.co/3kh8Xct/headphone.jpg"
                    alt="headphone"
                  />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://i.ibb.co/5LDvCD0/camera.jpg" alt="camera" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="https://i.ibb.co/9tkmMFq/tv.jpg" alt="tv" />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Speakers</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="https://i.ibb.co/SR7x1YG/speaker.jpg"
                    alt="speaker"
                  />
                </div>
                <div className="d-flex  align-items-center">
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="https://i.ibb.co/3kh8Xct/headphone.jpg"
                    alt="headphone"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured collection</h3>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className="special-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>
            <div className="row">
              <SpecialProduct />
              <SpecialProduct />
              <SpecialProduct />
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products </h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
      <section className="marque-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img
                      src="https://i.ibb.co/19jm0c5/brand-01.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://i.ibb.co/tMBDPLj/brand-02.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://i.ibb.co/j4d5Qy1/brand-03.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://i.ibb.co/6WRkyF9/brand-04.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://i.ibb.co/V2s1F93/brand-05.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://i.ibb.co/qJW9Tkg/brand-06.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://i.ibb.co/Mn6xBh1/brand-07.png"
                      alt="brand"
                    />
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      src="https://i.ibb.co/KK4YbVx/brand-08.png"
                      alt="brand"
                    />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </section>  */}
    </>
  );
}
