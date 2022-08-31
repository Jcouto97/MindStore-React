import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import Login from "./pages/Credentials/Login"
import Register from "./pages/Credentials/Register"
import Contacts from "./pages/Contacts/Contacts"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart"
import Profile from "./pages/Profile/Profile"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="productspage" element={<ProductsPage />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="shoppingcart" element={<ShoppingCart />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
