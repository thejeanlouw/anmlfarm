import React from 'react';
import './homepage.styles.css'

import MainPage from '../main-page/main-page.component';
import EventFeed from '../../components/events/event-feed/event-feed.component';

class Homepage extends React.Component{

    render(){
        return(
            <MainPage>
                <EventFeed />
            </MainPage>
        )
    }

}

export default Homepage;