import React from 'react';
import Hero from '../partials/Hero';
import { Row, Col } from 'react-bootstrap';


const Contact = () => {
    return (
      <div className="contact-page">
        <Hero 
          title="FEEL FREE TO GET IN TOUCH WITH ME!" 
          subTitle="Please let me know if you have any questions or need additional information."
          buttonText="Contact Me" 
          buttonLink="window.location.href='#contact-target"
          imageUrl="http://placehold.it/1280x853"
          />
        <div className="container contact-content">
         <Row id="contact-target">
            <Col xs={12} sm={8} md={8} lg={8} className="sidebar-left">
               <div className="form-input">
                  <h2>Get in touch!</h2>
                  <form className="comment-form contact-form">
                     <Row >
                        <Col xs={12} sm={6} md={6} lg={6}>
                           <input name="name" 
                              type="text" 
                              value="Name" 
                              onblur="if (this.value=='') this.value = 'Name'"  
                              onfocus="if (this.value=='Name') this.value = ''" />
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={6} id="email-input">
                           <input name="email" 
                              type="email" 
                              value="Email"
                              onblur="if (this.value=='') this.value = 'Email'" 
                              onfocus="if (this.value=='Email') this.value = ''"/>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12} id="subject-input">
                           <input name="name" 
                              type="text" 
                              value="Subject" 
                              onblur="if (this.value=='') this.value = 'Subject'"  
                              onfocus="if (this.value=='Subject') this.value = ''"/>
                        </Col>
                        <Col xs={12} sm={12} md={12} lg={12}>
                           <textarea name = "message" 
                              onblur="if (this.value=='') this.value = 'Message (Required)'" 
                              onfocus="if (this.value=='Message (Required)') this.value = ''"> Message (Required)</textarea>
                        </Col>
                        <Col xs={12} sm={6} md={5} lg={5} >
                           <input id="send" type = "submit" value = "Send Message" />
                        </Col>
                     </Row>
                  </form>
               </div>
            </Col>
            <Col xs={12} sm={4} md={4} lg={4} className="contact-right">
               <h2>Contact Info</h2>
               <section className="contact-me">
                  <h2>Address</h2>
                  <hr />
                  <p> Manhattan, NY </p>
               </section>
               <section className="contact-me">
                  <h2>Email</h2>
                  <hr />
                  <p>ed@edwardleonjasper.com</p>
               </section>
            </Col>
         </Row>
      </div> 
    </div>
    );
};

export default Contact;