import React, {Component} from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import RegisterBook from '../components/register-book';

render(
    <BrowserRouter>
      <Switch>
          <Route path="/book" component={RegisterBook}/>
      </Switch>
    </BrowserRouter>,
    document.getElementById('container')
);
