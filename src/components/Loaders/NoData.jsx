import React from 'react'
import Lottie from 'react-lottie'
import noDataAnimationJson from '../../assets/animations/no-data.json'

const NoData = () => {
  return (
    <React.Fragment>
      <div className="flex-col">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: noDataAnimationJson,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          style={{
            width: 200
          }}
        />
        <h1>No Resource Found!</h1>
      </div>
    </React.Fragment>
  )
}

export default NoData