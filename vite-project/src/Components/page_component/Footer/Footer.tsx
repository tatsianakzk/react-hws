import React from 'react';
import './Footer.css';
import Sidebar from '../../reusable_components/Sidebar/Sidebar';
import logo from '../../../assets/icons/logo.png';
import insta from '../../../assets/icons/insta.png';
import twitter from '../../../assets/icons/twitter.png';
import youtube from '../../../assets/icons/youtube.png';

type Link = {
    name: string;
    link: string;
};

type SidebarSection = {
    title: string;
    links: Link[];
};

type SocialLink = {
    src: string;
    alt: string;
    link: string;
};

function Footer() {
    const sidebarSections: SidebarSection[] = [
        {
            title: 'COMPANY',
            links: [
                { name: 'Home', link: `https://www.google.com/search?q=Home` },
                { name: 'Order', link: `https://www.google.com/search?q=Order` },
                { name: 'FAQ', link: `https://www.google.com/search?q=FAQ` },
                { name: 'Contact', link: `https://www.google.com/search?q=Contact` },
            ],
        },
        {
            title: 'TEMPLATE',
            links: [
                { name: 'Style Guide', link: `https://www.google.com/search?q=Style+Guide` },
                { name: 'Changelog', link: `https://www.google.com/search?q=Changelog` },
                { name: 'License', link: `https://www.google.com/search?q=License` },
                { name: 'Webflow University', link: `https://www.google.com/search?q=Webflow+University` },
            ],
        },
        {
            title: 'FLOWBASE',
            links: [
                { name: 'More Cloneables', link: `https://www.google.com/search?q=More+Cloneables` },
            ],
        },
    ];

    const socialLinks: SocialLink[] = [
        { src: insta, alt: 'Instagram Logo', link: 'https://www.instagram.com' },
        { src: twitter, alt: 'Twitter Logo', link: 'https://www.twitter.com' },
        { src: youtube, alt: 'YouTube Logo', link: 'https://www.youtube.com' },
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
                {sidebarSections.map((section) => (
                    <Sidebar key={section.title} title={section.title} items={section.links} />
                ))}
            </div>

            <div className="footer-bottom">
                <p>
                    Built by{' '}
                    <a href="https://flowbase.co" className="footer-bottom-link">
                        Flowbase
                    </a>{' '}
                    · Powered by{' '}
                    <a href="https://webflow.com" className="footer-bottom-link">
                        Webflow
                    </a>
                </p>
                <div className="footer-socials">
                    {socialLinks.map((social) => (
                        <a
                            key={social.alt}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={social.src} alt={social.alt} className="footer-social-link" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}

export default Footer;