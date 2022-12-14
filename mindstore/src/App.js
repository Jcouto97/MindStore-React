import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import Login from "./pages/Credentials/Login"
import Register from "./pages/Credentials/Register"
import Contacts from "./pages/Contacts/Contacts"
import ProductDetails from "./pages/ProductDetails/ProductDetails"
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart"
import Profile from "./pages/Profile/Profile"
import Checkout from './pages/Checkout/Checkout';
import PageNotFound from "./pages/404/PageNotFound";
import { CartContext } from "./Contexts/CartContext"
import { useState } from 'react';

function App() {
  //fazemos aqui o state para poder enviar no context pelo value só para as componentes que queremos!
  const [cartProducts, setCartProducts] = useState([])

  return (
    <div>
      <BrowserRouter>
        <CartContext.Provider value={{ cartProducts, setCartProducts }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="productspage" element={<ProductsPage />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="shoppingcart" element={<ShoppingCart />} />
            <Route path="profile" element={<Profile />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
