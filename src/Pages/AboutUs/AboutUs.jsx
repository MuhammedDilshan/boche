import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import { TopNav } from "../../Components/TopNav/TopNav";
import TopnavWeb from "../../Components/TopNav/TopnavWeb";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {isMobile ? <TopNav title="About Us" /> : <TopnavWeb />}
      <div className="about">
        <div className="about-boc">
          <p>Boche</p>
          <p>R.C, Road, Kozhikkode, Kerala</p>
          <p>Value. ContactUs</p>
        </div>
        <ul>
          <li>
            <h6>Developed by</h6>
            <p className="linkey">https://www.spinecodes.com</p>
          </li>
          <li>
            <h6>Managed by</h6>
            <p className="linkey">https://www.nuerobots.com</p>
          </li>
        </ul>

        <button>Ok</button>
      </div>
    </div>
  );
};

export default AboutUs;
