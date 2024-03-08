import React from "react";
import logo from "../assets/logo.svg";
import Typewriter from "typewriter-effect";

const Intro = () => {
  return (
    <div className="introduction">
      {/* image */}
      <img src={logo} alt="logo" />

      {/* introductory statement */}
      <h3>
        Hi there! I'm
        <Typewriter
          options={{
            strings: ["Umair Faheem", "The Project Code"],
            autoStart: true,
            loop: true,
          }}
          style={{ display: "inline" }}
        />
      </h3>

      {/* about yourself */}
      <div className="desc">
        <p>
          A dedicated and passionate creator with a love for turning ideas into
          reality. Whether it's crafting compelling narratives, designing
          captivating visuals, or solving complex problems, I thrive on the
          challenges that come with bringing ideas to life.
        </p>
        <p>
          Currently immersed in the captivating world of Computer Science{" "}
          <span>Engineering</span> as a college student. My educational roots
          trace back to <span>Hamdard Public School</span>, where I laid the
          foundation for my academic journey.
        </p>
        <p>
          Proficient in <span>web development</span>, I've honed my skills in
          crafting dynamic and user-friendly websites that seamlessly blend form
          and function. Beyond the code, I immerse myself in the realm of{" "}
          <span>UI designing</span>, ensuring that each digital experience is
          not just efficient but aesthetically pleasing.
        </p>
        <p>
          In addition to my academic pursuits, I've embraced the challenges of{" "}
          <span>Data Structures and Algorithms</span>, recognizing their
          fundamental role in building robust and efficient software.
        </p>
      </div>

      {/* links */}
      <ul className="socials">
        <li>
          <a href="mailto:umairfaheem.new@gmail.com">
            <i className="ri-mail-line"></i>
            <span>Gmail</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="ri-github-line"></i>
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="ri-linkedin-fill"></i>
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="">
            <i className="ri-youtube-line"></i>
            <span>YouTube</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Intro;
