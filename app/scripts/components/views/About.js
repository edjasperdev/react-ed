import React from 'react';
import { Col } from 'react-bootstrap';
import Instafeed from 'instafeed.js';
import Title from '../partials/Title';
import Hero from '../partials/Hero';



const About = () => {
    return(
      <div className="about-page">
        <Hero title="About" subTitle="So much to do, nothing but time" buttonLink="" buttonText="Get Resume" imageUrl="/app/images/about/portPic.png"/>
        <div className="container about-content">
          <Title title="Edward Leon Jasper" subTitle="JavaScript Engineer| Blogger | Designer" />
          <div className="about-icons">
              <a href="https://www.instagram.com/welldeveloped/" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
              <a href="https://twitter.com/__wellDeveloped" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
           <div className="about-description">
              <h2>About me</h2>
              <p> Call me Ed. I'm a former fitness professional turned web developer. 
                  I have a passion for changing how people interact with the web. 
                  Over the past 3 years, I have helped both global brands and start ups increase conversions through A/B testing, 
                  tagging and performance optimization. </p>
           </div>
        </div>
      </div>
    );
};

export default About;