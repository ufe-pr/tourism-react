import React from "react";

export const TourContext = React.createContext({
  tourIndex: 0,
  previousIndex: 0,
  tours: [],
  isPrevious: false,
});
