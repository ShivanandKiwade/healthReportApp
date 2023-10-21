import React from "react"
import Svg, { Path } from "react-native-svg"

const activity = () => {
  return (
    <Svg
      width={18}
      height={12}
      viewBox="0 0 18 12"
      fill="none"
    >
      <Path
        d="M14.727 1.6H8.182v5.6H1.636V0H0v12h1.636V9.6h14.728V12H18V4.8c0-.849-.345-1.663-.959-2.263a3.31 3.31 0 00-2.314-.937zM4.91 6.4c.651 0 1.275-.253 1.736-.703.46-.45.719-1.06.719-1.697s-.259-1.247-.72-1.697A2.483 2.483 0 004.91 1.6c-.65 0-1.275.253-1.736.703-.46.45-.718 1.06-.718 1.697s.258 1.247.718 1.697c.46.45 1.085.703 1.736.703z"
        fill="#3A3A3C"
      />
    </Svg>
  )
}

export default activity;
