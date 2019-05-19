import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

import ContactModal from "./ContactModal";

import "../css/LandingPage.css";
import "../css/ContactModal.css";

import dave from "../img/dave.jpg";
import currentaffairs from "../img/currentaffairs.png";
import movieguide from "../img/movieguide.png";
import familylife from "../img/familylife.png";
import reduxImage from "../img/reduxImage.png";
import reactImage from "../img/reactImage.png";
import lessImage from "../img/lessImage.png";
import nodeImage from "../img/nodeImage.png";
import jqueryImage from "../img/jqueryImage.png";
import cplus from "../img/cplus.png";
import htmlImage from "../img/htmlImage.png";
import express from "../img/express.png";
import mongoImage from "../img/mongoImage.png";
import css3 from "../img/css3.png";
import bootstrapImage from "../img/bootstrapImage.png";
import javascriptImage from "../img/javascriptImage.png";
import GitHub from "../img/GitHub.png";
import realbusiness from "../img/realbusiness.png";
import menue from "../img/menu.png";

class LandingPage extends Component {
  state = {
    open: false
  };
  componentDidMount = () => {
    let target;
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
  };

  handleModalToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {    
    const navyFont = {
      color: "#3c6aad"
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
              <NavLink to="/#Home" className="nav-link home-button">
                David Loveday
              </NavLink>
            </li>
            <li>
              <NavLink to="/#About" className="nav-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/#Skills" className="nav-link">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/#Projects" className="nav-link">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/#Contact" onClick={this.handleModalToggle}>
                Contact
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
                <div id="textBox" className="my-name">
                  <span style={navyFont}>David</span> Loveday
                </div>
              </div>
              <div className="bio">
                The idea that one can use software to build software has been
                fascinating to me. From my childhood, I have learned things
                <section id="Skills" />
                with a concentration in quantitative methods, and applying this
                in software development means, an ability to tackle complex
                challenges. Writing software, to me, is a materialization of
                logic. Having the knowledge to write software gives me a sense of
                creativity.
              </div>
            </div>
          </section>

          <section className="section-wrap-skills">
            <div className="navy-line" />
            <div className="skills-header">My Skills</div>
            <span className="skils-images">
              <div className="image-wrap">
              <img
                className="skills-image"
                alt="skills"
                src={javascriptImage}
              />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={htmlImage} />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={css3} />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={jqueryImage} />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={reactImage} />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={reduxImage} />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={nodeImage} />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={lessImage} />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={GitHub} />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={cplus} />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={mongoImage} />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={express} />
              </div>
              <div className="image-wrap">
              <img className="skills-image" alt="skills" src={bootstrapImage} />
              </div>
            </span>
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
              <ContactModal
                open={this.state.open}
                handleModalToggle={this.handleModalToggle}
              />
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
                <a href="https://movieguide.netlify.com/" target="blank">
                  <img className="project-image" src={movieguide} alt="" />
                </a>
                <div className="project-description">
                  This is an app that allows a user to search
                  for movies.
                </div>
                <div className="buttons-wrap">
                  <a
                    className="repo-link"
                    href="https://github.com/AquilaVirtual/ultimate-moviegoers-guide"
                    target="blank"
                  >
                    <button>CODE</button>
                  </a>
                  <a href="https://movieguide.netlify.com/" target="blank">
                    <button>DEMO</button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section className="footer">
            <strong style={{ color: "lightGrey" }}>© 2019 David Loveday</strong>
            <div className="social-media-footer">
              <ul>
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
                  <a href="https://twitter.com/">
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
