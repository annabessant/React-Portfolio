// includes contact information: Email address, Link to a PDF version of your CV
// Link to your GitHub profile, Link to your LinkedIn page

import React from 'react';
////////////// import { Link, Route, Routes } from 'react-router-dom';
////////////// import Learn from './Learn';
// import '../App.css';
// import Footer from './/Footer';
// import Create from '../ContactForm';


function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Integer.
      </p>
      <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default Contact;
