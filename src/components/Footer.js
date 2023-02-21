import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div>
                <LinkedInIcon />
                <TwitterIcon />
            </div>
            <p> &copy; 2022 mathenge.com</p>
        </div>
    )
}

export default Footer;