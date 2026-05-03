import React from 'react';
import { createRoot } from 'react-dom/client';
import BespokeDecorating from './BespokeDecorating.jsx';
import './index.css';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

root.render(
  <React.StrictMode>
    <BespokeDecorating />
  </React.StrictMode>
);
