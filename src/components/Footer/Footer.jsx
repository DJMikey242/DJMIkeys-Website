import React from 'react';
import './Footer.css';
import ReactGA from 'react-ga';

function Footer() {
  return (
    <>
      {/* Socials */}
      <div className="footer__socials">
        <ReactGA.OutboundLink
          eventLabel="Instagram_toSocial"
          to="https://www.instagram.com/djjosehernandez/"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fa fa-instagram"
          aria-label="Instagram"
        >
          {' '}
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="Twitch_toSocial"
          to="https://www.twitch.tv/djjosehernandez_"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fa fa-twitch"
          aria-label="Twitch"
        >
          {' '}
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="Soundcloud_toSocial"
          to="https://soundcloud.com/djjosehernandez"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fa fa-soundcloud"
          aria-label="Soundcloud"
        >
          {' '}
        </ReactGA.OutboundLink>
        <ReactGA.OutboundLink
          eventLabel="Mixcloud_toSocial"
          to="https://www.mixcloud.com/DjJoseHernandez/"
          target="_blank"
          rel="noopener noreferrer preload"
          className="fa fa-mixcloud"
          aria-label="Mixcloud"
        >
          {' '}
        </ReactGA.OutboundLink>
      </div>
      <footer id="footer">
        {/* < !--Copyright -- > */}
        <div className="footer-copyright text-center py-3">
          © 2020 DJ Jose Hernandez
        </div>
        {/* <!--Copyright --> */}
      </footer>
      {/* // < !--Footer --> */}
    </>
  );
}

export default Footer;
