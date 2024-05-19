import React, { useState, useEffect } from 'react';
import "./MyOrders.css";
import { MdOutlineSearch } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { Assets } from "../Assets/Assets";
import { Link } from "react-router-dom";
import { collection,query, where, getDocs } from "firebase/firestore";
import { firestore } from "../../firebase";
import {OrdersModel} from "../../ModelClasses/order_model"
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';


export const MyOrders = () => {

  const cusId = localStorage.getItem('loginUserId');
  const navigator = useNavigate();


  const formatDate = (date) => {
    return format(date, 'dd MM yyyy');
  };
  

  const fetchOrders = async () => {
    try {
      console.log(cusId);
      const q = query(collection(firestore, "ORDERS"), where("COSTUMER_ID", "==", cusId));
      const snapshot = await getDocs(q);
      const ordersList = [];
  
      if (!snapshot.empty) {
        snapshot.forEach((doc) => {
          const data = doc.data();
          const orderDate = data.ORDER_DATE.toDate();
          ordersList.push(new OrdersModel(
            data.ORDER_ID   ,
            data.COSTUMER_ID || "",
            orderDate,
            data.ORDER_PRICE || 0,
            data.PRODUCT_ID || "",
            data.PRODUCT_IMAGE || [],
            data.PRODUCT_PRICE || 0,
            data.PRODUCT_QUANTITY || 0,
            data.STATUS || ""
          ));
        });
      }
  
      console.log(`${ordersList.length} orders fetched.`);
      return ordersList;
    } catch (error) {
      console.error("Error fetching orders: ", error);
      return [];
    }
  };


  const [orders, setOrders] = useState([]);

 

  useEffect(() => {
    const fetchData = async () => {
      const fetchedOrders = await fetchOrders();
      setOrders(fetchedOrders);
    };

    fetchData();
  }, [cusId]);



  const handleOrderClick = (order) => {
    navigator('/summery', {
      state: {
        orderId: order.orderId,
        orderDate: order.orderDate,
        orderPrice: order.orderPrice,
        productQuantity: order.productQuantity,
        status: order.status,
        productImage:order.productImage,
        productPrice:order.productPrice

      }
    });
  };

  return (
    <div className="my-order">
      <form action="">
        <input type="text" placeholder="Search here..." />
        <MdOutlineSearch />
      </form>
      <div className="order-list">
      {orders.map((order) => (
        
          <div className="order-item" onClick={() => handleOrderClick(order)} >
            <div className="order-details">
              <div className="order-box">
                <div className="tea">
                  <img src={order.productImage} alt="" />
                </div>
                <div className="deliver">
                  <p>{order.status} on {formatDate(order.orderDate)}</p>
                  <span>{order.productQuantity} Tea Pack</span>
                </div>
              </div>
            </div>
            <div className="order-arrow">
              <FaChevronRight />
            </div>
          </div>
       
         ))}
        {/* <div className="order-item">
          <div className="order-details">
            <div className="order-box">
              <div className="tea">
                <img src={Assets.Tea} alt="" />
              </div>
              <div className="deliver">
                <p>Delivered on April 20, 2024</p>
                <span>Tea Pack</span>
              </div>
            </div>
          </div>
          <div className="order-arrow">
            <FaChevronRight />
          </div>
        </div>
        <div className="order-item">
          <div className="order-details">
            <div className="order-box">
              <div className="tea">
                <img src={Assets.Tea} alt="" />
              </div>
              <div className="deliver">
                <p>Delivered on April 20, 2024</p>
                <span>Tea Pack</span>
              </div>
            </div>
          </div>
          <div className="order-arrow">
            <FaChevronRight />
          </div>
        </div>
        <div className="order-item">
          <div className="order-details">
            <div className="order-box">
              <div className="tea">
                <img src={Assets.Tea} alt="" />
              </div>
              <div className="deliver">
                <p>Delivered on April 20, 2024</p>
                <span>Tea Pack</span>
              </div>
            </div>
          </div>
          <div className="order-arrow">
            <FaChevronRight />
          </div>
        </div> */}
      </div>
    </div>
  );
};
