import React from 'react';
import './Footer.css';
import Sidebar from '../../reusable_components/Sidebar/Sidebar';
import logo from '../../../assets/icons/logo.png';
import insta from '../../../assets/icons/insta.png';
import twitter from '../../../assets/icons/twitter.png';
import youtube from '../../../assets/icons/youtube.png';

function Footer() {
    const companyLinks = [
        { name: 'Home', link: `https://www.google.com/search?q=Home` },
        { name: 'Order', link: `https://www.google.com/search?q=Order` },
        { name: 'FAQ', link: `https://www.google.com/search?q=FAQ` },
        { name: 'Contact', link: `https://www.google.com/search?q=Contact` },
    ];

    const templateLinks = [
        { name: 'Style Guide', link: `https://www.google.com/search?q=Style+Guide` },
        { name: 'Changelog', link: `https://www.google.com/search?q=Changelog` },
        { name: 'License', link: `https://www.google.com/search?q=License` },
        { name: 'Webflow University', link: `https://www.google.com/search?q=Webflow+University` },
    ];

    const flowbaseLinks = [
        { name: 'More Cloneables', link: `https://www.google.com/search?q=More+Cloneables` },
    ];

    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-info">
                    <img src={logo} alt="Logo" className="footer-logo" />
                    <p className="footer-description">
                        Takeaway & Delivery template for small - medium businesses.
                    </p>
                </div>

                <Sidebar title="COMPANY" items={companyLinks} />
                <Sidebar title="TEMPLATE" items={templateLinks} />
                <Sidebar title="FLOWBASE" items={flowbaseLinks} />
            </div>

            <div className="footer-bottom">
                <p>
                    Built by <a href="https://flowbase.co" className="footer-bottom-link">Flowbase</a> · Powered by <a href="https://webflow.com" className="footer-bottom-link">Webflow</a>
                </p>
                <div className="footer-socials">
                    <div className="footer-socials">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={insta} alt="Instagram Logo" className="footer-social-link" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src={twitter} alt="Twitter Logo" className="footer-social-link" />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                            <img src={youtube} alt="YouTube Logo" className="footer-social-link" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;