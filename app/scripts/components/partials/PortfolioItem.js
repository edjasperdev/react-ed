import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const PortFolioItem = ( props ) => { 
  const { title, className } = props;
  return (
    <Col className={`${ className } portfolio-item filter_img`} xs={12} sm={6} md={4} lg={4}>
      <div className="media">
          <img className="media__image" src="http://placehold.it/1280x853" alt=""/>
          <div className="media__body">
            <i className="fa fa-link" aria-hidden="true"></i>
            <h2>{ title }</h2>
            <p>Design, Creative</p>
          </div>
      </div>
    </Col>
  );
};

export default PortFolioItem;
