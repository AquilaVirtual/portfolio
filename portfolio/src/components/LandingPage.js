import React, { Component } from "react";
import $ from "jquery";

import "../css/LandingPage.css";

import dave from "../img/dave.jpg";
import currentaffairs from "../img/currentaffairs.png";
import notes from "../img/note.png";
import skill from "../img/skill.png";
import realbusiness from "../img/realbusiness.png";
import menue from "../img/menu.png";

class LandingPage extends Component {
  componentDidMount = () => {
    $(document).ready(function() {
      $("a.nav-link").click(function() {
        let target = $(this.hash);
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          500
        );
      });
      $("#flip").click(function() {
        $("#nav").slideToggle(500);
      });
    });
    alert(
      "This site is still under construction. Please click ok to view on desktop and tablet. Thanks!"
    );
  };
  render() {
    const bioStyle = {
      fontSize: "22px"
    };
    const darkGreyFont = {
      color: "#676a6c"
    };
    const navyFont = {
      color: "#3385FF"
    };

    return (
      <div className="main-container">
        <div id="flip">
          <img src={menue} alt="" />
        </div>
        <nav id="nav">
          <ul class="nav nav-pills">
            <li>
              <a class="nav-link home-button" href="#Home">
                David Loveday
              </a>
            </li>
            <li>
              <a class="nav-link" href="#About">
                About
              </a>
            </li>
            <li>
              <a class="nav-link" href="#Career">
                Career
              </a>
            </li>
            <li>
              <a class="nav-link" href="#Skills">
                Skills
              </a>
            </li>
            <li>
              <a class="nav-link" href="#Projects">
                Projects
              </a>
            </li>
          </ul>
        </nav>
        <div data-spy="scroll" data-target="#main-wrap" data-offset="0">
          <section id="Home" />
          <section id="About" />
          <section className="section-wrap-bio">
            <div className="container">
              <div className="about-me-wrap">
                <div className="about-inner-wrap">
                  <div className="navy-line" />
                  <div className="about-me">About Me</div>
                </div>
              </div>
              <div className="profile-image-wrap">
                <div className="fontawesome-left">
                  <i className="fab fa-react" /> <i className="fab fa-node" />
                </div>
                <img
                  className="profile-image"
                  width="11%"
                  height="144"
                  src={dave}
                  alt="David_Loveday"
                />
                <div className="fontawesome-right">
                  <i class="fab fa-angular" />
                  <i class="fab fa-js-square" />
                </div>
              </div>
              <div className="my-name">
                <span style={navyFont}>David</span> Loveday
              </div>
              <div className="social-media">
                <ul>
                  <li>
                    <a
                      href="https://resume.creddle.io/resume/aodc6tswpqo"
                      target="blank"
                    >
                      <i class="far fa-file" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/david-loveday-110a8a172/"
                      target="blank"
                    >
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/AquilaVirtual" target="blank">
                      <i className="fab fa-github" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="bio">
                <p style={bioStyle}>
                  The idea that one can use software to build software has been
                  fascinating to me.
                  <br />
                  From my childhood, I have learned things with a concentration
                  in quantitative <br />
                  <section id="Career" />
                  methods, and applying this in software development means an
                  ability to tackle
                  <br />
                  complex challenges. Writing software, to me, is a
                  materialization of logic. <br />
                  Having the knowledge to write software has given me a sense of
                  purpose.
                </p>
              </div>
            </div>
          </section>
          <section className="section-wrap-career">
            <div className="container">
              <div className="navy-line" />
              <div className="my-career">My Career</div>

              <div className="lambda">
                <div className="icon-wrapper">
                  <i className="fa fa-plus-square" />
                </div>
                <div className="vertical-container" />
                <div className="left">
                  <span style={darkGreyFont}>
                    <h2>Lambda School</h2>
                    <br />
                  </span>
                  <p>
                    <span>
                      Designed and developed full-stack applications utilizing
                      MERN stack technology. Optimized user authentication by
                      applying JWT. Hands-on experience with unit testing.
                      Implemented payment system using Stripe API. Utilized
                      Agile software development methodology and Git workflows
                      on every project.
                    </span>
                  </p>
                  <span className="date-line">
                    <span> Mar. 2018 to Oct. 2018</span> <br />
                    <small>
                      <span style={navyFont}>Web Developer</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="lambda-left">
                <div className="icon-wrapper">
                  <i className="fa fa-plus-square" />
                </div>
                <div className="left">
                  <span style={darkGreyFont}>
                    <h2>Handyman</h2>
                    <br />
                  </span>
                  <p>
                    <span>
                      Relocated to U.S. and was waiting on work permit.
                      <br />
                      Contract construction and painting jobs.
                    </span>
                  </p>
                  <span className="date-line">
                    <span> Jan. 2009 to Mar. 2018</span> <br />
                    <small>
                      <span style={navyFont}>Contractor</span>
                    </small>
                  </span>
                </div>
              </div>

              {/* <!--
        <div className="container">
          <div className="row">
            <div className="col">
              <div className = "animated rotateInDownLeft">First content for animation</div>
            </div>
            <div className="col">
              <div className = "animated rotateInDownLeft">Second content for animation</div>
            </div>
          </div>
        </div>
      --> */}
            </div>
            <div className="container">
              <div className="lambda-test">
                <div className="icon-wrapper">
                  <i className="fa fa-plus-square" />
                </div>
                <div className="left">
                  <span style={darkGreyFont}>
                    <h2>Tethys-Plantgeria</h2>
                    <br />
                  </span>
                  <p>
                    <span>
                      Diving Services –Inspection Repair and Maintenance (IRM)
                      <br />
                      of offshore Installations, GVI, CVI and NDT Inspections.
                      <br />
                      Retrofit/Replacement of Sacrificial Anodes and CPM System.
                      <br />
                      Pipeline Repair, Installation of TIE-IN/Spool pieces.
                      <br />
                      Tanker Loading and Terminal Maintenance.
                    </span>
                  </p>
                  <span className="date-line">
                    <span> Apr. 2006 to Sept. 2008</span> <br />
                    <small>
                      <span style={navyFont}>Commercial Diver</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="lambda-left">
                <div class="icon-wrapper">
                  <i class="fa fa-plus-square" />
                </div>
                <div className="left">
                  <span style={darkGreyFont}>
                    <h2>Powernet</h2>
                    <br />
                  </span>
                  <p>
                    <span>
                      Designed and built PC games Using C++, OpenGL, and
                      Blender.
                    </span>
                    <section id="Skills" />
                  </p>
                  <span className="date-line">
                    <span> Feb. 2004 to Apr. 2006</span> <br />
                    <small>
                      <span style={navyFont}>Game Developer</span>
                    </small>
                  </span>
                </div>
              </div>
            </div>
          </section>
          <section id="Skills" />
          <section className="section-wrap-skills">
            <div className="navy-line" />
            <div className="skills-header">My Skills</div>
            <img className="skills-image" alt="skills" src={skill} />
          </section>

          <section id="Projects" />
          <section className="section-wrap-projects">
          
            <div className="navy-line" />
            <div className="projects-header">My Projects</div>
          
            <div className="projects-wrap">
              <div className="business-wrap">
                <a href="https://realbusinessreviews.net" target="blank">
                  <img
                    className="project-image"
                    height="152"
                    width="291px"
                    src={realbusiness}
                    alt=""
                  />
                </a>
                <div className="project-description">
                  This is a web application that facilitates review of
                  businesses.
                </div>
                <div className="buttons-wrap">
                  <a
                    className="repo-link"
                    href="https://github.com/Lambda-School-Labs/CS10-business-review"
                    target="blank"
                  >
                    <button>CODE</button>
                  </a>
                  <a href="https://realbusinessreviews.net" target="blank">
                    <button>DEMO</button>
                  </a>
                </div>
              </div>

              <div className="current-affairs-wrap">
                <a href="https://currentaffairs.netlify.com" target="blank">
                  <img className="project-image" src={currentaffairs} alt="" />
                </a>
                <div className="project-description">
                  Current Affairs allows users to search and view trending news
                  by countries.
                  <br />
                </div>
                <div className="buttons-wrap">
                  <a
                    className="repo-link"
                    href="https://github.com/AquilaVirtual/current-affairs"
                    target="blank"
                  >
                    <button>CODE</button>
                  </a>
                  <a href="https://currentaffairs.netlify.com" target="blank">
                    <button>DEMO</button>
                  </a>
                </div>
              </div>
              <div className="notes-wrap">
                <a href="https://lambnotes.netlify.com" target="blank">
                  <img className="project-image" src={notes} alt="" />
                </a>
                <div className="project-description">
                  This is a note taking app that
                  <br /> allows users to make notes.
                </div>
                <div className="buttons-wrap">
                  <a
                    className="repo-link"
                    href="https://github.com/AquilaVirtual/front-end-project-week"
                    target="blank"
                  >
                    <button>CODE</button>
                  </a>
                  <a href="https://lambnotes.netlify.com" target="blank">
                    <button>DEMO</button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section class="footer">
            <strong>© 2018 David Loveday</strong>
            <div class="social-media-footer">
              <ul>
                <li>
                  <a
                    href="https://resume.creddle.io/resume/aodc6tswpqo"
                    target="blank"
                  >
                    <i class="far fa-file" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/david-loveday-110a8a172/"
                    target="blank"
                  >
                    <i class="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/AquilaVirtual" target="blank">
                    <i class="fab fa-github" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fab fa-twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default LandingPage;
