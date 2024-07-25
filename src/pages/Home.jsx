import React from "react";
import { Link } from "react-router-dom";
import note from '../public/img-hero.png';
import img from '../public/Knowledge-pana.png'


export default function Home() {


    
  return (
    <>
      <div className="container-home">
        <h1 className="Phrase" data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="1500">................................</h1>
        <h1 className="under-Phrase"  data-aos="fade-up"
     data-aos-anchor-placement="top-center"
     data-aos-duration="1500"
     data-aos-delay="300">.........................................................................................................................</h1>
        <Link className="pricing-btn" to="/pricing">Get Started &#128218;</Link>
        <img className="note" src={note} alt="Note" />
      </div>
      <section className="about" >
		<div className="container-imgages"  data-aos="fade-right" data-aos-duration="1500" >
			<img src={img} alt="" className="about1" />
		</div>
		<div className="contain-text" data-aos="fade-left" data-aos-duration="1500" >
			<h1>....... <span>........</span></h1>
			<h5><span>..................................</span> site</h5>
			<p>
            .........................................................................................................................................................................................................................................................</p>
		</div>
	</section>
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>Explore our diverse courses designed to empower learners and unlock their full potential.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: info@taalim.com</p>
          <p>Phone: +1 123 456 7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TAALIM. All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}
