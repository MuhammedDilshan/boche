import React, { useState } from "react";
import "./SelectPayment.css";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const SelectPayment = () => {
  const [selectPayment, setSelectPayment] = useState({
    deposit: {
      selected: false,
      amount: 0,
    },
    wallet: {
      selected: false,
      amount: 0,
    },
  });
  const [submitPayment, setSubmitPayment] = useState(false);
  const [paymentSelected, setPaymentSelected] = useState(false);
  const [amountValue, setAmountValue] = useState();

  const handleChoosePayment = (type) => {
    setSelectPayment({
      deposit: {
        selected: type === "deposit",
        // amount: type === "deposit" ? amountValue : selectPayment.deposit.amount,
      },
      wallet: {
        selected: type === "wallet",
        // amount: type === "wallet" ? amountValue : selectPayment.wallet.amount,
      },
    });
    setPaymentSelected(true);
  };

  const handleSubmitPayment = () => {
    setSubmitPayment(true);
    setSelectPayment({
      deposit: {
        selected: false,
        amount: amountValue,
      },
    });
    setPaymentSelected(false);
  };

  return (
    <div className="selectpayment">
      {/* <div className="my-wallet"> */}
      <p>₹1500</p>
      {/* </div> */}
      <h4>Pay Using</h4>
      <div
        className={`${paymentSelected && "active-payment"} ${
          submitPayment && "choosed"
        } use-wallet`}
        onClick={() => handleChoosePayment("deposit")}
      >
        <div className="top">
          <h5>Deposit Wallet</h5>

          <span>Current Balance $200</span>
          {submitPayment && amountValue > 0 && (
            <span className="paid-price">Current Balance ${amountValue}</span>
          )}
        </div>
        <div className="bottom-box">
          <input
            type="radio"
            checked={
              selectPayment?.deposit?.selected ||
              selectPayment?.deposit?.amount > 0
            }
          />
          {selectPayment?.deposit?.selected && (
            <div className="price-input">
              <input
                type="text"
                placeholder="Paid Amount"
                className="price-input"
                onChange={(e) => setAmountValue(e.target.value)}
              />
              {amountValue > 0 && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubmitPayment();
                  }}
                >
                  <TiTick />
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* wallet */}
      <div
        className={`${paymentSelected && "active-payment"} ${
          submitPayment && "choosed"
        } use-wallet`}
        onClick={() => handleChoosePayment("wallet")}
      >
        <div className="top">
          <h5>Winning Wallet</h5>

          <span>Current Balance $200</span>
          {submitPayment && amountValue > 0 && (
            <span className="paid-price">Current Balance ${amountValue}</span>
          )}
        </div>
        <div className="bottom-box">
          <input
            type="radio"
            checked={
              selectPayment?.wallet?.selected ||
              selectPayment?.wallet?.amount > 0
            }
          />
          {selectPayment?.wallet?.selected && (
            <div className="price-input">
              <input
                type="text"
                placeholder="Paid Amount"
                className="price-input"
                onChange={(e) => setAmountValue(e.target.value)}
              />
              {amountValue > 0 && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubmitPayment();
                  }}
                >
                  <TiTick />
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      {/* <div className="use-wallet">
        <h5>Winning Wallet</h5>
        <input type="radio" />
      </div> */}
      <Link to="/option" className="link">
        <div className="use-wallet">
          <h5>Online Payment</h5>
          <FaArrowRightLong />
        </div>
      </Link>
    </div>
  );
};

export default SelectPayment;
