import React, { useState } from "react";
import "./UserDetails.css";
import { firestore } from "../../firebase";
import { setDoc, collection,doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export const UserDetails = ({ frmId, toId  }) => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userMobile, setUserMobile] = useState("");
  const [userLandMark, setUserLandMark] = useState("");
  const [userLocality, setUserLocality] = useState("");
  const [userCity, setUserCity] = useState("");
  const [userPinCode, setUserPinCode] = useState("");
  const [userState, setUserState] = useState("");

  const cusId = localStorage.getItem('loginUserId');
  console.log(cusId,"irshad")
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const id = frmId === "new" ? Date.now().toString() : toId;

    const addressMap = {
      USER_NAME: userName,
      USER_MOBILE: userMobile,
      USER_LAND_MARK: userLandMark,
      USER_LOCALITY: userLocality,
      USER_CITY: userCity,
      USER_PIN_CODE: userPinCode,
      USER_STATE: userState,
    };

    const cosMap = {
      LAST_USED_USER_NAME: userName,
      LAST_USED_USER_NUMBER: userMobile,
      LAST_USED_USER_ADDRESS: `${userLandMark}, ${userLocality}, ${userCity}, ${userState}, ${userPinCode}`,
    };
    console.log(frmId,"ddddddddddddd")

    const ref = doc(collection(firestore, "CUSTOMERS", cusId, "DELIVER_ADDRESS"), id);
    const ref2 = doc(firestore, "CUSTOMERS", cusId, "DELIVER_ADDRESS", id);
    

    try {
      if (frmId === "new") {
        console.log("irshhh___test")
        await setDoc(ref, addressMap, { merge: true });
      } else {
        console.log("irshhh___test__fail")
        await setDoc(ref2, addressMap, { merge: true });
      }

      await setDoc(doc(firestore, "CUSTOMERS", cusId), cosMap, { merge: true });

      alert("User details added successfully!");
      // Fetch address or perform any additional tasks
      // Example: await fetchAddress(cusId);
      navigate("/address");;  // Navigate to some path after submission
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("An error occurred while adding user details. Please try again.");
    }
  };

  // const ref = collection(firestore, "ADDRESS");
  // const [formData, setFormData] = useState({
  //   name: "",
  //   mobile: "",
  //   landmark: "",
  //   locality: "",
  //   city: "",
  //   pincode: "",
  //   state: "Kerala",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await addDoc(ref, formData); // Add 'await' here
  //     alert("User details added successfully!");
  //     setFormData({
  //       name: "",
  //       mobile: "",
  //       landmark: "",
  //       locality: "",
  //       city: "",
  //       pincode: "",
  //       state: "Kerala",
  //     });
  //     navigate("/address");
  //   } catch (error) {
  //     console.error("Error adding user details: ", error);
  //     alert("An error occurred while adding user details. Please try again.");
  //   }
  // };

  return (
    <div className="userdetails">
      <div className="user-box">
        <h5>Delivery Address</h5>
        <form action="" onSubmit={handleSubmit}>
          <div className="formbox">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="formbox">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="number"
              id="mobile"
              name="mobile"
              value={userMobile}
              onChange={(e) => setUserMobile(e.target.value)}
            />
          </div>
          <div className="formbox">
            <label htmlFor="landmark">Landmark</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              value={userLandMark}
              onChange={(e) => setUserLandMark(e.target.value)}
            />
          </div>
          <div className="formbox">
            <label htmlFor="locality">Locality</label>
            <input
              type="text"
              id="locality"
              name="locality"
              value={userLocality}
              onChange={(e) => setUserLocality(e.target.value)}
            />
          </div>
          <div className="formbox">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={userCity}
              onChange={(e) => setUserCity(e.target.value)}
            />
          </div>
          <div className="formbox">
            <label htmlFor="pincode">PIN Code</label>
            <input
              type="number"
              id="pincode"
              name="pincode"
              value={userPinCode}
              onChange={(e) => setUserPinCode(e.target.value)}
            />
          </div>
          <div className="formbox">
            <label htmlFor="state">State</label>
            <select
              id="state"
              name="state"
              value={userState}
              onChange={(e) => setUserState(e.target.value)}
            >
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="State">State</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
