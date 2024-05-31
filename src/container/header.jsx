import React from "react";
import WaveBottom from "../components/wave-bottom";
import Navbar from "../components/navbar";

function Header() {
  return (
    <header className="header">
      <article className="header__bg">
        <article className="header__container">
          <Navbar />
          <h1 className="header__h1">Caesar Cipher</h1>
          <section className="header__info">
            <p className="header__info__paragraph">
              The Caesar cipher is a simple encryption technique that was used
              by Julius Caesar to send secret messages to his allies. It works
              by shifting the letters in the plaintext message by a certain
              number of positions, known as the “shift” or “key”.
            </p>
            <img
              src="https://camo.githubusercontent.com/687db44ff3621ac28965ddf22c75aa61a1fd95e69121cb6486bdfa83532ecdf5/68747470733a2f2f7777772e7468656a61766170726f6772616d6d65722e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031362f31312f4361657361722d4369706865722d696e2d4a6176612d456e6372797074696f6e2d616e642d44656372797074696f6e2e706e67"
              alt="caesar-cipher"
              className="header__info__img"
            />
          </section>
          <span className="header__blank"></span>
        </article>
      </article>
      <WaveBottom />
    </header>
  );
}

export default Header;
