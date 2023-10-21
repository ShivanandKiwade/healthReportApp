import React from "react"
import Svg, { Path } from "react-native-svg"

const calender = () => {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Path
        d="M3.404 0a.42.42 0 01.42.42v.785h4.51v-.78a.42.42 0 11.84 0v.78H10.8a1.2 1.2 0 011.2 1.2V10.8A1.2 1.2 0 0110.8 12H1.2A1.2 1.2 0 010 10.8V2.406a1.2 1.2 0 011.2-1.2h1.784V.42A.42.42 0 013.404 0zM.84 4.645v6.156a.36.36 0 00.36.36h9.6a.36.36 0 00.36-.36V4.654L.84 4.645zM4 8.771v1H3v-1h1zm2.5 0v1h-1v-1h1zm2.5 0v1H8v-1h1zM4 6.385v1H3v-1h1zm2.5 0v1h-1v-1h1zm2.5 0v1H8v-1h1zm-6.016-4.34H1.2a.36.36 0 00-.36.36v1.4l10.32.01v-1.41a.36.36 0 00-.36-.36H9.174v.557a.42.42 0 01-.84 0v-.557h-4.51v.552a.42.42 0 11-.84 0v-.552z"
        fill="#0B1A5B"
      />
    </Svg>
  )
}

export default calender;
