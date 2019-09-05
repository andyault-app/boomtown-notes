import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DefaultLayout from '../views/DefaultLayout';
import Index from '../pages/Index';

const App = () => (
  <BrowserRouter>
    <DefaultLayout>
      <Switch>
        <Route exact path='/' component={Index} />
      </Switch>
    </DefaultLayout>
  </BrowserRouter>
);

export default App;