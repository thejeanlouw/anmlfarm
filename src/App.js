import React from 'react';
import './App.css';
import EntryPage from './pages/entry-page/entry-page.component';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Onboarding from './page-collections/onboarding/onboarding.component';
import Homepage from './pages/homepage/homepage.component';
import LibraryPage from './pages/library-page/library-page.component';

import { auth } from './firebase/firebase.utils'

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL + '/'}>
    <div className='app'>
      <Switch>
        <Route path='/signin' component={Onboarding} />
        <Route path='/library' component={LibraryPage} />
        <Route path='/onboarding' component={Onboarding} />
        <Route path='/home' component={Homepage} />
        <Route path='/' component={EntryPage} />
      </Switch>
    </div>
    </HashRouter>
  );
}

export default App;
