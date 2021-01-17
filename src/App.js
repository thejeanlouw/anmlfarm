import React from 'react';
import './App.css';
import EntryPage from './pages/entry-page/entry-page.component';
import {Route, Switch} from 'react-router-dom'
import Onboarding from './page-collections/onboarding/onboarding.component';

function App() {
  return (
    <div className='app'>
    <Switch>
      <Route path='/onboarding' component={Onboarding} />
      <Route exact path='/' component={EntryPage} />
    </Switch>
    </div>
  );
}

export default App;
