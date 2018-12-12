import React, {Component} from 'react';


const LandingPage = () => {
   return (
       <div className="main-container">
       <nav>
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/about">About</a></li>
      <li><a routerLink="/">Career</a></li>
      <li><a routerLink="/">Skills</a></li>
      <li><a routerLink="/">Projects</a></li>
    </ul>
  </nav>
  <img className="top-image" width="100%" src="./assets/img/mern.jpg" />
  <section className="section-wrap-bio">
    <div className="container">
      <div className="about-me-wrap">
        <div className="about-inner-wrap">
          <div className="navy-line"></div>
          <div className="about-me">About Me</div>
        </div>
      </div>
      <div className="temp">
        <div className="fontawesome-left">
          <i className="fab fa-react"></i> <i className="fab fa-node"></i>
        </div>
        <img
          className="profile-image"
          width="11%"
          height="144"
          src="./assets/img/dave.jpg"
        />
        <div className="fontawesome-right">
          <i className="fab fa-node"></i><i className="fab fa-react"></i>
        </div>
      </div>
      <div className="my-name">
        <span >David</span> Loveday
      </div>
      <div className="social-media">
        <ul>
          <li>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/ad.loveday?ref=bookmarks"
              target="blank"
              ><i className="fab fa-facebook-f"></i
            ></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/david-loveday-110a8a172/"
              target="blank"
              ><i className="fab fa-linkedin-in"></i
            ></a>
          </li>
          <li>
            <a href="https://github.com/AquilaVirtual" target="blank"
              ><i className="fab fa-github"></i
            ></a>
          </li>
        </ul>
      </div>
      <div className="bio">
        <p>
          The idea that one can use software to build software has been
          fascinating to me.<br />
          From my childhood, I have learned things with a concentration in
          quantitative <br />
          methods, and applying this in software development means an ability to
          tackle<br />
          complex challenges. Writing software, to me, is a materialization of
          logic. <br />Having the knowledge to write software has given me a
          sense of purpose.
        </p>
      </div>
    </div>
  </section>
       </div>
   )
}

export default LandingPage;