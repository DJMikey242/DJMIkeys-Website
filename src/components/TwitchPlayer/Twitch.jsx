import React from 'react';
// import ReactTwitchEmbedVideo from 'react-twitch-embed-video';
import ReactPlayer from 'react-player/twitch';
import './Twitch.css';

// function Twitch() {
//   return (
//     <div className="twitch-player">
//       <ReactTwitchEmbedVideo theme="dark" channel="djjosehernandez_" />
//     </div>
//   );
// }

function Twitch() {
  return (
    <div className="twitch-player">
      <ReactPlayer
        url={'https://www.twitch.tv/djjosehernandez_'}
        config={{
          options: {
            theme: 'dark',
            autoplay: true,
          },
        }}
      />
    </div>
  );
}

export default Twitch;
