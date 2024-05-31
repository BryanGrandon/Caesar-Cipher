import React from "react";

function Wave({ position = "bottom" }) {
  let $wave = document.querySelector(".wave");
  if (position == "top") $wave.style.setProperty("top", "0");
  else if (position == "bottom") $wave.style.setProperty("bottom", "0");

  return (
    <section className="wave">
      <svg
        className="wave__svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
      >
        <path
          className="wave__path"
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        ></path>
      </svg>
    </section>
  );
}

export default Wave;
