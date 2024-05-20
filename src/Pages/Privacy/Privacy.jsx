import React, { useState, useEffect } from "react";
import "./Privacy.css";
import { TopNav } from "../../Components/TopNav/TopNav";
import TopnavWeb from "../../Components/TopNav/TopnavWeb";

export const Privacy = () => {
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
      {isMobile ? <TopNav title="Privacy Policy" /> : <TopnavWeb />}
      <div className="contents">
        <div className="head">
          <h6>Privacy Policy</h6>
        </div>
        <p>
          Thank you for visiting the website/ mobile app of Vanitha League
          (Site) The Privacy Policy is applicable to the websites of anitha
          League. This privacy statement also does not apply to the websites of
          our partners, affiliates, agents or to any other third parties, even
          if their websites are linked to site. We recommend you review the
          privacy statements of the other parties with whom you interact.For the
          purposes of this privacy policy, "affiliates" means any entity or
          project or venture that is wholly or partially owned or controlled by
          Vanitha League."agents" means any subcontractor, vendor or other
          entity with whom we have an ongoing business relationship provide
          products, services, or information. The following terms governs the
          collection, use and protection of your
        </p>
        <p>
          personallnformation by the Site. This Privacy Policy shall be
          applicable to users who visit theSite. By visiting and/ or using the
          Site you have agreed to the following Privacy Policy.{" "}
        </p>
        <div className="intro">
          <h6>Introduction</h6>
        </div>
        <p>
          As a registered member of the Site and/or as a visitor (if applicable
          and as the case may be), you will get an insight on the updates and
        </p>
        <p>
          information of the happenings and developments within and by the
          organisation. In addition, look forward to receiving monthly news
          letters and updates from the Vanitha League.That's why we've provided
          this Privacy Policy, which sets forth our policies regarding the
          collection, use and protection of the Personal Information of those
          using or visiting the Site.
        </p>
        <div className="intro">
          <h6>Introduction</h6>
        </div>
        <p>
          The website may collect and use the following kinds of personal
          information: Information about your use of this website (including
          browsing patterns and behaviour)
        </p>
        <p>
          Information that you provide using for the purpose of registering with
          the website (including contact details) Information about transaction
          carried out over this website Information that you provide for the
          purpose of subscribing to the website services (including SMS and
          email alerts) and any other information that you send to fellow
          users and webmaster.
        </p>
        <button>Ok</button>
      </div>
    </div>
  );
};
