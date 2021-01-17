import React from 'react';
import './entry-page.styles.css'
import Subtract from './images/Subtract.png'

class EntryPage extends React.Component {
    constructor(){
        super();
        this.state = {
            user: null
        }
    }

    render(){
        return(
            <div className='entry-page'>
                <div className='spacer'></div>
                <img src={Subtract} onClick={(e)=>console.log('Clicked!')}></img>
                <div className='spacer'></div>
            </div>
        )
    }
}

export default EntryPage;