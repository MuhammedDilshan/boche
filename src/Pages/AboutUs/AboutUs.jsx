import React from "react";
import "./AboutUs.css";
import { TopNav } from "../../Components/TopNav/TopNav";

const AboutUs = () => {
  return (
    <div>
      <TopNav title="About Us" />
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
