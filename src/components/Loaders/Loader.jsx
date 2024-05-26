import React from 'react'
import Lottie from 'react-lottie'
import loadingAnimationJson from '../../assets/animations/loading.json'

const Loader = () => {
  return (
    <React.Fragment>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: loadingAnimationJson,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}
        style={{
          width: 200
        }}
      />
    </React.Fragment>
  )
}

export default Loader