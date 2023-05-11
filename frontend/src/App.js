import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import ErrorPage from "./pages/error";
import Contact from "./pages/contact";
import Pet from './pages/pet'
import PetFood from './pages/petFood'
import PetProduct from './pages/petProduct'
import PetService from './pages/petService'
import Discription from "./pages/discription";
import SignIn from "./pages/signIn";
import SignUp from "./pages/signUp";
import ChangePassword from "./pages/changePassword";
import FeedBack from "./pages/feedback";
import Order from "./pages/order";
import Profile from "./pages/profile";
import Search from "./pages/search";
import Cart from "./pages/cart";
import ProtectedRoutes from './pages/protectedRoutes';
import Admin from "./pages/admin";
import AdminPet from "./pages/adminPet";
import AdminFood from "./pages/adminFood";
import AdminService from "./pages/adminService";
import AdminProduct from "./pages/adminProduct";
import AdminAccount from "./pages/adminAccount";
import AdminOrder from "./pages/adminOrder";

export const CartContext = createContext()

function App() {
  const [cart, setcart] = useState([])

  const dltItem = (item) => {
    let mycart = cart.filter((x) => x.name === item.name)
    setcart(mycart)
  }

  const handleAdd = (product, id, type, quantity) => {
    let mycart = cart
    mycart.push({
        ...product,
        id: id,
        type: type,
        quantitySell: quantity
    })
    setcart(mycart)
  }

  return (
    <CartContext.Provider value={{ cart, handleAdd, dltItem }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>

          <Route path="/signIn" element={<SignIn />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/search/:keySearch" element={<Search />}></Route>
          
          <Route path="/pet" element={<Pet />}></Route>
          <Route path="/pet/:id" element={<Discription href='pet'/>}></Route>

          <Route path="/petFood" element={<PetFood />}></Route>
          <Route path="/petFood/:id" element={<Discription href='petFood'/>}></Route>

          <Route path="/petProduct" element={<PetProduct />}></Route>
          <Route path="/petProduct/:id" element={<Discription href='petProduct'/>}></Route>

          <Route path="/petService" element={<PetService />}></Route>
          <Route path="/petService/:id" element={<Discription href='petService'/>}></Route>

          <Route path="/changePassword" element={<ChangePassword />}></Route>
          <Route path="/feedback" element={<FeedBack />}></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/profile" element={<Profile />}></Route>

          <Route element={<ProtectedRoutes/>}>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/admin/pet" element={<AdminPet />}></Route>
            <Route path="/admin/food" element={<AdminFood />}></Route>
            <Route path="/admin/service" element={<AdminService />}></Route>
            <Route path="/admin/product" element={<AdminProduct />}></Route>
            <Route path="/admin/order" element={<AdminOrder />}></Route>
            <Route path="/admin/account" element={<AdminAccount />}></Route>
          </Route>

        </Routes> 
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
