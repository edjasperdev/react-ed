import React from 'react';
import PropTypes from 'prop-types';

const Hero = (props) => {

  const { imageUrl, title, subTitle, buttonText, buttonLink, buttonText2, buttonLink2 } = props;

  return(
    <div className="hero">
      <img src={imageUrl} />
      <h2>{title}</h2>
      <p>{subTitle}</p>
      { buttonText ? <button> <a href={buttonLink}><span>{buttonText}</span> </a></button> : null }
      { buttonText2 ? <button> <a href={buttonLink2}><span>{buttonText2}</span> </a></button> : null }
    </div>
  );
};

Hero.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonText2: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonLink2: PropTypes.string
};




export default Hero;
