import React from 'react';
import './entry-page.styles.css'
import Subtract from './images/Subtract.png'
import {withRouter} from 'react-router-dom'

class EntryPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }

    render(){
        return(
            <div className='entry-page'>
                <div className='spacer'></div>
                <img src={Subtract} onClick={(e)=>this.props.history.push(`${this.props.match.url}onboarding`)}></img>
                <div className='spacer'></div>
            </div>
        )
    }
}

export default withRouter(EntryPage);