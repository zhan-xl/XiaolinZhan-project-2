import React from 'react';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import LetterBox from "./components/wordle";
import './App.css'
import Wordle from "./components/wordle";

const element = <h1>Hello World</h1>;
createRoot(document.getElementById('root')).render(<Wordle />);