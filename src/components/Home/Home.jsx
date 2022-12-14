import React from 'react';
import './Home.css';
import Background from './djjosehernandez.png';

var sectionStyle = {
  top: '0',
  bottom: '0',
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundImage: `url('${Background}')`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

function Home() {
  return (
    <>
      <div className="mixcloud-home">
        <iframe
          title="mixcloud-home-player"
          width="100%"
          height="60"
          src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&autoplay=1&feed=%2FDjJoseHernandez%2F"
          frameBorder="0"
          allow="autoplay"
        ></iframe>
      </div>
      <div className="container-book-now">
      <a className="cta" href="mailto:djjosehernandez@hotmail.com?subject=Booking inquiry">
        <button className='book-now'>BOOK NOW</button>
      </a>
      </div>
      <section rel="preload" style={sectionStyle}>
        {' '}
      </section>
    </>
  );
}

export default Home;
