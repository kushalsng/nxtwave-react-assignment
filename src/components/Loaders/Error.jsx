import React from 'react'
import Lottie from 'react-lottie';
import errorAnimationJson from '../../assets/animations/error-animation.json'

const Error = () => {

  return (
    <React.Fragment>
      <div className="flex-col">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: errorAnimationJson,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          style={{
            width: 200
          }}
        />
        <h1>Failed to fetch resources!</h1>
      </div>
    </React.Fragment>
  );
};

export default Error