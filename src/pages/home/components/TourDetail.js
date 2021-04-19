import BlurContainer from "components/BlurContainer";
import React, { useContext } from "react";
import { mdiMapOutline, mdiCalendarOutline } from "@mdi/js";
import Icon from "@mdi/react";
import "./TourDetail.scss";
import Tour from "models/Tour";
import { TourContext } from "../providers/TourContext";

export default function TourDetail({ tour = new Tour(), previous = null }) {
  const { isPrevious } = useContext(TourContext);
  const tourr = isPrevious ? previous : tour;
  return (
    <div className="__TourDetail">
      <div className={"__TourDetail__img" + (isPrevious ? " go-out" : "")}>
        <img alt={tourr.name} src={tourr.image} />
      </div>
      <h3 className="__TourDetail__period">
        <span className={isPrevious ? "go-down" : ""}>
          {tourr ? tourr.dateSpan : ""}
        </span>
        {}
      </h3>
      <div className="__TourDetail__Title">
        {tourr.title ? (
          tourr.title.map((e, i) => (
            <h1 key={i}>
              <span key={i} className={isPrevious ? "go-down" : ""}>
                {e}
              </span>
            </h1>
          ))
        ) : (
          <h1>Unknown title</h1>
        )}
      </div>
      <p>
        <span className={isPrevious ? "go-down" : ""}>
          {tourr.description
            ? tourr.description
            : "No description provided for this tour."}
        </span>
      </p>
      <div className="__TourDetail__actions">
        <BlurContainer className="primary">
          <Icon path={mdiCalendarOutline} title="Calendar" size={1} />
          Choose date
        </BlurContainer>
        <BlurContainer>
          <Icon path={mdiMapOutline} title="Map" size={1} />
          View tourist attractions
        </BlurContainer>
      </div>
    </div>
  );
}
