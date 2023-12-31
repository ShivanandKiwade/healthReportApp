import React from "react"
import Svg, { Path } from "react-native-svg"

const clock = () => {
  return (
    <Svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Path
        d="M5.994 0A5.997 5.997 0 000 6c0 3.312 2.682 6 5.994 6A6.003 6.003 0 0012 6c0-3.312-2.688-6-6.006-6zM6 10.8A4.799 4.799 0 011.2 6c0-2.652 2.148-4.8 4.8-4.8 2.652 0 4.8 2.148 4.8 4.8 0 2.652-2.148 4.8-4.8 4.8zM5.868 3h-.036a.43.43 0 00-.432.432v2.832c0 .21.108.408.294.516l2.49 1.494a.428.428 0 00.647-.303.426.426 0 00-.209-.435L6.3 6.156V3.432A.43.43 0 005.868 3z"
        fill="#0B1A5B"
      />
    </Svg>
  )
}

export default clock;
