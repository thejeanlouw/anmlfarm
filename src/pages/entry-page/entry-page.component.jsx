import React from 'react';
import './entry-page.styles.css'
import Subtract from './images/Subtract.png'
import {withRouter} from 'react-router-dom'


import {connect} from 'react-redux'
import {setCurrentUser} from '../../redux/user/user-actions'
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';


class EntryPage extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        const {currentUser} = this.props;
        if(currentUser){
            if(!currentUser.hasDoneOnboarding){
                this.props.history.push(`${this.props.match.url}onboarding`)
            // } else if(!this.props.currentUser.hasDoneProfile){
            //     this.props.history.push(`${this.props.match.url}profile`)
            // } else if(!this.props.currentUser.hasDoneTerms){
            //     this.props.history.push(`${this.props.match.url}terms`)
            } else this.props.history.push(`${this.props.match.url}home`)
        }
    }

    handleClick = () =>
    {
        const {currentUser} = this.props;
        if(!currentUser){
            this.props.history.push(`${this.props.match.url}signin`)
        } else if(!currentUser.hasDoneOnboarding){
            this.props.history.push(`${this.props.match.url}onboarding`)
        // } else if(!this.props.currentUser.hasDoneProfile){
        //     this.props.history.push(`${this.props.match.url}profile`)
        // } else if(!this.props.currentUser.hasDoneTerms){
        //     this.props.history.push(`${this.props.match.url}terms`)
        }  else this.props.history.push(`${this.props.match.url}home`)
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


const mapStateToProps = (state) => createStructuredSelector({
    currentUser: selectCurrentUser
})

export default connect(mapStateToProps)(withRouter(EntryPage));