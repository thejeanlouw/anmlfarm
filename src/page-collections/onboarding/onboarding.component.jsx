import React from 'react';
import SimpleInfoPage from '../../pages/simple-info-page/simple-info-page.component';
import './onboarding.styles.css'
import {withRouter} from 'react-router-dom'

class Onboarding extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            stepIndex: 0,
            content: [
                {
                    image: `${process.env.PUBLIC_URL}/assets/vectors/simplify.svg`,
                    heading: 'Simplify',
                    body: 'Avoid paper stackpiles and digital logs and ledgers all over the place. Record your activity in the field, in one place, with or without connection!'
                },
                {
                    image: `${process.env.PUBLIC_URL}/assets/vectors/observe.svg`,
                    heading: 'Observe',
                    body: 'See live data of how your farm is performing, as well as predictions on events that might unfold, giving you the power of foresight and knowledge of what to do if and when something happens.'
                },
                {
                    image: `${process.env.PUBLIC_URL}/assets/vectors/react.svg`,
                    heading: 'React',
                    body: 'Make decisions, payments, sales and purchases on what your crop or stock needs right now. Never be away from your farm, even when away from your farm'
                },
                {
                    image: `${process.env.PUBLIC_URL}/assets/vectors/grow.svg`,
                    heading: 'Grow',
                    body: 'Join a community of farmers and people just like you, trying to live off of the land and give as they receive. '
                },
                {
                    image: `${process.env.PUBLIC_URL}/assets/vectors/thanks.svg`,
                    heading: 'Thank You!',
                    body: 'Thank you for downloading ANML Farm! Please note that the site is still under construction. We appreciate your interest, and you can rest assured that we are hard at work fixing all of the remaining issues. If you do spot something we can improve, do let us know! Thanks!'
                }
            ]
        }
    }

    nextStep = async () =>{
        if(this.state.stepIndex<this.state.content.length-1){
            await this.setState({stepIndex: this.state.stepIndex+1});
        } else this.props.history.push('/');
    }

    previousStep = () =>{
        if(this.state.stepIndex>0){
            this.setState({stepIndex: this.state.stepIndex-1});
        } else this.props.history.goBack();
    }

    currentHeading = () =>{
        return this.state.content[this.state.stepIndex].heading;
    }

    currentImage = () =>{
        return this.state.content[this.state.stepIndex].image;
    }

    currentBodyText = () =>{
        return this.state.content[this.state.stepIndex].body;
    }

    render(){
        return(
            <div className='onboarding'>
                ONBOARDING - {this.state.stepIndex}
                <SimpleInfoPage
                    cardBody={this.currentBodyText}
                    cardHeading={this.currentHeading}
                    mainImageSource={this.currentImage}
                    nextClickCallback={this.nextStep}
                    backClickCallback={this.previousStep}
                />
            </div>
        )
    }

}

export default withRouter(Onboarding);