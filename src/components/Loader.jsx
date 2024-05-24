import React from 'react'
import Lottie from 'react-lottie'
import loadingAnimationJson from '../assets/animations/loading.json'

const Loader = () => {
  return (
    <React.Fragment>
      <div style={{ width: '50px', height: '50px' }} />
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: loadingAnimationJson,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}

      />
    </React.Fragment>
  )
}

export default Loader