import React, { useState, useEffect } from "react";
import "./Terms.css";
import { TopNav } from "../../Components/TopNav/TopNav";
import TopnavWeb from "../../Components/TopNav/TopnavWeb";

export const Terms = () => {
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
      {isMobile ? <TopNav title="Terms and Conditions" /> : <TopnavWeb />}
      <div className="conditions">
        <div className="head">
          <h6>Terms and Coditions</h6>
        </div>
        <p>
          This website and mobile app is developed, managed and operated by the
          Vanitha League. These Site Terms apply solely to your access to, and
          use of, the Web site (the "Site") operated by the Vanitha League which
          link to these Site Terms. However, Site Terms in no manner shall alter
          any of the express terms agreed between you and Vanitha League
          (including its affiliates, agents and permitted assignees) for any
          products or services as the case may be. Reserve the right to change,
          modify, alter, expand any of the terms and conditions contained in the
          Site Terms or any policy, guideline, specifications of the Site, at
          any time and in its sole discretion without any prior notice. Any such
          changes, modification, alteration, addition or expansion so made to
          the Site Terms shall be effective immediately upon posting of the
          revisions on the Sites, and by accessing the Site you waive any right
          you may have to receive specific notice of such changes or
          modifications. Your continued use of the Site following the posting of
          changes, alterations, modifications, addition and expansion will
          confirm This website and mobile app is developed, managed and operated
          by the Vanitha League. These Site Terms apply solely to your access
          to, and use of, the Web site (the "Site") operated by the Vanitha
          League which link to these Site Terms. However, Site Terms in no
          manner shall alter any of the express terms agreed between you and
          Vanitha League (including its affiliates, agents and permitted
          assignees) for any products or services as the case may be. Reserve
          the right to change, modify, alter, expand any of the terms and
          conditions contained in the Site Terms or any policy, guideline,
          specifications of the Site, at any time and in its sole discretion
          without any prior notice. Any such changes, modification, alteration,
          addition or expansion so made to the Site Terms shall be effective
          immediately upon posting of the revisions on the Sites, and by
          accessing the Site you waive any right you may have to receive
          specific notice of such changes or modifications. Your continued use
          of the Site following the posting of changes, alterations,
          modifications, addition and expansion will confirm.
        </p>
        <button>Ok</button>
      </div>
    </div>
  );
};
