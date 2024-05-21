import React, { useState, useEffect } from "react";
import "./Home.css";
import { Header } from "../../Components/Header/Header";
import { Spotlight } from "../../Components/Spotlight/Spotlight";
import { Count } from "../../Components/Count/Count";
import { Social } from "../../Components/Social/Social";
import { Button } from "../../Components/Button/Button";
import { BottomNav } from "../../Components/BottomNav/BottomNav";
import { useLocation, useNavigate } from "react-router-dom";
import { useProduct } from "../../Context/ProductContext";
import HeaderWeb from "../../Components/Header/HeaderWeb";

export const Home = () => {
  const location = useLocation();
  const { productImages, productPrice } = location.state || {};
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 870);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 870);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const loginUserId = localStorage.getItem("loginUserId");
  console.log(loginUserId, "loggggggggggggs");

  return (
    <>
      {isMobile ? <Header /> : <HeaderWeb />}
      <Spotlight />
      <Count productImages={productImages} productPrice={productPrice} />
      <Social />
      {isMobile && (
        <Button
          title="Buy Now"
          page={
            loginUserId === "" || loginUserId === null ? "/login" : "/address"
          }
        />
      )}
    </>
  );
};
