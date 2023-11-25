// import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Admin from "./pages/Admin";
// import Employe from "./pages/Employe";
// import Dashbord from "./pages/Dashbord";
// import Articles from "./pages/Articles";
// import Detail from "./pages/Detail";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Login />}></Route>
//           <Route path="/admin" element={<Admin />}></Route>
//           <Route path="/employe" element={<Employe />}></Route>
//           <Route path="/dashbord" element={<Dashbord />}></Route>
//           <Route path="/articles" element={<Articles />}></Route>
//           <Route path="/detail" element={<Detail />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Promo from "./pages/Promo";
import ProductDetail from "./pages/ProductDetail";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="promos" element={<Promo />} />
            <Route path="product-detail" element={<ProductDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

