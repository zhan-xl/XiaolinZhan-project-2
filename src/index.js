import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';

const element = <h1>Hello World</h1>;
createRoot(document.getElementById('root')).render(element);