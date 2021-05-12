import React from 'react';
import LibraryMenuBar from '../library-menu-bar/library-menu-bar.component';
import './library-feed.styles.scss'

import cow from './images/cow.png'
import pig from './images/pig.png'
import sheep from './images/sheep.png'

import LibraryItem from '../library-item/library-item.component';

class LibraryFeed extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentTab: 'Sheep',
            libraryData: [
                {   
                    id: 1,
                    topic: 'Sheep',
                    menuImageUrl: sheep,
                    items: [
                        {
                            id: 'sh1',
                            subtitle: 'HOW TO: Handle Your Sheep',
                            linkUrl: 'https://www.parangelmata.com/post/how-to-handle-your-sheep'
                        },
                        {
                            id: 'sh2',
                            subtitle: 'HOW TO: Recognise The Signs Of Sick Sheep',
                            linkUrl: 'https://www.parangelmata.com/post/how-to-recognise-the-signs-of-sick-sheep'
                        },
                        {
                            id: 'sh3',
                            subtitle: 'HOW TO: Housing',
                            linkUrl: 'https://www.parangelmata.com/post/how-to-housing'
                        },
                        {
                            id: 'sh3',
                            subtitle: 'HOW TO: Transport Your Sheep',
                            linkUrl: 'https://www.parangelmata.com/post/how-to-transport-your-sheep'
                        }
                    ]
                },
                {   
                    id: 2,
                    topic: 'Pigs',
                    menuImageUrl: pig,
                    items: [
                        {
                            id: 'pi1',
                            subtitle: 'HOW TO: Select The Right Pig For Breeding',
                            linkUrl: 'https://www.parangelmata.com/post/how-to-select-the-right-pig-for-breeding',
                        },
                        {
                            id: 'pi2',
                            subtitle: 'HOW TO: Housing',
                            linkUrl: 'https://www.parangelmata.com/post/how-to-housing-1'
                        },
                        {
                            id: 'pi3',
                            subtitle: 'HOW TO: Transport Your Pigs',
                            linkUrl: 'https://www.parangelmata.com/post/how-to-transport-your-sheep'
                        },
                        {
                            id: 'pi4',
                            subtitle: 'TIPS AND TRICKS',
                            linkUrl: 'https://www.parangelmata.com/post/how-to-transport-your-sheep'
                        }
                    ]
                },
                {   
                    id: 3,
                    topic: 'Cattle',
                    menuImageUrl: cow,
                    items: [
                        {
                            id: 'co1',
                            subtitle: 'COMING SOON'
                        }
                    ]
                }]
            }
    }

    onMenuClick = (name) =>
    {
        this.setState({currentTab:name});
    }

    render(){
        const collection = this.state.libraryData.filter(a=>a.topic===this.state.currentTab);
        const collectionData = collection[0]?.items;
        return(
            <div className='library-feed'>
                <LibraryMenuBar collection={this.state.libraryData} callback={this.onMenuClick}/>
                <div className='library-collection'>
                        {collectionData ? collectionData.map(evt=>(
                            <LibraryItem  info={evt} {...evt}/>
                        )):null}
                </div>
            </div>
        )
    }
}

export default LibraryFeed;