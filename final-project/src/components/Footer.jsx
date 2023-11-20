import React from "react";
// import facebook from '../assets/icons_assets/facebook.svg'
import foursquare from '../assets/icons_assets/foursquare.svg'
import twitter from '../assets/icons_assets/x.svg'
// import pinterest from '../assets/icons_assets/pinterest.svg'

function Footer() {
    return(
        <>
        <footer>
            <div>
            <h3>Socials</h3>
            <div>
                {/* <img src={facebook} alt="Instagram" className="iconSocialMedia"/> */}
                <img src={foursquare} alt="Facebook" className="iconSocialMedia"/>
                <img src={twitter} alt="Twitter" className="iconSocialMedia"/>
                {/* <img src={pinterest} alt="Pinterest" className="iconSocialMedia"/> */}
            </div>
            </div>
            <p>&copy; Little Lemon 2023</p>
            <div>
                <h3>Contact</h3>
                <p>54-76-87-09</p>
                <p>info@littlelemon.com</p>
            </div>
        </footer>
        </>
    )
}

export default Footer