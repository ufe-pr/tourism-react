import React from "react";
import "./Fraction.scss";

export default function Fraction({ top, bottom, className = "" }) {
  return (
    <div className={`__Fraction ${className ? className : ""}`}>
      <span className="__Fraction__top">{top}</span>
      <span className="__Fraction__bottom">{bottom}</span>
    </div>
  );
}
