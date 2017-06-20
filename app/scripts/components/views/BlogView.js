import React from 'react';
import Title from '../partials/Title';
import { Row, Col } from 'react-bootstrap';


const BlogView = (props) => {
  return(
    <div className="container single-blog-content">
      <Title 
        title="Blog Title" 
        subTitle="Blog subtitle" 
      />
       <Row className="intro">
        <Col xs={12} sm={8} md={8} lg={8} >
          <img src="http://placehold.it/1280x853" alt="" />
         </Col> 
        
       </Row>
       <Row>
         <Col lg={12} className="single-blog">
           <article className="sidebar-article single-blog-article">
              
              <h2>Donec vitae pulvinar.</h2>
              <h3>by : <strong><a href="#">John Doe</a></strong> &nbsp; posted : <strong>23 February, 2017</strong> &nbsp; in : <strong><a href="#">Branding</a></strong></h3>
              <p>Nunc neque nibh, mattis a sodales in, viverra id neque. Aenean euismod quis nulla eget
                       sodales. Curabitur suscipit nisi eu urna finibus dictum et nec purus.
                       Donec nec mollis elit, vel tristique ipsum. Morbi non rhoncus urna,
                       sit amet mollis urna. Sed sagittis a ex sit amet accumsan.</p>
              <p>Nunc neque nibh, mattis a sodales in, viverra id neque. Aenean euismod quis nulla eget
                       sodales. Curabitur suscipit nisi eu urna finibus dictum et nec purus.
                       Donec nec mollis elit, vel tristique ipsum. Morbi non rhoncus urna,
                       sit amet mollis urna. Sed sagittis a ex sit amet accumsan.</p>
              <h4>Donec non nunc quam. Sed suscipit sapien ac laoreet sagittis. Ut ut purus purus.
                  Nullam eu pharetra ligula, at euismod nisi.</h4>
              <p>Nunc neque nibh, mattis a sodales in, viverra id neque. Aenean euismod quis nulla eget
                       sodales. Curabitur suscipit nisi eu urna finibus dictum et nec purus.
                       Donec nec mollis elit, vel tristique ipsum. Morbi non rhoncus urna,
                       sit amet mollis urna. Sed sagittis a ex sit amet accumsan.</p>
           </article>
           <div className="single-blog-comment">
             
           </div>
           
        </Col>
       </Row>
    </div>
  );
};

export default BlogView;

