import React from "react";
import Header from "../../components/Header";
import "./Home.scss";
import Divider from "./components/Divider";
import Indicators from "./components/Indicators";
import Body from "./components/Body";
import { useState, useEffect, useRef } from "react";
import Tour from "models/Tour";
import { TourContext } from "./providers/TourContext";
import Fraction from "components/Fraction";

export default function Home() {
  const ongoingTour = new Tour({
    title: ["Visit tourist attractions", "in Abuja"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. " +
      "Numquam illo cum dicta? Optio accusantium impedit est magni " +
      "libero eligendi fuga nulla rerum natus voluptates. " +
      "Porro corrupti quam ducimus quasi ipsa? Toooo",
    startDate: "10TH APRIL",
    endDate: "10TH JULY",
    name: "Abuja Tourist Attraction",
    position: "ongoing",
    image: "https://unsplash.com/photos/1XePlSBBfG8/download?force=true&w=2400",
  });
  const nextTour = new Tour({
    title: ["Visit tourist attractions", "in Kaduna"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. " +
      "Numquam illo cum dicta? Optio accusantium impedit est magni " +
      "libero eligendi fuga nulla rerum natus voluptates. " +
      "Porro corrupti quam ducimus quasi ipsa? Toooo",
    startDate: "10TH JULY",
    endDate: "10TH OCTOBER",
    name: "Kaduna Tourist Attraction",
    position: "next",
    image: "https://unsplash.com/photos/Vtl6cOhO87Y/download?force=true",
  });
  const upcomingTour = new Tour({
    title: ["Visit tourist attractions", "in Lagos"],
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. " +
      "Numquam illo cum dicta? Optio accusantium impedit est magni " +
      "libero eligendi fuga nulla rerum natus voluptates. " +
      "Porro corrupti quam ducimus quasi ipsa? Toooo",
    startDate: "10TH OCTOBER",
    endDate: "10TH DECEMBER",
    name: "Lagos Tourist Attraction",
    position: "up-coming",
    image: "https://unsplash.com/photos/ukvgqriuOgo/download?force=true&w=2400",
  });
  const tours = [ongoingTour, nextTour, upcomingTour];
  const [tourIndex, setTourIndex] = useState(0);

  const previousRef = useRef();
  const previousIndex = previousRef.current;
  const [changer, setChanger] = useState(1);
  const isPrevious =
    previousIndex !== null &&
    previousIndex !== undefined &&
    previousIndex !== tourIndex;

  useEffect(() => {
    const id = setTimeout(() => {
      previousRef.current = tourIndex;
      setChanger(changer * -1);
    }, 400);
    return () => clearTimeout(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tourIndex]);
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) setTourIndex((tourIndex + 1) % 3);
    };
    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [tourIndex]);
  return (
    <TourContext.Provider
      value={{
        tourIndex: tourIndex,
        tours: tours,
        isPrevious: isPrevious,
        previousIndex: previousIndex,
      }}
    >
      <div className="__Home">
        <aside className="__Home__sidebar">
          <h2>NG</h2>
          <Divider />
          <Indicators />
          <Divider />
          <Fraction top={`0${tourIndex + 1}`} bottom="03" />
        </aside>
        <main>
          <Header />
          <Body />
        </main>
      </div>
    </TourContext.Provider>
  );
}
