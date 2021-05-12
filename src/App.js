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

  render(){
    return (
      <div className='app'>
        <Switch>
          <Route path='/signin' render={() => (this.props.currentUser == null ? <SignInAndSignUpPage /> : <Redirect to='/' />)} />
          <Route path='/library' component={LibraryPage} />
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
