import React from 'react';
import {createRoot} from 'react-dom/client';
import Blog from './blog';


const domNode = document.getElementById('app');

if(domNode !== null) {
  const root = createRoot(domNode);

  root.render(<Blog />)
}
