import { Avatar } from '@material-ui/core';
import React from 'react';
import Event from '../event/event.component';
import './event-feed.styles.scss'

class EventFeed extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            events: [
                {
                    title: 'Veiling', 
                    description: 'Kom saam japie hierdie naweek en verkoop jou varke!!!', 
                    imageUrl: 'https://images.unsplash.com/photo-1567201080580-bfcc97dae346?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', 
                    date: '29 Jan 2021'
                },{
                    title: 'Auction', 
                    description: 'Sheep!! Sheep!! Sheep!! MeatMasters auction ONE DAY ONLY!!!', 
                    imageUrl: 'https://images.unsplash.com/photo-1596557770430-92f21e94ee47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80', 
                    date: '5 Feb 2021'
                },{
                    title: 'FAIR', 
                    description: 'Enjoy a socially distanced fair. Bring the family and enjoy local music!', 
                    imageUrl: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80', 
                    date: '29 Feb 2021'
                },{
                    title: 'Farmer\'s Market', 
                    description: 'Lot\'s to buy and see this weekend at the local Farmer\'s Market!', 
                    imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', 
                    date: '12 Mar 2021'
                }
            ]
        }
    }

    render(){
        return(
            <div className='feed'>
                <div className='profile-pic'>
                    <Avatar className='avatar'>J</Avatar>
                </div>
                {this.state.events ? 
                    <div className='event-collection'>
                        {this.state.events.map(evt=>(
                            <Event info={evt} />
                        ))}
                    </div>
                :null}
            </div>
        )
    }
}

export default EventFeed;