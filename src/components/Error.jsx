import React from 'react'
import Lottie from 'react-lottie';
import errorAnimationJson from '../assets/animations/error-animation.json'

const Error = ({ message }) => {

  return (
    <React.Fragment>
      <div style={{ width: '100px', height: '100px' }} />
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: errorAnimationJson,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}

      />
      <h1>Failed to fetch resources!</h1>
    </React.Fragment>
  );
};

export default Error