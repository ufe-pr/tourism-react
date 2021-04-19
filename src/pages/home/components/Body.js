import React, { useContext } from "react";
import TourDetail from "./TourDetail";
import "./Body.scss";
import NavigationItem from "./NavigationItem";
import { TourContext } from "../providers/TourContext";

export default function Body() {
  const { tours, tourIndex, previousIndex } = useContext(TourContext);

  return (
    <div className="__Body">
      <TourDetail
        tour={tours[tourIndex % 3]}
        previous={
          previousIndex !== null && previousIndex !== undefined
            ? tours[previousIndex % 3]
            : null
        }
      />
      <div className="__Body__Navigation">
        <NavigationItem index={(tourIndex + 1) % 3} />
        <NavigationItem index={(tourIndex + 2) % 3} />
      </div>
    </div>
  );
}
