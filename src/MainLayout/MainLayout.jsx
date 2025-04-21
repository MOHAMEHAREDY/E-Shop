import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthCheck from "../AuthCheck/AuthCheck";
import Register from "../Pages/Auth/Register/Register";
//import Auth from "../Pages/Auth/Auth";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Reviews from "../Pages/Reviews/Reviews";
import Shop from "../Pages/Shop/Shop";
import Footer from "../Componants/HomePage/Footer/Footer";
import Contact from "../Pages/Contact/Contact";
import Navbar from "../Pages/Navbar/Navbar";

// MainLayout component for application layout
const MainLayout = () => {
  return (
    <BrowserRouter>
      {/* Navbar component */}
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <AuthCheck>
              <Home />
            </AuthCheck>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Not found route */}
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Footer component */}
      <Footer />
    </BrowserRouter>
  );
};

export default MainLayout;
