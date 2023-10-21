import React from "react"
import Svg, { Path } from "react-native-svg"

const favorit = ()=> {
  return (
    <Svg
      width={14}
      height={13}
      viewBox="0 0 14 13"
      fill="none"
    >
      <Path
        d="M7 13l-.967-.867A75.471 75.471 0 013.25 9.517c-.733-.734-1.317-1.392-1.75-1.975-.433-.584-.736-1.12-.908-1.609a4.484 4.484 0 01-.259-1.5c0-1.044.35-1.916 1.05-2.616.7-.7 1.573-1.05 2.617-1.05.578 0 1.128.122 1.65.366.522.245.972.59 1.35 1.034a3.953 3.953 0 011.35-1.034A3.846 3.846 0 0110 .767c1.044 0 1.917.35 2.617 1.05.7.7 1.05 1.572 1.05 2.616 0 .511-.086 1.011-.259 1.5-.172.49-.475 1.025-.908 1.609-.433.583-1.017 1.241-1.75 1.975a75.44 75.44 0 01-2.783 2.616L7 13z"
        fill="#C36"
      />
    </Svg>
  )
}

export default favorit;
