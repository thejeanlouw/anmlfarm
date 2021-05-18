import React from 'react';
import Event from '../event-item/event-item.component';
import './event-feed.styles.scss'
import {connect} from 'react-redux'
import ProfileHeader from '../../profile/profile-header/profile-header.component';

class EventFeed extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            events: [
                {
                    title: 'Didymus Meatmaster Autction', 
                    description: 'MeastMasters like you\'ve never seen them before! Email for more info!', 
                    imageUrl: 'https://static.wixstatic.com/media/ed35aa_56d1705cecb04ea6812529ce668f8904~mv2.jpg/v1/fill/w_1225,h_613,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01/ed35aa_56d1705cecb04ea6812529ce668f8904~mv2.webp', 
                    linkUrl: 'https://www.parangelmata.com/event-details/didymus-meatmaster-auction',
                    date: '23 Jan 2021'
                },
                {
                    title: 'Standerton Sale', 
                    description: '262 BRAFORD X CATTLE, 2550 MERINO SHEEP, ONE SPECTACULAR SALE!', 
                    imageUrl: 'https://static.wixstatic.com/media/ed35aa_bf399b608dcc47bcbdc0e40b01249afe~mv2.jpg/v1/fill/w_872,h_436,fp_0.50_0.50,lg_2,q_90/ed35aa_bf399b608dcc47bcbdc0e40b01249afe~mv2.webp', 
                    linkUrl: 'https://www.parangelmata.com/event-details/standerton-sale',
                    date: '3 Feb 2021'
                },
                {
                    title: 'Farmer\'s Market', 
                    description: 'Lot\'s to buy and see this weekend at the local Farmer\'s Market!', 
                    imageUrl: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80', 
                    date: '12 Mar 2021'
                },
                {
                    title: 'Africa Agri-Tech', 
                    description: 'Africa Agri Tech is positioned as the annual meeting point where the Southern African agricultural community can gather to explore the technological and scientific advances that will assist agribusinesses to maximise their outputs and increase their profitability in the future.', 
                    imageUrl: 'https://static.wixstatic.com/media/ed35aa_97d18e8787c3430a8a7d1dd4a74c7509~mv2.png/v1/fill/w_1225,h_613,fp_0.50_0.50,lg_2,q_95,usm_0.66_1.00_0.01/ed35aa_97d18e8787c3430a8a7d1dd4a74c7509~mv2.webp', 
                    linkUrl: 'https://www.parangelmata.com/event-details/africa-agri-tech',
                    date: '22 Jun 2021'
                },,{
                    title: 'Auction', 
                    description: 'Sheep!! Sheep!! Sheep!! MeatMasters auction ONE DAY ONLY!!!', 
                    imageUrl: 'https://images.unsplash.com/photo-1596557770430-92f21e94ee47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80', 
                    date: '5 Feb 2021'
                },{
                    title: 'FAIR', 
                    description: 'Enjoy a socially distanced fair. Bring the family and enjoy local music!', 
                    imageUrl: 'https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80', 
                    date: '29 Feb 2021'
                }
            ]
        }
    }


    render(){
        return(
            <div className='feed'>
                <ProfileHeader />
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