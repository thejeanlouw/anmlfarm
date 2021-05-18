import React from 'react';
import './App.css';
import EntryPage from './pages/entry-page/entry-page.component';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Onboarding from './page-collections/onboarding/onboarding.component';
import Homepage from './pages/homepage/homepage.component';
import LibraryPage from './pages/library-page/library-page.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user-actions';
import {auth} from './firebase/firebase.utils'
import {createUserProfileDocument} from './firebase/firebase.functions'
import AnimalPage from './pages/animal-page/animal-page.component';
import FarmPage from './pages/farm-page/farm-page.component';
import CampPage from './pages/camp-page/camp-page.component';


class App extends React.Component{

  constructor(props){
    super(props);
  }


  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        console.log("userAuth: ", userAuth)
        userRef.onSnapshot(snapShot => {
          this.props.setCurrentUser( 
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          );
        })
      }
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    auth.signOut();
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className='app'>
        <Switch>
          <Route path='/signin' render={() => (this.props.currentUser == null ? <SignInAndSignUpPage /> : <Redirect to='/' />)} />
          <Route path='/profile' component={LibraryPage} />
          <Route path='/library' component={LibraryPage} />
          <Route path='/farms' component={FarmPage}/>
          <Route path='/camps' component={CampPage}/>
          <Route path='/animals' component={AnimalPage}/>
          <Route path='/onboarding' component={Onboarding} />
          <Route path='/home' component={Homepage}/>
          <Route path='/' component={EntryPage} />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
