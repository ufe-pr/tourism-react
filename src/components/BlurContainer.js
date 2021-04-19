import React from "react";
import "./BlurContainer.scss";

export default function BlurContainer({ children, className }) {
  return (
    <div className={`__BlurContainer ${className ? className : ""}`}>
      {children}
    </div>
  );
}
