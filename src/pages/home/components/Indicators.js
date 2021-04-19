import React, { useContext } from "react";
import "./Indicators.scss";
import { TourContext } from "../providers/TourContext";

export default function Indicators() {
  const { tours, tourIndex } = useContext(TourContext);
  return (
    <>
      {tours.map((e, i) => (
        <div
          key={i}
          className={`__Indicator ${i === tourIndex ? "active" : ""}`}
        ></div>
      ))}
    </>
  );
}
