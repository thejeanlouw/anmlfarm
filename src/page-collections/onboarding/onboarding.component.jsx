import React from 'react';
import SimpleInfoPage from '../../pages/simple-info-page/simple-info-page.component';
import './onboarding.styles.css'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {setOnboardingDone} from '../../redux/user/user-actions'

import simplify from './images/simplify.svg'
import observe from './images/observe.svg'
import react from './images/react.svg'
import grow from './images/grow.svg'
import thanks from './images/thanks.svg'

class Onboarding extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            stepIndex: 0,
            content: [
                {
                    image: simplify,
                    heading: 'Simplify',
                    body: 'Avoid paper stackpiles and digital logs and ledgers all over the place. Record your activity in the field, in one place, with or without connection!'
                },
                {
                    image: observe,
                    heading: 'Observe',
                    body: 'See live data of how your farm is performing, as well as predictions on events that might unfold, giving you the power of foresight and knowledge of what to do if and when something happens.'
                },
                {
                    image: react,
                    heading: 'React',
                    body: 'Make decisions, payments, sales and purchases on what your crop or stock needs right now. Never be away from your farm, even when away from your farm'
                },
                {
                    image: grow,
                    heading: 'Grow',
                    body: 'Join a community of farmers and people just like you, trying to live off of the land and give as they receive. '
                },
                {
                    image: thanks,
                    heading: 'Thank You!',
                    body: 'Thank you for downloading ANML Farm! Please note that the site is still under construction. We appreciate your interest, and you can rest assured that we are hard at work fixing all of the remaining issues. If you do spot something we can improve, do let us know! Thanks!'
                }
            ]
        }
    }

    nextStep = async () =>{
        if(this.state.stepIndex<this.state.content.length-1){
            await this.setState({stepIndex: this.state.stepIndex+1});
        } else {
            this.props.setOnboardingDone();
        }
    }

    previousStep = () =>{
        if(this.state.stepIndex>0){
            this.setState({stepIndex: this.state.stepIndex-1});
        } else this.props.history.goBack();
    }


    render(){
        const {hasDoneOnboarding} = this.props;
        return(
            
            <div className='onboarding'>
            {hasDoneOnboarding ? <Redirect to='/' />:
                <SimpleInfoPage
                    cardBody={this.state.content[this.state.stepIndex].body}
                    cardHeading={this.state.content[this.state.stepIndex].heading}
                    mainImageSource={this.state.content[this.state.stepIndex].image}
                    nextClickCallback={this.nextStep}
                />
            }
            </div>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    setOnboardingDone: () => dispatch(setOnboardingDone())
})

const mapStateToProps = state => ({
    hasDoneOnboarding: state.user.hasDoneOnboarding
})

export default connect(mapStateToProps, mapDispatchToProps)(Onboarding);