import React from 'react'
import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { createStructuredSelector } from 'reselect';
import { createNewCampAsync } from '../../../redux/camps/camps.actions';
import { selectCurrentFarm } from '../../../redux/farm-details/farm-details.selectors';
import { selectCurrentUser } from '../../../redux/user/user.selectors';
import CustomButton from '../../shared/custom-button/custom-button.component';
import FormInput from '../../shared/form-input/form-input.component';
import UploadOrSnapshot from '../../shared/upload-or-snapshot/upload-or-snapshot.component';
import newCampIcon from './Assets/new-camp.svg'
import './new-camp.styles.scss'


class NewCamp extends Component{

    state ={
        error: null,
        campDetails: {}
    }

    handleSubmission = async event => {
        event.preventDefault();

        const {user, createNewCampAsync, history} = this.props;

        if(!user) return;
        createNewCampAsync({...this.state.campDetails, creatingUserId: user?.uid})
        history.push('/camps/edit')
    }

    handleChange = async event =>{
        this.setState({campDetails: {...this.state.campDetails, 
            [event.target.name]: event.target.value}});
    }

    handleImageUploaded = (image) => {
        if(!image) return;
        this.setState({campDetails: {...this.state.campDetails, campImage: image}});
    }

    componentDidMount(){
        const {user, farm} = this.props;
        this.setState({campDetails: {
            creatingUserId: user?.uid,
            farmId: farm?.farmId
        }})
    }

    render(){
        if(!this.props.user) return(
            <div>PLEASE LOG IN TO CREATE A CAMP</div>
        );
        const {error, campDetails: {displayName, campPurpose}} = this.state;
        return(
            
            <div className="new-camp">
                <div className="new-camp-intro">
                    <img src={newCampIcon} />
                    <h2>WELCOME TO YOUR NEW CAMP!</h2>
                    <span>Please provide us with some information about your camp:</span>
                    
                    <UploadOrSnapshot captureCompleteCallback={this.handleImageUploaded}/>
                </div>
                
                {error?<span className='error-message'>{error}</span>:null}
                <form className='new-camp-form' onSubmit={this.handleSubmission}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName ?? ''}
                        onChange={this.handleChange}
                        label='Display Name' 
                        required/>

                    <FormInput
                        type='text'
                        name='campPurpose'
                        value={campPurpose ?? ''}
                        onChange={this.handleChange}
                        label='Camp Purpose' 
                        required/>

                    
                    <CustomButton
                        type='submit'>CREATE CAMP</CustomButton>

                </form>
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    user: selectCurrentUser,
    farm: selectCurrentFarm
})

const mapDispacthToProps = dispatch => ({
    createNewCampAsync: campDetails => dispatch(createNewCampAsync(campDetails))
})

export default connect(mapStateToProps, mapDispacthToProps)(withRouter(NewCamp));