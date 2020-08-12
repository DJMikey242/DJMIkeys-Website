import React from 'react';
import './Footer.css';
import ReactGA from 'react-ga';

function Footer() {
  return (
    <>
      {/* Socials */}
      <div className="footer__socials">
        <ReactGA.OutboundLink
          eventLabel="Ig"
          to="https://www.instagram.com/djjosehernandez/"
          target="_blank"
          // href="https://www.instagram.com/djjosehernandez/"
          // target="_blank"
          rel="noopener noreferrer"
          class="fa fa-instagram"
        >
          {' '}
        </ReactGA.OutboundLink>
        <a
          href="https://www.twitch.tv/djjosehernandez_"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-twitch"
        >
          {' '}
        </a>
        <a
          href="https://soundcloud.com/djjosehernandez"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-soundcloud"
        >
          {' '}
        </a>
        <a
          href="https://www.mixcloud.com/DjJoseHernandez/"
          target="_blank"
          rel="noopener noreferrer"
          class="fa fa-mixcloud"
        >
          {' '}
        </a>
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
