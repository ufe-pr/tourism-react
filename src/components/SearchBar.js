import React from "react";
import { mdiMagnify as Search } from "@mdi/js";
import Icon from "@mdi/react";
import BlurContainer from "./BlurContainer";
import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <BlurContainer className="__SearchBar">
      <Icon
        path={Search}
        title="Search"
        size={1}
        className="__SearchBar__icon"
      />
      <input
        className="__SearchBar__input"
        placeholder="Search for tourist attractions in your city..."
      />
    </BlurContainer>
  );
}
