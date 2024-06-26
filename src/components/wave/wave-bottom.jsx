import React from "react";

function WaveBottom() {
  return (
    <section className="wave-bottom">
      <svg
        className="wave-bottom__svg"
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
      >
        <path
          className="wave-bottom__path"
          d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
        ></path>
      </svg>
    </section>
  );
}

export default WaveBottom;
