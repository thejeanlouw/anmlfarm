import React from 'react';
import './App.css';
import EntryPage from './pages/entry-page/entry-page.component';
import {Route, Switch} from 'react-router-dom'
import Onboarding from './page-collections/onboarding/onboarding.component';
import Homepage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className='app'>
    <Switch>
      <Route path='/onboarding' component={Onboarding} />
      <Route path='/home' component={Homepage} />
      <Route path='/' component={EntryPage} />
    </Switch>
    </div>
  );
}

export default App;
