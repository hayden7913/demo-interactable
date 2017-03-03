import React from 'react'
import Grid from './components/Grid'
import { Rect, Circle } from './components/Modules'

const gridStyle = {
  "display": "block",
  "margin": "50px auto"
}

const containerStyle = {
  "width": "2000px"
}

export default function App() {
  
    return (
    <div style={containerStyle}>
      <Grid>
        <Rect />
        <Circle />
      </Grid>
    </div>
    );
  
}

