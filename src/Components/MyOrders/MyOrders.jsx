import React from "react";
import "./MyOrders.css";
import { MdOutlineSearch } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa6";
import { Assets } from "../Assets/Assets";
import { Link } from "react-router-dom";

export const MyOrders = () => {
  return (
    <div className="my-order">
      <form action="">
        <input type="text" placeholder="Search here..." />
        <MdOutlineSearch />
      </form>
      <div className="order-list">
        <Link to="/summery" className="details">
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
        </Link>
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
      </div>
    </div>
  );
};
