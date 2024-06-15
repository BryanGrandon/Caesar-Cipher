import React from "react";
import WaveTop from "../components/wave/wave-top";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <WaveTop />
      <article className="footer__bg">
        <article className="footer__container">
          <span className="footer__blank"></span>
          <section className="footer__social">
            <hr className="footer__social-hr" />
            <section className="footer__social-list">
              <a
                href="https://github.com/BryanGrandon"
                target="__blank"
                className="footer__social-list-icon"
              >
                <FaGithub />
              </a>
              <a target="__blank" className="footer__social-list-icon">
                <FaLinkedin />
              </a>
            </section>
            <hr className="footer__social-hr" />
          </section>
          <section className="footer__info">
            <h3 className="footer__info-logo">BG.Code</h3>
            <p className="footer__info-copyright">
              Copyright <FaCopyright /> 2024 BG.Code, Inc.
            </p>
            <section className="footer__info-links">
              <a className="footer__info-links-link">Legal information</a>
              <a className="footer__info-links-link">Privacy policy</a>
            </section>
          </section>
        </article>
      </article>
    </footer>
  );
}

export default Footer;
