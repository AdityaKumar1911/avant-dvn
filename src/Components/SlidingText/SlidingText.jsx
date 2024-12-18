import React from "react";
import "./SlidingText.css";

const SlidingText = () => {
  return (
    <div className="sliding-container">
      <div
        className="sliding-text"
        style={{ display: "flex", flexDirection: "row", gap: "40px" }}
      >
        <p> Unleash your inner icon with Avant Divine’s artistic couture.</p>{" "}
        <br />
        <p> Unleash your inner icon with Avant Divine’s artistic couture.</p>
        <br />
        <p> Unleash your inner icon with Avant Divine’s artistic couture.</p>
        <br />
        <p> Unleash your inner icon with Avant Divine’s artistic couture.</p>
        <br />
        <p> Unleash your inner icon with Avant Divine’s artistic couture.</p>
        <br />
        <p> Unleash your inner icon with Avant Divine’s artistic couture.</p>
      </div>
    </div>
  );
};

export default SlidingText;
