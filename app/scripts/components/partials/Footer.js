import React from 'react';
import { Col } from 'react-bootstrap';

const Footer = () =>{
  return(
    <footer>
      <div className="container">
        <Col lg={12} md={12} sm={12} xs={12} className="social_footer">
        <a href="https://www.instagram.com/welldeveloped/" target="_blank">
          <section><i className="fa fa-instagram" aria-hidden="true"></i></section>
        </a>
        <a href="https://twitter.com/__wellDeveloped" target="_blank">
          <section><i className="fa fa-twitter" aria-hidden="true"></i></section>
        </a>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12} className="copyrights">
          <p>Copyright &copy; 2017. <strong>Edward Leon Jasper</strong></p>
        </Col>
      </div>
    </footer>
  );
};

export default Footer