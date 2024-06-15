import React from "react";

function WaveTop() {
  return (
    <section className="wave-top">
      <svg
        className="wave-top__svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
      >
        <path
          className="wave-top__path"
          d="M0.00,49.98 C150.00,150.00 424.78,-49.98 500.00,49.98 L500.00,0.00 L0.00,0.00 Z"
        ></path>
      </svg>
    </section>
  );
}

export default WaveTop;
