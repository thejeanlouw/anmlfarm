import React from 'react';
import './entry-page.styles.css'
import Subtract from './images/Subtract.png'
import {withRouter} from 'react-router-dom'


import {signInWithGoogle, auth} from '../../firebase/firebase.utils'

class EntryPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentUser: null,
            hasDoneOnboarding: false,
            hasDoneProfile: false,
            hasDoneTerms: false,
        }
    }

    componentDidMount(){
        auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
            console.log(user);
          });
    }

    handleClick = () =>
    {
        if(!this.state.currentUser){
            const ret = signInWithGoogle();
            console.log(ret);
            alert(ret);
            this.setState({hasDoneSignIn: true});
            this.props.history.push(`${this.props.match.url}signin`)
        } else if(!this.state.hasDoneOnboarding){
            this.setState({hasDoneOnboarding: true});
            this.props.history.push(`${this.props.match.url}onboarding`)
        } else if(!this.state.hasDoneProfile){
            this.setState({hasDoneProfile: true});
            this.props.history.push(`${this.props.match.url}profile`)
        } else if(!this.state.hasDoneTerms){
            this.setState({hasDoneTerms: true});
            this.props.history.push(`${this.props.match.url}terms`)
        }
    }

    render(){
        return(
            <div className='entry-page'>
                <div className='spacer'></div>
                <img src={Subtract} onClick={this.handleClick} alt='main logo'></img>
                <div className='spacer'></div>
            </div>
        )
    }
}

export default withRouter(EntryPage);