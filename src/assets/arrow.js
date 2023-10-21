import React from "react"
import Svg, { Path } from "react-native-svg"

const arrow = () => {
  return (
    <Svg
      width={5}
      height={10}
      viewBox="0 0 5 10"
      fill="none"
    >
      <Path d="M0 0l5 5-5 5V0z" fill="#3A3A3C" />
    </Svg>
  )
}

export default arrow;
