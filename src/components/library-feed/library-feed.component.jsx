import React from 'react';
import LibraryMenuBar from '../library-menu-bar/library-menu-bar.component';
import './library-feed.styles.scss'

import cow from './images/cow.png'
import pig from './images/pig.png'
import sheep from './images/sheep.png'

class LibraryFeed extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentTab: 'none',
            libraryData: [
                {   
                    id: 1,
                    topic: 'Sheep',
                    menuImageUrl: sheep,
                    items: [
                        {
                            id: 'sh1',
                            title: 'HOW TO: Handle Your Sheep',
                            linkUrl: '',
                            imageUrl: ''
                        },
                        {
                            id: 'sh2',
                            title: 'HOW TO: Recognise the Signs of Sick Sheep',
                            linkUrl: '',
                            imageUrl: ''
                        },
                        {
                            id: 'sh3',
                            title: 'HOW TO: Housing',
                            linkUrl: '',
                            imageUrl: ''
                        }
                    ]
                },
                {   
                    id: 1,
                    topic: 'Pigs',
                    menuImageUrl: pig,
                    items: [
                        {
                            id: 'pi1',
                            title: 'HOW TO: Handle Your Sheep',
                            linkUrl: '',
                            imageUrl: ''
                        },
                        {
                            id: 'pi2',
                            title: 'HOW TO: Recognise the Signs of Sick Sheep',
                            linkUrl: '',
                            imageUrl: ''
                        },
                        {
                            id: 'pi3',
                            title: 'HOW TO: Housing',
                            linkUrl: '',
                            imageUrl: ''
                        }
                    ]
                },
                {   
                    id: 1,
                    topic: 'Cattle',
                    menuImageUrl: cow,
                    items: [
                        {
                            id: 'co1',
                            title: 'COMING SOON',
                            linkUrl: '',
                            imageUrl: ''
                        }
                    ]
                }]
            }
    }

    render(){
        return(
            <div className='library-feed'>
                <LibraryMenuBar collection={this.state.libraryData} />
            </div>
        )
    }
}

export default LibraryFeed;