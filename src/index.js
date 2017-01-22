import React from 'react';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';


injectTapEventPlugin();
import "./Style/reset.css";


import App from './App.js';

render(<App />,document.getElementById('root'));
