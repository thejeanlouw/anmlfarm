import React from 'react';
import LibraryMenuBar from '../library-menu-bar/library-menu-bar.component';
import '/library-feed.styles.scss'

class LibraryFeed extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentTab: 'none',
            libraryData: [
                {   
                    id: 1,
                    topic: 'Sheep',
                    menuImageUrl: '',
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
                }]
            }
        }
    }

    render(){
        return(
            <div className='library-feed'>
                <LibraryMenuBar collection={this.state.libraryData} />
                <li
            </div>
        )
    }

}