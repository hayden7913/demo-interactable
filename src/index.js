/*import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));*/

import React from 'react'
import { render } from 'react-dom'
import interact from 'interact.js'
import Interactive from './components/Interactable'
import App from './App';
const draggableOptions = {
  snap: {
     targets: [
       interact.createSnapGrid({ x: 10, y: 10 })
     ],
     range: Infinity,
     relativePoints: [ { x: 0, y: 0 } ]
   },
   
   onmove: event => {
  
    const target = event.target
    // keep the dragged position in the data-x/data-y attributes
    const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
  
    // translate the element
    target.style.webkitTransform =
    target.style.transform =
      'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    console.log(target)

  }
}

const gridStyle = {
  "display": "block",
  "margin": "50px auto"
}

const containerStyle = {
  "width": "2000px"
}

const example = (
  <div style={containerStyle}>
    
    <svg style={gridStyle} width="1000" height="1000" >
    <defs>
      <pattern id="cell" width="10" height="10" patternUnits="userSpaceOnUse">
        <path d={`M ${10} 0 L 0 0 0 ${10}`} fill="none" stroke="#ADD8E6" strokeWidth="1"/>
      </pattern>
    </defs>
    <rect width="100%" height="1000" fill="url(#cell)" />
    
    <Interactive draggable draggableOptions={draggableOptions}>
        <rect id="test-box" width="500" height="100" fill="#00a072" />
    </Interactive>
    
    <Interactive draggable draggableOptions={draggableOptions}>
        <rect x="400" y="200" width="200" height="200" fill="#c70039" />
    </Interactive>
    
    <Interactive draggable draggableOptions={draggableOptions}>
       <circle cx={50} cy={50} r={50} fill="violet" />
    </Interactive>

  </svg>

      
  </div>
)

render(<App/>, document.getElementById('root'));