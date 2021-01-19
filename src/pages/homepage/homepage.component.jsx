import React from 'react';
import './homepage.styles.css'

import Avatar from '@material-ui/core/Avatar';
import MainPage from '../main-page/main-page.component';
import EventFeed from '../../components/event-feed/event-feed.component';

class Homepage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <MainPage>
                <EventFeed />
            </MainPage>
        )
    }

}

export default Homepage;