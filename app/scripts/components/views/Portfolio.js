import React, { Component } from 'react';
import Title from '../partials/Title';
import PortfolioItem from '../partials/PortfolioItem';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions';
import _ from 'lodash';

const Link = require('react-router-dom').Link;

class Portfolio extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderItems() {
   return _.map(this.props.posts, post =>{
      return(
         <Link to={`/portfolio/${post.id}`} key={ post.id } >
              <PortfolioItem className={'grid-item'} title= { post.title} key={ post.id } />
          </Link>
      );
   });
  }

    render() {
      return (
        <div className="portfolio-page">
          
          <Title 
            title="Portfolio" 
            subTitle="A collection of work developed and deployed by Edward Leon Jasper" 
          />
           <Row>
                 <div className="grid-row gallery">
                  { this.renderItems() }
                 </div>
           </Row>
           <div className="text-xs-right">
            <Link className="btn btn-primary" to="/portfolio/new">Add Portolio Project</Link>
          </div>
        </div>
      );
    }
}
function mapStatetoProps(state){
  return{ posts: state.posts }

}

export default connect(mapStatetoProps, { fetchPosts })(Portfolio);
