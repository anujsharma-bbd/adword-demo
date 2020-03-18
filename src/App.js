import React from 'react';
import './assets/styles/app.scss';
import "babel-polyfill";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes } from './routes';
import LoaderComponent from './shared/loader';
function App() {
  return (
    <div className="container">
      <Routes></Routes>
      <LoaderComponent />
    </div>
  );
}

export default App;
