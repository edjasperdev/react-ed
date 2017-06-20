import React from 'react';
import PropTypes from 'prop-types';


const Title = (props) => {
  return(
      <div className="title">
          <h2>{props.title}</h2>
          <p>{props.subTitle}</p>
      </div>
  );
};
Title.propTypes={
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default Title;
