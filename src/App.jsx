import React from 'react';
import './assets/styles/app.scss';
import "babel-polyfill";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/build/toastr.min.css'
import { Routes } from './routes';
import LoaderComponent from './shared/components/loader.component';
import environment from './environments/environment';
export default () => {
  return (
    <div className="container">
        <span className='position-fixed cursor-pointer p-1 env-name' title='npm start --env=qa|dev|prod etc to change the environment'>{environment.env}</span>
      <Routes></Routes>
      <LoaderComponent />
    </div>
  );
}

