import React from "react";
import "./Home.css";
import { Header } from "../../Components/Header/Header";
import { Spotlight } from "../../Components/Spotlight/Spotlight";
import { Count } from "../../Components/Count/Count";
import { Social } from "../../Components/Social/Social";
import { Button } from "../../Components/Button/Button";
import { BottomNav } from "../../Components/BottomNav/BottomNav";
import { useLocation,useNavigate } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext";
import { useEffect } from "react";

export const Home = () => {
  const location = useLocation();
  const { 
    productImages,
    productPrice,
    } = location.state || {};

    const loginUserId = localStorage.getItem('loginUserId');
  

  // console.log(location.state?.productId)
  // console.log(location.state?.productImages)
  // console.log(location.state?.productPrice)
  // console.log(navigator)
 

  // console.log('Product Images:', productImages);
  // console.log('Home component mounted');
  // console.log();

  return (
    <>
      <Header />
      <Spotlight />
      <Count productImages={productImages} productPrice={productPrice} />
      <Social />
      <Button
        title="Buy Now"
        page={loginUserId === "" ? "/login" : "/address"}
      />
    </>
  );
};
