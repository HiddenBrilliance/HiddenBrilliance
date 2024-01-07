import React from 'react';

const Home = () => {
  // Your component logic goes here
  return (
    <div>
    <h1>Video Player</h1>
    <video controls width="1000" height="auto">
      {/* Where I would add and import video after compressing size */}
      {/* <source src={process.env.PUBLIC_URL + '/videos/pbpVid.mp4'} type="video/mp4" /> */}
      Your browser does not support the video tag.
    </video>
  </div>
);
};

export default Home;