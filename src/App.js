import "./App.css";
import { Earnings } from "./Pages/Earnings/Earnings";
import { Home } from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PickUp from "./Pages/PickUp/PickUp";
import { Address } from "./Pages/Address/Address";
import DeliveryAddress from "./Pages/DeliveryAddress/DeliveryAddress";
import { Payment } from "./Pages/Payment/Payment";
import PaymentOption from "./Pages/Payment/PaymentOption";
import { Login } from "./Pages/Login/Login";
import Otp from "./Pages/Otp/Otp";
import { Registration } from "./Pages/Registration/Registration";
import Orders from "./Pages/Orders/Orders";
import Summery from "./Pages/Summery/Summery";
import Coupons from "./Pages/Coupons/Coupons";
import Store from "./Pages/Store/Store";
import Deposit from "./Pages/Deposit/Deposit";
import Withdraw from "./Pages/Withdraw/Withdraw";
import Wallet from "./Pages/Wallet/Wallet";
import Success from "./Components/Success/Success";
import { useState, useEffect } from "react";
// bootstrap min css file
import "bootstrap/dist/css/bootstrap.min.css";
import Splash from "./Components/Splash/Splash";
import { ProductProvider } from "./Context/ProductContext";
import { useProduct } from "./Context/ProductContext";
import WinningWallet from "./Pages/WinningWallet/WinningWallet";
import AccoutDetails from "./Components/AccoutDetails/AccoutDetails";
import Transactions from "./Pages/Transactions/Transactions";
import BottomNavFixed from "./Pages/BottomNavFixed/BottomNavFixed";
import { Privacy } from "./Pages/Privacy/Privacy";
import { Terms } from "./Pages/Terms/Terms";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ChangeAddress from "./Components/ChangeAddress/ChangeAddress";
import Failed from "./Components/Failed/Failed";
import ProfileEdit from "./Components/ProfileEdit/ProfileEdit";
import Logout from "./Components/Alert/Logout";
import Exit from "./Components/Alert/Exit";
import Support from "./Components/Alert/Support";

function App() {
  return (
    <div className="App">
      <>
        <ProductProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/earning" element={<Earnings />} />
              <Route path="/pickup" element={<PickUp />} />
              <Route path="/address" element={<Address />} />
              <Route path="/delivery" element={<DeliveryAddress />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/option" element={<PaymentOption />} />
              <Route path="/login" element={<Login />} />
              <Route path="/otp" element={<Otp />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/order" element={<Orders />} />
              <Route path="/summery" element={<Summery />} />
              <Route path="/coupen" element={<Coupons />} />
              <Route path="/store" element={<Store />} />
              <Route path="/deposit" element={<Deposit />} />
              <Route path="/withdraw" element={<Withdraw />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/succes" element={<Success />} />
              <Route path="/winning" element={<WinningWallet />} />
              <Route path="/account" element={<AccoutDetails />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/home" element={<BottomNavFixed />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/change" element={<ChangeAddress />} />
              <Route path="/failed" element={<Failed />} />
              <Route path="/edit" element={<ProfileEdit />} />
              <Route path="/logout" element={<Support />} />
            </Routes>
          </Router>
        </ProductProvider>
      </>
    </div>
  );
}

export default App;
