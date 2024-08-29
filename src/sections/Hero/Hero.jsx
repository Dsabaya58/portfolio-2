import React from 'react';
import './Hero.css';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';  // For X (formerly Twitter)
import HereImg from '../../assets/man.jpg';
import ThemeIcon from '../../assets/themeicon.png';
import CV from '../../assets/David_Damian _CV.pdf'

function Hero() {
  return (
    <section id='hero'>
      <div>
        <img className='img' src={HereImg} alt="" />
        <img className='themeicon' src={ThemeIcon} alt="" />
      </div>
      <div className='info'>
        <h1>Damian <br />David</h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </a>
          <a href="https://github.com/Dsabaya58/portfolio-2" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </span>
        <p className='paragraph'>
            I am a dedicated and skilled Software Developer and Data Analyst with a solid background in economics. My transition from economics to software development was driven by a passion for technology and data-drivendecision-making.
        </p>
        <a href={CV} >
            <button className='resume'>Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
