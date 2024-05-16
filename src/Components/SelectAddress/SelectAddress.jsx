import React, { useState, useEffect } from "react";
import "./SelectAddress.css";
import { Assets } from "../Assets/Assets";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";
import { Accordion, Card, Placeholder } from "react-bootstrap";

const SelectAddress = () => {
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    const fetchAddresses = async () => {
      const addressCollection = collection(firestore, "address");
      const snapshot = await getDocs(addressCollection);
      const addressesData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAddresses(addressesData);
    };

    fetchAddresses();
  }, []);

  return (
    <div className="select-address">
      <div className="address-options">
        <div className="item">
          <div className="left-box">
            <div className="location">
              <img src={Assets.Store} alt="Locat" />
            </div>
            <p>Pick up from store</p>
          </div>
          <input type="radio" />
        </div>
        <div className="item item-accordion">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Delivery to your address</Accordion.Header>
              <Accordion.Body>
                <h5 className="heading">Saved Address</h5>
                {addresses?.length === 0
                  ? Array(2)
                      .fill()
                      .map((i) => (
                        <Card style={{ width: "18rem" }} className="skelton">
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
                  : addresses.map((address) => (
                      <div className="address-item" key={address.id}>
                        <div className="address-box">
                          <div className="edit-top">
                            <div className="location">
                              <img src={Assets.Location} alt="" />
                            </div>
                            <button className="edit">Edit</button>
                          </div>
                          <h6>{address.name}</h6>
                          <p>
                            {address.landmark}, {address.locality},{" "}
                            {address.city}, {address.state} {address.pincode}
                          </p>
                        </div>
                      </div>
                    ))}
                <Link to="/delivery">
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
