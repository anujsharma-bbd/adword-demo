import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import React from 'react';
import { notFoundComponent } from './components/not-found.component';
import { asyncComponent } from './shared/components/async.component';
const AsyncCampaignsListComponent = asyncComponent(() => import('./components/campaigns/campaigns-list.component'));

export const Routes = () => {
   return (
      <div className='router-container'>
         <Router>
            <Switch>
               <Route path='/' exact>
                  <Redirect to='/campaigns-list'></Redirect>
               </Route>
               <Route path='/campaigns-list' exact component={AsyncCampaignsListComponent}></Route>
               <Route path='*' component={notFoundComponent}></Route>
            </Switch>
         </Router>
      </div>
   );
}