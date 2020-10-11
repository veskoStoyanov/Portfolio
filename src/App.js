import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavBar from './components/NavBar';
import Home from './components/index';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';

import './App.css';

const App = () =>(
  <>
    <CssBaseline />
    <NavBar />
    <Switch>
      <Route path='/' exact component={ Home } />
      <Route path='/resume' exact component={ Resume } />
      <Route path='/portfolio' exact component={ Portfolio } />
    </Switch>
  </>
);

export default App;
