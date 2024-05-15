import React from "react";
import "./Home.css";
import { Header } from "../../Components/Header/Header";
import { Spotlight } from "../../Components/Spotlight/Spotlight";
import { Count } from "../../Components/Count/Count";
import { Social } from "../../Components/Social/Social";
import { Button } from "../../Components/Button/Button";
import { BottomNav } from "../../Components/BottomNav/BottomNav";

export const Home = () => {
  return (
    <>
      <Header />
      <Spotlight />
      <Count />
      <Social />
      <Button title="Buy Now" page="/address" />
      <BottomNav />
    </>
  );
};
