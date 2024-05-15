import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import { useCount } from "../../Context/Context";

export const Button = ({ title, page }) => {
  const { count } = useCount();
  return (
    <div className="btn">
      <Link to={page}>
        <button disabled={count == 0}>{title}</button>
      </Link>
    </div>
  );
};
