import React, { Component } from "react";
import dave from '../img/dave.jpg'
import currentaffairs from '../img/currentaffairs.png'
import notes from '../img/notes.png'
import skill from '../img/skill.png'
import realbusiness from '../img/realbusiness.png'

const LandingPage = () => {
  return (
    <div className="main-container">
      <nav>
        <ul>
          <li>
            <a routerLink="/">Home</a>
          </li>
          <li>
            <a routerLink="/about">About</a>
          </li>
          <li>
            <a routerLink="/">Career</a>
          </li>
          <li>
            <a routerLink="/">Skills</a>
          </li>
          <li>
            <a routerLink="/">Projects</a>
          </li>
        </ul>
      </nav>    
      <section className="section-wrap-bio">
        <div className="container">
          <div className="about-me-wrap">
            <div className="about-inner-wrap">
              <div className="navy-line" />
              <div className="about-me">About Me</div>
            </div>
          </div>
          <div className="temp">
            <div className="fontawesome-left">
              <i className="fab fa-react" /> <i className="fab fa-node" />
            </div>
            <img
              className="profile-image"
              width="11%"
              height="144"
              src={dave}
            />
            <div className="fontawesome-right">
              <i className="fab fa-node" />
              <i className="fab fa-react" />
            </div>
          </div>
          <div className="my-name">
            <span>David</span> Loveday
          </div>
          <div className="social-media">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/ad.loveday?ref=bookmarks"
                  target="blank"
                >
                  <i className="fab fa-facebook-f" />
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
            </ul>
          </div>
          <div className="bio">
            <p>
              The idea that one can use software to build software has been
              fascinating to me.
              <br />
              From my childhood, I have learned things with a concentration in
              quantitative <br />
              methods, and applying this in software development means an
              ability to tackle
              <br />
              complex challenges. Writing software, to me, is a materialization
              of logic. <br />
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
              <span>
                <h2>Lambda School</h2>
                <br />
              </span>
              <p>
                <span>
                  Designed and developed full-stack applications utilizing MERN
                  stack technology. Optimized user authentication by applying
                  JWT. Hands-on experience with unit testing. Implemented
                  payment system using Stripe API. Utilized Agile software
                  development methodology and Git workflows on every project.
                </span>
              </p>
              <span className="date-line">
                <span> Mar. 2018 to Oct. 2018</span> <br />
                <small>
                  <span>Web Developer</span>
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
              <span>
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
                  <span>Contractor</span>
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
              <span>
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
                  <span>Commercial Diver</span>
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
              <span>
                <h2>Powernet</h2>
                <br />
              </span>
              <p>
                <span>
                  Designed and built PC games Using C++, OpenGL, and Blender.
                </span>
              </p>
              <span className="date-line">
                <span> Feb. 2004 to Apr. 2006</span> <br />
                <small>
                  <span>Game Developer</span>
                </small>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="section-wrap-skills">
    <div className="navy-line"></div>
    <div className="skills-header">My Skills</div>
    <img className="skills" alt="skills" src={skill} />    
  </section>
  <section className="section-wrap-projects">
    <div className="navy-line"></div>
    <div className="projects-header">My Projects</div>
    <div className="projects-wrap">
      <div className="business-wrap">
        <a
          className="domain-link"
          href="https://realbusinessreviews.net"
          target="blank"
          ><img src={realbusiness}
        /></a>
        <div className="projects-repo">
          This is a web application that<br/>
          facilitates review of businesses.<a
            className="repo-link"
            href="https://github.com/Lambda-School-Labs/CS10-business-review"
            target="blank"
            ><i className="fas fa-link"></i></a>
        </div>
      </div>
      <div className="current-affairs-wrap">
        <a
          className="domain-link"
          href="https://currentaffairs.netlify.com"
          target="blank"
          ><img src={currentaffairs}
        /></a>
        <div className="projects-repo">
          Current Affairs allows users to search<br/> and view trending news by countries.<a
            className="repo-link"
            href="https://github.com/AquilaVirtual/current-affairs"
            target="blank"
            ><i className="fas fa-link"></i></a>
        </div>
      </div>
      <div className="notes-wrap">
        <a
          className="domain-link"
          href="https://lambnotes.netlify.com"
          target="blank"
          ><img src={notes}
        /></a>
        <div className="projects-repo">
          This is a note taking app that<br/> allows users to make notes.<a
            className="repo-link"
            href="https://github.com/AquilaVirtual/front-end-project-week"
            target="blank"
            ><i className="fas fa-link"></i></a>
        </div>
      </div>
    </div>    
  </section>
  <section class="footer">
    <strong>© 2018 David Loveday</strong>
    <div class="social-media-footer">
      <ul>
        <li>
          <a href="#"><i class="fab fa-twitter"></i></a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/ad.loveday?ref=bookmarks"
            target="blank"
            ><i class="fab fa-facebook-f"></i
          ></a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/david-loveday-110a8a172/"
            target="blank"
            ><i class="fab fa-linkedin-in"></i
          ></a>
        </li>
        <li>
          <a href="https://github.com/AquilaVirtual" target="blank"
            ><i class="fab fa-github"></i
          ></a>
        </li>
      </ul>
    </div>
  </section>    
    </div>
  );
};

export default LandingPage;
