import BlurContainer from "components/BlurContainer";
import React, { useContext } from "react";
import "./NavigationItem.scss";
import { TourContext } from "../providers/TourContext";
import Fraction from "components/Fraction";

export default function NavigationItem({ index }) {
  const { tours } = useContext(TourContext);
  const tour = tours[index];
  return (
    <BlurContainer className="__NavigationItem">
      <Fraction
        className="__NavigationItem__position__count"
        top={`0${index + 1}`}
        bottom="03"
      />
      <div className="__NavigationItem__position">
        <div></div>
        <div>{tour.position ? tour.position : "durhh"}</div>
      </div>
      <h2>{tour.name ? tour.name : "Somewhere you'll love"}</h2>
      <h3 className="__NavigationItem__period">
        {tour ? (
          <>
            {`${tour.startDate} -`}
            <br />
            {`${tour.endDate}. (2021)`}
          </>
        ) : (
          "NOT CONCLUDED"
        )}
      </h3>
    </BlurContainer>
  );
}
