import React from "react";

function SelectMode({ onClick }) {
  return (
    <section className="select-mode">
      <button
        onClick={onClick}
        className="select-mode__btn select-mode--active encrypt"
      >
        Encrypt
      </button>
      <button onClick={onClick} className="select-mode__btn decrypt">
        Decrypt
      </button>
    </section>
  );
}

export default SelectMode;
