import React from "react";
// import facebook from '../assets/icons_assets/facebook.svg'
import foursquare from "../assets/icons_assets/foursquare.svg";
import twitter from "../assets/icons_assets/x.svg";
// import pinterest from '../assets/icons_assets/pinterest.svg'

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer_socialsLinks">
              <div>
                <h3>Links</h3>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Compliances</p>
              </div>
            <div>
              <h3>Socials</h3>
              {/* <img src={facebook} alt="Instagram" className="iconSocialMedia"/> */}
              <img
                src={foursquare}
                alt="Facebook"
                className="iconSocialMedia"
              />
              <img src={twitter} alt="Twitter" className="iconSocialMedia" />
              {/* <img src={pinterest} alt="Pinterest" className="iconSocialMedia"/> */}
            </div>
            <div>
              <h3>Contact Us</h3>
              <p>Tel: 54-76-87-09</p>
              <p>info@littlelemon.com</p>
            </div>
          </div>
        <p>&copy; All rights reserved Little Lemon 2023</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
