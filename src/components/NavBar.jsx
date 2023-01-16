import React from "react";
import "../css/NavBar.css";
import PersonalLogo from "../images/personal-logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Resume from "../images/ashleymanese_resume.pdf"

function NavBar() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
    <div>
      <nav className="sticky">
        <a href="#">
          <img src={PersonalLogo} alt="person logo" />
        </a>
        <div className="main-content">
          <a href="#about">about</a>
          <a href={Resume}>resume</a>
          <a href="#experience">experience</a>
          <a href="#projects">projects</a>
        </div>
        <div
          className="hamburger"
          onClick={() => {
            setToggle(!toggle);
            document.getElementById("mobile-view-content").style.display = `${
              toggle ? " block" : "none"
            }`;
          }}
        >
          <GiHamburgerMenu />
        </div>
      </nav>
      <div id="mobile-view-content" className="mobile-view-content sticky">
        <div className="mobile-view-item">
          <a href="#about">about</a>
        </div>
        <div className="mobile-view-item">
          <a href={Resume}>resume</a>
        </div>
        <div className="mobile-view-item">
          <a href="#experience">experience</a>
        </div>
        <div className="mobile-view-item">
          <a href="#projects">projects</a>
        </div>
      </div>
      </div>
    </>
  );
}

export default NavBar;
