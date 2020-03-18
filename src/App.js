import React from 'react';
import './App.css';
import "babel-polyfill";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from './routes';

function App() {
  return (
    <div className="container">
      <Routes></Routes>
    </div>
  );
}

export default App;
