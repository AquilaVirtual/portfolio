import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

import "../css/LandingPage.css";

import dave from "../img/dave.jpg";
import currentaffairs from "../img/currentaffairs.png";
import notes from "../img/note.png";
import familylife from "../img/familylife.png";
import skill from "../img/skill.png";
import realbusiness from "../img/realbusiness.png";
import menue from "../img/menu.png";

class LandingPage extends Component {
  componentDidMount = () => {
    let target
    $(document).ready(function() {
      $("a.nav-link").click(function() {
        target = $(this.hash);
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
    console.log("Some!!!!!!!!!!!!!! item this", target) 
  };
  render() {
    const bioStyle = {
      fontSize: "18px"
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
          <h4>MENU</h4>
        </div>
        <nav id="nav">
          <ul className="nav nav-pills">
            <li>
              <NavLink to="/#Home" className="nav-link home-button" >
                David Loveday
              </NavLink >
            </li>
            <li>
              <NavLink to="/#About" className="nav-link" >
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/#Career" className="nav-link">
                Career
              </NavLink>
            </li>
            <li>
              <NavLink to="/#Skills" className="nav-link" >
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/#Projects" className="nav-link" >
                Projects
              </NavLink>
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
                  <i className="fab fa-angular" />
                  <i className="fab fa-js-square" />
                </div>
              </div>
              <div className="name-and-social-media">
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
                      <i className="far fa-file" />
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
              </div>
              <div className="bio">
                <p style={bioStyle}>
                  The idea that one can use software to build software has been
                  fascinating to me. From my childhood, I have learned things
                  with a concentration in quantitative
                  <section id="Career" />
                  methods, and applying this in software development means an
                  ability to tackle complex challenges. Writing software, to me,
                  is a materialization of logic. Having the knowledge to write
                  software has given me a sense of purpose.
                </p>
              </div>
            </div>
          </section>
          <section className="section-wrap-career">
            <div className="container">
              <div className="career-header">
              <div className="navy-line" />
              <div className="my-career">My Career</div>
              </div>
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
                    <span style={bioStyle}>
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
                      <span style={navyFont}>Web Development Track</span>
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
                    <span style={bioStyle}>
                      Relocated to U.S. and was waiting on work permit.
                      <br />
                      Contract construction and painting jobs.
                    </span>
                  </p>
                  <span className="date-line">
                    <span> Jan. 2009 to Mar. 2018</span> <br />
                    <small>
                      <span style={navyFont}>Independent Contractor</span>
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
                    <span style={bioStyle}>
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
                <div className="icon-wrapper">
                  <i className="fa fa-plus-square" />
                </div>
                <div className="left">
                  <span style={darkGreyFont}>
                    <h2>Powernet</h2>
                    <br />
                  </span>
                  <p>
                    <section id="Skills" />
                    <span style={bioStyle}>
                      Designed and built PC games Using C++, OpenGL, and
                      Blender.
                    </span>
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
          <section className="section-wrap-skills">
            <div className="navy-line" />
            <div className="skills-header">My Skills</div>
            <img className="skills-image" alt="skills" src={skill} />
            <section id="Projects" />
          </section>

          <section className="section-wrap-projects">
            <div className="projects-header-wrap">
              <div className="navy-line" />
              <div className="projects-header">My Projects</div>
            </div>
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
                <a href="https://familylife.netlify.com" target="blank">
                  <img
                    className="project-image"
                    height="152"
                    width="291px"
                    src={familylife}
                    alt=""
                  />
                </a>
                <div className="project-description">
                  Family Life is a web app that helps families organize their
                  events.
                  <br />
                </div>
                <div className="buttons-wrap">
                  <a
                    className="repo-link"
                    href="https://github.com/AquilaVirtual/family_life_organizer"
                    target="blank"
                  >
                    <button>CODE</button>
                  </a>
                  <a href="https://familylife.netlify.com" target="blank">
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
          <section className="footer">
            <strong>© 2019 David Loveday</strong>
            <div className="social-media-footer">
              <ul>
                <li>
                  <a
                    href="https://resume.creddle.io/resume/aodc6tswpqo"
                    target="blank"
                  >
                    <i className="far fa-file" />
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
          </section>
        </div>
      </div>
    );
  }
}

export default LandingPage;
