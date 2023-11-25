// import React from "react";
// import Meta from "../components/Meta";
// import BreadCrumb from "../components/BreadCrumb";
// import { NavLink, Link } from "react-router-dom";
// import { useState } from "react";
// import { BsSearch } from "react-icons/bs";
// import Produit from "../components/Produit";

// export default function Wishlist() {
//   const [grid, setGrid] = useState(3);

//   return (
//     <div>
//       <header className="header-upper-contact py-4">
//         <div className="container-fluid">
//           <div className="row align-items-center justify-content-around">
//             <div className="col-2">
//               <img
//                 width="100%"
//                 src={require("../assets/cosmaLogo-removebg.png")}
//                 alt="logo"
//                 style={{ borderRadius: "10px" }}
//               />{" "}
//             </div>
//             <div className="col-5">
//               <div className="horizontal-bar">
//                 <NavLink to="/">Accueil</NavLink>
//                 <NavLink to="/catalogue">Catalogue</NavLink>
//                 <NavLink to="/promos">Promos</NavLink>
//                 <NavLink to="/contact">Contact</NavLink>
//               </div>
//             </div>
//             <div className="col-3">
//               <div className="header-upper-links d-flex align-items-center justify-content-between">
//                 <div>
//                   <Link
//                     style={{ fontWeight: 600 }}
//                     to="/login"
//                     className="d-flex align-items-center gap-10 text-dark"
//                   >
//                     <img
//                       src={require("../assets/acc.png")}
//                       alt="compare"
//                       style={{ height: "35px", width: "35px" }}
//                     />
//                     <p className="mb-0 side">Account</p>
//                   </Link>
//                 </div>
//                 <div>
//                   <Link
//                     to="/wishlist"
//                     style={{ fontWeight: 600 }}
//                     className="d-flex align-items-center gap-10 text-dark"
//                   >
//                     <img
//                       src={require("../assets/love.png")}
//                       alt="favourite"
//                       style={{ height: "35px", width: "35px" }}
//                     />
//                     <p className="mb-0 side">Favoris</p>
//                   </Link>
//                 </div>

//                 <div>
//                   <Link
//                     style={{ fontWeight: 600 }}
//                     to="/cart"
//                     className="d-flex align-items-center gap-10 text-dark"
//                   >
//                     <img
//                       src={require("../assets/shop.png")}
//                       alt="shop"
//                       style={{ height: "35px", width: "35px" }}
//                     />
//                     <div className="d-flex flex-column gap-10">
//                       <span
//                         className="badge bg-white text-black"
//                         style={{ fontWeight: 600 }}
//                       >
//                         0
//                       </span>
//                       <p className="mb-0 side"> $500</p>
//                     </div>
//                     {/* <p className="mb-0">Panier</p> */}
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </header>
//       <Meta title="Favoris" />
//       <BreadCrumb title="Favoris" />

//       <div className="store-wrapper home-wrapper-2 py-5 mainPart">
//         <div className="container-fluid">
//           <div className="row justify-content-around ">
//             <div className="col-2">
//               <div className="filter-card mb-3">
//                 <h3 className="filter-title">Filter By:</h3>
//                 <div>
//                   <h5 className="sub-title"> Categories</h5>
//                   <div className="frst">
//                     <ul className="ps-0">
//                       <li>All (22)</li>
//                       <li>Watch (5)</li>
//                       <li>Tv (3)</li>
//                       <li>Camera (12)</li>
//                       <li>Laptop(1)</li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div>
//                   <h5 className="sub-title">Availability</h5>
//                   <div>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id=""
//                       />
//                       <label class="form-check-label" htmlFor="">
//                         In Stock
//                       </label>
//                     </div>
//                     <div className="form-check">
//                       <input
//                         className="form-check-input"
//                         type="checkbox"
//                         value=""
//                         id=""
//                       />
//                       <label class="form-check-label" htmlFor="">
//                         Out of stock
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <div>
//                   <h5 className="sub-title">Price</h5>
//                   <div className="d-flex align-items-center gap-10">
//                     <div className="form-floating">
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="floatingInput"
//                         placeholder="From"
//                         style={{ height: "35px" }}
//                       />
//                       <label htmlFor="floatingInput">From </label>
//                     </div>
//                     <div className="form-floating">
//                       <input
//                         type="email"
//                         className="form-control"
//                         id="floatingInput1"
//                         placeholder="To"
//                         style={{ height: "35px" }}
//                       />
//                       <label htmlFor="floatingInput1">To </label>
//                     </div>
//                   </div>
//                   <div>
//                     <h5 className="sub-title mt-4"> Marques</h5>
//                     <div className="product-tags d-flex flex-wrap align-items-center gap-10">
//                       <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
//                         Headphone
//                       </span>
//                       <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
//                         Laptp{" "}
//                       </span>{" "}
//                       <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
//                         Mobile
//                       </span>{" "}
//                       <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
//                         Wire{" "}
//                       </span>
//                       <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
//                         Casque{" "}
//                       </span>
//                       <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
//                         Tv{" "}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-9">
//               <div className="filter-sort-grid mb-4">
//                 <div className="d-flex justify-content-between align-items-center">
//                   <div className="input-group bar">
//                     <input
//                       type="text"
//                       className="form-control py-2"
//                       placeholder="Search product here..."
//                       aria-label="Search product here..."
//                       aria-describedby="basic-addon2"
//                     />
//                     <span className="input-group-text p-3" id="basic-addon2">
//                       <BsSearch className="fs-6" />
//                     </span>
//                   </div>

//                   <div className="d-flex align-items-center gap-20 tri">
//                     <p className="totalproducts">21 Products</p>
//                     <div className="d-flex gap-10 align-items-center grid">
//                       <img
//                         onClick={() => setGrid(3)}
//                         src="https://i.ibb.co/nzYfk26/gr4.jpg"
//                         className="d-block img-fluid"
//                         alt="grid"
//                       />

//                       <img
//                         onClick={() => setGrid(12)}
//                         src="https://i.ibb.co/fS2zQD9/gr.jpg"
//                         className="d-block img-fluid"
//                         alt="grid"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="pb-5 ">
//                 <div className="d-flex justify-content-between flex-wrap">
//                   <Produit grid={grid} />
//                   <Produit grid={grid} />
//                   <Produit grid={grid} />
//                   <Produit grid={grid} />
//                   <Produit grid={grid} />
//                   <Produit grid={grid} />
//                   <Produit grid={grid} />
//                   <Produit grid={grid} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
