import React from "react";

function Options({ id, onChange, title, option1, option2 }) {
  const handlerClick = (e) => {
    let value = e.target.checked;
    const option1 = document.querySelector(`.${id}__1`);
    const option2 = document.querySelector(`.${id}__2`);
    if (value) {
      option1.style.setProperty("color", "#7f5af0");
      option2.style.setProperty("color", "#94a1b2");
    } else {
      option1.style.setProperty("color", "#94a1b2");
      option2.style.setProperty("color", "#7f5af0");
    }
  };

  return (
    <section className="options">
      <label htmlFor={id} className="options__title">
        {title}
      </label>
      <input
        type="checkbox"
        id={id}
        className={`options__input`}
        onChange={onChange}
        onClick={handlerClick}
        defaultChecked
      />
      <label htmlFor={id} className="options__label">
        <span className={`${id}__1 options__span options__span__1`}>
          {option1}
        </span>
        <span className={`${id}__2 options__span options__span__2`}>
          {option2}
        </span>
      </label>
    </section>
  );
}

export default Options;
