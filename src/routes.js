import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { notFound } from './components/not-found.component';
import CampaignsListComponent from './components/campaign-filter/campain-filter.component';

export const Routes = () => {
   return (
      <div className='router-container'>
         <Router>
            <div className="routes-container">
               <Switch>
                  <Route exact path='/' >
                     <Redirect to='/campaigns-list' />
                  </Route>
                  <Route exact path='/campaigns-list' component={CampaignsListComponent} />
                  <Route path='*' component={notFound} />
               </Switch>
            </div>
         </Router>
      </div>
   );
}