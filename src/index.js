import React from 'react';
import { render } from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// import App1 from './components/Tab1';
// import App2 from './components/Tab2';
import App3 from './components/Tab3';

render(
  <React.StrictMode>
    {/* <App1 /> */}    
    {/* <App2 /> */}
    <App3 />
  </React.StrictMode>,
  document.getElementById('root')
);
