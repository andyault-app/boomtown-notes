import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import DefaultLayout from '../views/DefaultLayout';
import Index from '../pages/Index';
import NotFound from '../pages/NotFound';

const CreateRedirectTo = (to) => (() => (
    <Redirect to={to} />
));

const App = () => (
  <BrowserRouter>
    <DefaultLayout>
      <Switch>
        <Route exact path='/' render={CreateRedirectTo('/notes')} />
        <Route exact path='/notes' component={Index} />

        <Route component={NotFound} />
      </Switch>
    </DefaultLayout>
  </BrowserRouter>
);

export default App;