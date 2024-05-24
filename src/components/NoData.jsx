import React from 'react'
import Lottie from 'react-lottie'
import noDataAnimationJson from '../assets/animations/no-data.json'

const NoData = () => {
  return (
    <React.Fragment>
      <div style={{ width: '100px', height: '100px' }} />
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: noDataAnimationJson,
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
          },
        }}

      />
      <h1>No Resource Found!</h1>
    </React.Fragment>
  )
}

export default NoData