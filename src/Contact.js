import React from "react";
import "./Contact.css";
import Header from "./Header";
import ContactForm from "./ContactForm";
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

function Contact() {
  return (
    <div className="contact">
      <Header />
      <div className="contact__container">
        <div className="contact__container__left">
          <ContactForm />
        </div>
        <div className="contact__container__right">
          <h2>Contact</h2>
          <h2>Information</h2>
          <div className="contact__container__right__address">
            <p>21 Uphill Road</p>
            <p>SE02 3AK</p>
            <p>London</p>
          </div>
          <div className="contact__container__right__phone">
            <p>Call Us: +44 7 123 456 78</p>
          </div>
          <div className="contact__container__right__opening">
            <p>We are open from Monday - Friday</p>
            <p>08:00am - 05:00pm</p>
          </div>
          <h2>Follow Us</h2>
          <div className="contact__container__right__social">
            <FacebookIcon/>
            <TwitterIcon/>
            <LinkedInIcon/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
