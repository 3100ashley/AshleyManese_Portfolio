import React from "react";
import "../css/Item.css"
export default function Item(props) {
  return (
    <p className="item-container">
      <h6>{props.text}</h6>
    </p>
  );
}
