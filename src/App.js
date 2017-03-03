import React from 'react';
import Grid from './components/Grid';
import { Rect, Circle } from './components/Modules';

const containerStyle = {
  'width': '2000px'
}

export default function App() {
    return (
    <div style={containerStyle}>
      
      <Grid width="1000" height="1000">
        <Rect x="100" width="200" height="100" fill="#00a072" />
        <Rect x="450" y="250" width="100" height="100" fill="#fd4140" />
        <Circle cx="300" cy="250" r="50" fill="violet"/>
      </Grid>
      
    </div>
  );
  
}

