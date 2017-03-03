import React from 'react'
import Interactive from './Interactable'
import interact from 'interact.js'
import { cellHeight, cellWidth } from '../config';

const draggableOptions = {
  restrict: {
      restriction: "parent",
      //endOnly: true,
      elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
    },
    
  snap: {
     targets: [
       interact.createSnapGrid({ x: cellHeight, y: cellWidth})
     ],
     range: Infinity,
     relativePoints: [ { x: 0, y: 0 } ]
   },
   
   onmove: event => {

    const target = event.target
    const initalX = target.getAttribute('x');
    let dx = event.dx
    let dy = event.dy
    let x,y;
    
    dx = dx > 0 && Math.abs(dx) < cellWidth ? cellWidth : Math.floor(dx/cellWidth)*cellWidth;
    dy = dy > 0 && Math.abs(dy) < cellHeight ? cellHeight : Math.floor(dy/cellHeight)*cellHeight;
    
    // keep the dragged position in the data-x/data-y attributes
    x = (parseFloat(target.getAttribute('data-x')) || 0) + dx
    y = (parseFloat(target.getAttribute('data-y')) || 0) + dy
    
    x = parseFloat(target.getAttribute('data-x')) + parseFloat(target.getAttribute('x')) < 0 ? 0 - parseFloat(target.getAttribute('x')) : x; 
    
    // translate the element
    target.style.webkitTransform = 
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
      
    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);


  }
}

export function Rect(props) {
  return (
    <Interactive draggable draggableOptions={draggableOptions}>
        <rect x="100" width="300" height="100" fill="#00a072" />
    </Interactive>
  );
}

export function Circle(props) {
  return (
    <Interactive draggable draggableOptions={draggableOptions}>
       <circle x="0" cx={50} cy={50} r={50} fill="violet" />
    </Interactive>
  );
}