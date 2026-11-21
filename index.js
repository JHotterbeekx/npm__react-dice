import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDicePublished from 'react-dice-roller';
import ReactDice from './react-dice/react-dice';

createRoot(document.getElementById('root')).render(
  <div>
    <ReactDice sides={20} showProgress />
    <ReactDicePublished sides={20} showProgress />
  </div>
);