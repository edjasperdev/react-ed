import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
const Link = require('react-router-dom').Link;

const BlogItem = ({ title, className, blogId }) => { 
  return (
    <div>
      <Col lg={6} md={6} sm={6} xs={12} className={ className }>
         <Link to={`/blog/${blogId}`}><img src="http://placehold.it/1280x853" alt=""/></Link>
         <article className="sidebar-article grid-blog-article">
            <Link to={`/blog/${blogId}`}><h2>{ title }</h2></Link>
            <h3>by : <strong> John Doe </strong> &nbsp; posted : <strong>23 February, 2017</strong> &nbsp; in : <strong>Branding</strong></h3>
            <p>Nunc neque nibh, mattis a sodales in, viverra id neque. Aenean euismod quis nulla eget<br/>
               sodales. Curabitur suscipit nisi eu urna finibus dictum et nec purus.<br/>
               Donec nec mollis elit, vel tristique ipsum. Morbi non rhoncus urna,<br/>
               sit amet mollis urna. Sed sagittis a ex sit amet accumsan.</p>
            <Link to={`/blog/${blogId}`}><button>  Read More </button></Link>
         </article>
      </Col>
    </div>
  );
};

export default BlogItem;
