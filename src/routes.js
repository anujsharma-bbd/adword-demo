import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { notFound } from './components/not-found.component';
import { asyncComponent } from './shared/asyncComponent';
const AsyncCampaignsListComponent = asyncComponent(() => import('./components/campaigns-list/campaigns-list.component'));

export const Routes = () => {
   return (
      <div className='router-container'>
         <Router>
            <Switch>
               <Route path='/' exact>
                  <Redirect to='/campaigns-list'></Redirect>
               </Route>
               <Route path='/campaigns-list' exact component={AsyncCampaignsListComponent}></Route>
               <Route path='*' component={notFound}></Route>
            </Switch>
         </Router>
      </div>
   );
}