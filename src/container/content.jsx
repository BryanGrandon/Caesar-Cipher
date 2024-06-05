import React, { useState } from "react";
import Options from "../components/options";
import { caesarCipher } from "../functions/caesar-cipher";
import TitleH2 from "../components/title-h2";

function Content() {
  const [message, setMessage] = useState("");
  const [shift, setShift] = useState(3);
  const [specialCharacters, setSpecialCharacters] = useState(true);
  const [alphabet, setAlphabet] = useState(true);

  const $ = (theClass) => document.querySelector(theClass);

  const handlerChangeAlphabet = (e) => {
    let value = e.target.checked;
    let text = caesarCipher(message, shift, value, specialCharacters);
    setAlphabet(value);
    $(".output").textContent = text;
  };

  const handlerChangeMessage = (e) => {
    let value = e.target.value;
    let text = caesarCipher(value, shift, alphabet, specialCharacters);
    setMessage(value);
    $(".output").textContent = text;
  };

  const handlerChangeShift = (e) => {
    let value = e.target.value;
    let text = caesarCipher(message, value, alphabet, specialCharacters);
    setShift(value);
    $(".output").textContent = text;
  };

  const handlerChangeSpecialCharacters = (e) => {
    let value = e.target.checked;
    let text = caesarCipher(message, shift, alphabet, value);
    setSpecialCharacters(value);
    $(".output").textContent = text;
  };
  return (
    <main className="main">
      <article className="cipher">
        <section className="cipher__message">
          <TitleH2 text="Message" />
          <textarea
            className="cipher__message__input"
            onChange={handlerChangeMessage}
            placeholder="Write your message..."
          ></textarea>
        </section>

        <section className="cipher__options">
          <TitleH2 text="Options" />
          <section className="cipher__options__inputs">
            <Options
              id="id-alphabet"
              title="Alphabet"
              option1="English"
              option2="Spanish"
              onChange={handlerChangeAlphabet}
            />

            <section className="cipher__shift">
              <label className="cipher__shift__label">
                Shift
                <input
                  type="number"
                  className="cipher__shift__input"
                  onChange={handlerChangeShift}
                  value={shift}
                />
              </label>
            </section>

            <Options
              id="id-characters"
              classN="characters"
              title="Special characters"
              option1="Include"
              option2="Ignore"
              onChange={handlerChangeSpecialCharacters}
            />
          </section>
        </section>
        <section className="cipher__encrypted-message">
          <TitleH2 text="Encrypted message" />
          <p className="cipher__encrypted-message__output output"></p>
        </section>
      </article>
    </main>
  );
}

export default Content;
