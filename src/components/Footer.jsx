import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>© Ashley Manese 2023</p>
      <a href="https://github.com/3100ashley">
        <p>
          <AiFillGithub fontSize={28} />
        </p>
      </a>
      <a href="https://www.linkedin.com/in/ashleymanese/">
        <p>
          <BsLinkedin fontSize={24} />
        </p>
      </a>
    </footer>
  );
}
