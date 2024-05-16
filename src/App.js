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
// bootstrap min css file
import "bootstrap/dist/css/bootstrap.min.css";
import Splash from "./Components/Splash/Splash";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/home" element={<Home />} />
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
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
