import React from 'react'

const gridStyle = {
  "display": "block",
  "marginTop": "50px"
}

export default function Grid(props) {
  
  return (
  <svg style={gridStyle} width="1000" height="1000 ">
    <defs>
      <pattern id="cell" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d={`M ${10} 0 L 0 0 0 ${10}`} fill="none" stroke="#ADD8E6" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="1000" fill="url(#cell)" />
    {props.children}
</svg>);

}
