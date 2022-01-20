import React from 'react';
import '../Nav.css';
export default function NavLinkToggle() {
  return (
    <div className="navWrap">
    
    <ul className="navItems">
    <li className="current">
      <a className="smoothscroll" href="#intro" title="intro">
        Intro
      </a>
    </li>
    <li>
      <a className="smoothscroll" href="#about" title="about">
        About
      </a>
    </li>
    <li>
      <a className="smoothscroll" href="#services" title="services">
        Services
      </a>
    </li>
    <li>
      <a
        className="smoothscroll"
        href="#certificate"
        title="certificate"
      >
        Works
      </a>
    </li>
    <li>
      <a className="smoothscroll" href="#contact" title="contact us">
        Say Hello
      </a>
    </li>
  </ul>
  
  <ul className="social-items">
    <li>
      <a href="https://www.facebook.com/rainer.bahls.3">
        <i className="fab fa-facebook-f"></i>
      </a>
    </li>
    <li>
      <a href="https://twitter.com/bahls_rainer">
        <i className="fab fa-twitter"></i>
      </a>
    </li>
    <li>
      <a href="https://www.xing.com/profile/Rainer_Bahls2/cv">
        <i className="fab fa-xing"></i>
      </a>
    </li>
    <li>
      <a href="https://unicorn255.github.io/Portfolio_2/">
        <i className="fab fa-dribbble"></i>
      </a>
    </li>
    <li>
      <a href="https://github.com/unicorn255">
        <i className="fab fa-github-square"></i>
      </a>
    </li>
  </ul>
  </div>
    )
}
