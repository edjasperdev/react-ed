import React from 'react';
import Title from '../partials/Title';
import Hero from '../partials/Hero';

class Home extends React.Component{

  render(){

    return(
      <div className='home-page'>
        <Hero title="Edward Leon Jasper" subTitle="JavaScript Engineer| Blogger | Designer" buttonText2="View Work" buttonLink2="/portfolio" buttonText="Get In Touch" buttonLink="/contact" imageUrl="app/images/home/homeImage.jpg" />
      </div>
    );
  }
} 

export default Home