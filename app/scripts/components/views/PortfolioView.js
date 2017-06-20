import React, { Component } from 'react';
import Title from '../partials/Title';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import { fetchPost, deletePost } from '../../actions';

class PortfolioView extends Component { 

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const { id } = this.props.match.params;
    console.log(this.props)
    this.props.deletePost(id, () => {
      this.props.history.push('/portfolio');
    });
  }

  render() {
    const { post } = this.props;
    if(!post){
      return <div> Loading... </div>
    }

    return (
      <div className="container single-portfolio-content">
        <Title 
          title={post.title} 
          subTitle="A collection of work developed and deployed by Edward Leon Jasper" 
          />
           <Row>
              <div className="grid-row gallery filter_img">
                <Col xs={12} sm={6} md={4} lg={4}>
                    <img src="http://placehold.it/1280x853" alt=""/>
                 </Col>
                 <Col xs={12} sm={6} md={4} lg={4}>
                    <img src="http://placehold.it/1280x853" alt=""/>
                 </Col>
                 <Col xs={12} sm={6} md={4} lg={4}>
                    <img src="http://placehold.it/1280x853" alt=""/>
                 </Col>
              </div>
           </Row>
           <Row className="portfolio-section">
              <Col xs={12} sm={9} md={9} lg={9} className="portfolio-section-text">
                 <p>{ this.title }</p>
              </Col>
              <Col xs={12} sm={3} md={3} lg={3} className="portfolio-section-sidebar">
                

                 <div className="single-portfolio-share">
                    <h2>SHARE VIA </h2>
                    <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                    <a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a>
                    <button onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
                 </div>
              </Col>
           </Row>
        </div>
    );
  }
};
function mapStateToProps({ posts }, ownProps){
  return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost } )(PortfolioView);
