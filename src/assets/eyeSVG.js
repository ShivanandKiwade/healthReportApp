import React from "react"
import Svg, { Path } from "react-native-svg"

const eyeSVG = ()=> {
  return (
    <Svg
      width={15}
      height={11}
      viewBox="0 0 15 11"
      fill="none"
    >
      <Path
        d="M0 5.156S2.813 0 7.5 0C12.188 0 15 5.156 15 5.156s-2.813 5.157-7.5 5.157c-4.688 0-7.5-5.157-7.5-5.157zm7.5 3.282a3.281 3.281 0 100-6.563 3.281 3.281 0 000 6.563z"
        fill="#fff"
      />
    </Svg>
  )
}

export default eyeSVG;