import React from 'react';
import './Projects.css';
import Pic1 from '../../assets/Logo.png';
import Pic2 from '../../assets/img-1.jpg';
import Pic3 from '../../assets/pic.jpg';
import Pic4 from '../../assets/D&D.png';
import Pic5 from '../../assets/img.jpg';
import Pic6 from '../../assets/img.jpg';

function Projects() {
  return (
    <section id='projects'>
      <h1 className='title'>Projects</h1>
      <div className='projects-grid'>
        {/* Project 1 */}
        <div className='card-container'>
          <a href="https://github.com/Dsabaya58/portfolio-2">
            <img src={Pic1} alt="Dukasmart" />
          </a>
          <h3>Dukasmart</h3>
          <p>Online shopping store</p>
        </div>

        {/* Project 2 */}
        <div className='card-container'>
          <a href="https://github.com/Dsabaya58/finance-app">
            <img src={Pic2} alt="Finance App" />
          </a>
          <h3>Finance Tracker</h3>
          <p>An app for tracking personal expenses and budgeting.</p>
        </div>

        {/* Project 3 */}
        <div className='card-container'>
          <a href="https://github.com/Dsabaya58/flashcard-app">
            <img src={Pic3} alt="Flashcard App" />
          </a>
          <h3>Flashcard Learning</h3>
          <p>An interactive flashcard app for learning new concepts.</p>
        </div>

        {/* Project 4 */}
        <div className='card-container'>
          <a href="https://github.com/Dsabaya58/angular-dashboard">
            <img src={Pic4} alt="Dashboard App" />
          </a>
          <h3>Admin Dashboard</h3>
          <p>A customizable admin dashboard built with Angular.</p>
        </div>

        {/* Project 5 */}
        <div className='card-container'>
          <a href="https://github.com/Dsabaya58/ecommerce-app">
            <img src={Pic5} alt="E-commerce App" />
          </a>
          <h3>E-commerce Platform</h3>
          <p>A complete e-commerce solution with product listings and checkout.</p>
        </div>

        {/* Project 6 */}
        <div className='card-container'>
          <a href="https://github.com/Dsabaya58/weather-app">
            <img src={Pic6} alt="Weather App" />
          </a>
          <h3>Weather Forecast</h3>
          <p>A weather app providing real-time weather updates and forecasts.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
