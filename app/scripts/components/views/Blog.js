import React, { Component } from 'react';
import Title from '../partials/Title';
import { Row } from 'react-bootstrap';
import BlogItem from '../partials/BlogItem';
const Link = require('react-router-dom').Link;

class Blog extends Component {
 

  render(){
    const blogCollection = [ 'item1', 'item2', 'item3', 'item4', 'item5'];
    return(
      <div className="container grid-blog-content">
        <Title 
          title="Blog" 
          subTitle="Learning by Edward Leon Jasper" 
          />
         <Row >
            <div className="grid-row gallery">
              { blogCollection.map((item, i) =>{
                  return <BlogItem className={'filter_img'} title={ item } key={i} blogId={i} />;
                })
              }
            </div>
         </Row>
         <div className="text-xs-right">
            <Link className="btn btn-primary" to="/blog/new">Add Blog Project</Link>
          </div>
      </div>
    );
  }
};

export default Blog;