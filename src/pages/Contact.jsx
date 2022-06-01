import React from 'react';
import Navigation from '../component/Navigation';


function Contact() {
  return (
    <div className='contact'>
      <Navigation /> 
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li><i className='fas fa-map-marker-alt'><span>Cotonou</span></i></li>

            <li><i className='fas fa-mobile-alt'><span>+ 229 53037832</span></i></li>

            <li><i className='far fa-envelope'><span>adinsiabdias@gmail.com</span></i></li>
          </ul>
        </div>
        <div className="socialNetwork">
          <ul>

            <a href='https' target='_blank' rel='noopener noreferrer'>
              <h4>Linkedin</h4>
              <i className="fab fa-linkedin"></i>
            </a>

            <a href='https' target='_blank' rel='noopener noreferrer'>
              <h4>Github</h4>
              <i className="fab fa-github"></i>
            </a>

            <a href='https' target='_blank' rel='noopener noreferrer'>
              <h4>Twitter</h4>
              <i className="fab fa-twitter"></i>
            </a>

          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Contact;
