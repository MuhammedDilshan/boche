import React, { useState, useEffect } from "react";
import "./SelectAddress.css";
import { Assets } from "../Assets/Assets";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { Accordion, Card, Placeholder } from "react-bootstrap";

const SelectAddress = () => {
  // const [addresses, setAddresses] = useState([]);
  const [lastUsedDeliveryName, setLastUsedDeliveryName] = useState("");
  const [lastUsedDeliveryNumber, setLastUsedDeliveryNumber] = useState("");
  const [lastUsedDeliveryAddress, setLastUsedDeliveryAddress] = useState("");
  const [selecteVariable, setselecteVariable] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   // const fetchAddresses = async () => {
  //   //   const addressCollection = collection(firestore, "ADDRESS");
  //   //   const snapshot = await getDocs(addressCollection);
  //   //   const addressesData = snapshot.docs.map((doc) => ({
  //   //     id: doc.id,
  //   //     ...doc.data(),
  //   //   }));
  //   //   setAddresses(addressesData);
  //   // };

  //   // fetchAddresses();
  //   fetchLastUsedDeliveryInfo();

  // }, []);

  const cusId = localStorage.getItem("loginUserId");
  useEffect(() => {
    const loadData = async () => {
      const {
        lastUsedDeliveryName,
        lastUsedDeliveryNumber,
        lastUsedDeliveryAddress,
      } = await fetchLastUsedDeliveryInfo(cusId);

      setLastUsedDeliveryName(lastUsedDeliveryName);
      setLastUsedDeliveryNumber(lastUsedDeliveryNumber);
      setLastUsedDeliveryAddress(lastUsedDeliveryAddress);
    };

    loadData();
  }, [cusId]);

  const fetchLastUsedDeliveryInfo = async () => {
    //   const addressCollection = collection(firestore, "ADDRESS");
    //   const snapshot = await getDocs(addressCollection);
    const customerRef = doc(firestore, "CUSTOMERS", cusId);
    const customerSnapshot = await getDoc(customerRef);

    if (customerSnapshot.exists()) {
      const data = customerSnapshot.data();
      return {
        lastUsedDeliveryName: data.LAST_USED_USER_NAME || "",
        lastUsedDeliveryNumber: data.LAST_USED_USER_NUMBER || "",
        lastUsedDeliveryAddress: data.LAST_USED_USER_ADDRESS || "",
      };
    } else {
      return {
        lastUsedDeliveryName: "",
        lastUsedDeliveryNumber: "",
        lastUsedDeliveryAddress: "",
      };
    }
  };
  let selectedOption = "";

  const handleStorePickUpClick = () => {
    setselecteVariable("storePickUp");
    selectedOption = "storePickUp";
    // navigate("/payment", { state: { selectedOption: "storePickUp" } });
  };

  return (
    <div className="select-address">
      <div className="address-options">
        <div className="item" onClick={handleStorePickUpClick}>
          <div className="left-box">
            <div className="location">
              <img src={Assets.Store} alt="Locat" />
            </div>
            <p>Pick up from store</p>
          </div>
          <input
            type="radio"
            checked={selecteVariable === "storePickUp"}
            readOnly
          />
        </div>
        <div className="item item-accordion">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Delivery to your address</Accordion.Header>
              <Accordion.Body>
                <h5 className="heading">Saved Address</h5>
                {/* {addresses?.length === 0
                  ? Array(2)
                      .fill()
                      .map(() => ( */}
                {/* <Card style={{ width: "18rem" }} className="skelton">
                          <Card.Body>
                            <Placeholder
                              as={Card.Title}
                              animation="glow"
                              sm={2}
                            />
                            <Placeholder as={Card.Title} animation="glow">
                              <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                              <Placeholder xs={7} /> <Placeholder xs={4} />
                              <Placeholder xs={4} /> <Placeholder xs={6} />
                            </Placeholder>
                          </Card.Body>
                        </Card>
                      ))
                  :SelectAddress (() => ( */}
                {lastUsedDeliveryAddress && (
                  <div className="address-item">
                    <div className="address-box">
                      <div className="edit-top">
                        <div className="location">
                          <img src={Assets.Location} alt="" />
                        </div>
                        {/* <button className="edit">Edit</button> */}
                      </div>
                      <p>
                        {lastUsedDeliveryName}
                        {lastUsedDeliveryAddress}
                      </p>
                    </div>
                    <Link to="/change" className="link">
                      <button className="change">Change Address</button>
                    </Link>
                  </div>
                )}
                {/* ))} */}
                <Link to="/delivery" state={{ frmId: "new", toId: "" }}>
                  <button className="add-new-address-btn">New Address</button>
                </Link>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default SelectAddress;
