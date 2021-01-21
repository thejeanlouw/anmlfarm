import React from 'react';
import './library-page.styles.scss'

import MainPage from '../main-page/main-page.component';
import LibraryFeed from '../../components/library-feed/library-feed.component';

class LibraryPage extends React.Component{

    constructor(props){
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <MainPage>
                <LibraryFeed />
            </MainPage>
        )
    }

}

export default LibraryPage;